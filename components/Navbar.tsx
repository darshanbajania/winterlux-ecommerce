"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"
import { useAuth } from "@/context/AuthContext"
import { User, LogOut } from "lucide-react"

export function Navbar() {
    const { cartCount, setIsCartOpen } = useCart()
    const { user, logout } = useAuth()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
                    WinterLux
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                    <Link href="/" className="hover:text-primary transition-colors">New Arrivals</Link>
                    <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
                </div>
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link href="/dashboard" className="text-sm font-medium hidden md:block hover:text-primary transition-colors">
                                Hi, {user.name}
                            </Link>
                        </div>
                    ) : (
                        <Link href="/login">
                            <Button variant="ghost" size="sm">Log in</Button>
                        </Link>
                    )}
                    <Button size="sm" onClick={() => setIsCartOpen(true)}>
                        Cart ({cartCount})
                    </Button>
                </div>
            </div>
        </nav>
    )
}
