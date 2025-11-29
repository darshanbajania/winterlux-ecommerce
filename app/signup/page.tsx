"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SignupPage() {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            {/* Left Side - Image */}
            <div className="hidden md:block relative bg-slate-900 order-2">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1995&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
                <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
                    <div className="text-2xl font-bold tracking-tighter text-right">WinterLux</div>
                    <div className="text-right">
                        <h2 className="text-4xl font-bold mb-4">Join the Club</h2>
                        <p className="text-slate-300 text-lg max-w-md ml-auto">
                            Create an account to unlock exclusive member benefits and early access to new drops.
                        </p>
                    </div>
                    <div className="text-sm text-slate-400 text-right">
                        © 2025 WinterLux. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-6 bg-slate-50 order-1">
                <div className="w-full max-w-md">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                        <p className="text-muted-foreground">Enter your details to get started</p>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="first-name">First name</label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="last-name">Last name</label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                            <Input id="email" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="password">Password</label>
                            <Input id="password" type="password" placeholder="Create a password" />
                        </div>

                        <Link href="/dashboard">
                            <Button className="w-full mt-6" size="lg">Create Account</Button>
                        </Link>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Already have an account? </span>
                        <Link href="/login" className="font-medium text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
