"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { API_BASE_URL } from "@/lib/utils"

interface User {
    email: string
    name: string
    is_staff: boolean
    is_superuser: boolean
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<{ success: boolean; role?: string }>
    logout: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Check for saved session
        const savedUser = localStorage.getItem("auth_user")
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch (e) {
                console.error("Failed to parse auth user", e)
                localStorage.removeItem("auth_user")
            }
        }
        setIsLoading(false)
    }, [])

    const login = async (email: string, password: string): Promise<{ success: boolean; role?: string }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/accounts/token/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: email, password }),
            })

            if (response.ok) {
                const data = await response.json()
                const newUser = {
                    email: data.email,
                    name: data.username,
                    is_staff: data.is_staff,
                    is_superuser: data.is_superuser
                }
                setUser(newUser)
                localStorage.setItem("auth_user", JSON.stringify(newUser))
                localStorage.setItem("access_token", data.access)
                localStorage.setItem("refresh_token", data.refresh)

                return {
                    success: true,
                    role: data.is_staff ? 'admin' : 'user'
                }
            }
        } catch (error) {
            console.error("Login failed", error)
        }
        return { success: false }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("auth_user")
        router.push("/")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
