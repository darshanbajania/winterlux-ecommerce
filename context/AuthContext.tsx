"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface User {
    email: string
    name: string
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<boolean>
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

    const login = async (email: string, password: string): Promise<boolean> => {
        // Dummy authentication
        if (email === "user@example.com" && password === "password") {
            const newUser = { email, name: "Demo User" }
            setUser(newUser)
            localStorage.setItem("auth_user", JSON.stringify(newUser))
            return true
        }
        return false
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
