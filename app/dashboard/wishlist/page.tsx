"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Trash2 } from "lucide-react"

export default function WishlistPage() {
    // Simulate some wishlisted items (first 3 products)
    const wishlistItems = Object.values(products).slice(0, 3)

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
                <p className="text-muted-foreground">Saved items for later.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden group border-none shadow-sm hover:shadow-xl transition-all duration-300">
                        <Link href={`/product/${item.slug}`}>
                            <div className="aspect-[3/4] bg-white relative mb-4 overflow-hidden rounded-xl">
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={500}
                                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </Link>
                        <div className="px-2 pb-2">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground">{item.color}</p>
                                </div>
                                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-auto">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="font-bold text-lg">{item.displayPrice}</span>
                                <Link href={`/product/${item.slug}`}>
                                    <Button size="sm">
                                        View
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {wishlistItems.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">Your wishlist is empty.</p>
                    <Link href="/shop">
                        <Button>Continue Shopping</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}
