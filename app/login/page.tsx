"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            {/* Left Side - Image */}
            <div className="hidden md:block relative bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2011&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
                <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
                    <div className="text-2xl font-bold tracking-tighter">WinterLux</div>
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                        <p className="text-slate-300 text-lg max-w-md">
                            Sign in to access your exclusive winter collection and track your orders.
                        </p>
                    </div>
                    <div className="text-sm text-slate-400">
                        © 2025 WinterLux. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-6 bg-slate-50">
                <div className="w-full max-w-md">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Sign In</h1>
                        <p className="text-muted-foreground">Enter your email to access your account</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                            <Input id="email" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium" htmlFor="password">Password</label>
                                <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <Input id="password" type="password" placeholder="••••••••" />
                        </div>

                        <Link href="/dashboard">
                            <Button className="w-full mt-6" size="lg">Sign In</Button>
                        </Link>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Don't have an account? </span>
                        <Link href="/signup" className="font-medium text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
