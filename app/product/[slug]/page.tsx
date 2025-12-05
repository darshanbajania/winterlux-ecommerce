"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Snowflake, Wind, Thermometer } from "lucide-react"
import { notFound, useParams } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { useState } from "react"
import { products } from "@/lib/products"

export default function ProductPage() {
    const params = useParams()
    const slug = params?.slug as string
    const product = products[slug as keyof typeof products]
    const { addToCart } = useCart()
    const [selectedSize, setSelectedSize] = useState<string>("")

    if (!product) {
        notFound()
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size")
            return
        }
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
            size: selectedSize
        })
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
                </Link>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="bg-white rounded-3xl p-12 flex items-center justify-center">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={600}
                            className="object-contain"
                        />
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                            <p className="text-xl text-muted-foreground mb-4">{product.color}</p>
                            <p className="text-3xl font-bold text-primary">{product.displayPrice}</p>
                        </div>

                        <p className="text-lg leading-relaxed mb-8">{product.description}</p>

                        {/* Features */}
                        <div className="mb-8">
                            <h3 className="font-bold mb-4">Key Features</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-8">
                            <h3 className="font-bold mb-4">Select Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-3 border rounded-xl transition-colors font-medium ${selectedSize === size
                                            ? "border-primary bg-primary text-white"
                                            : "border-slate-200 hover:border-primary hover:bg-slate-50"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </Button>
                            <Button variant="outline" size="lg">
                                Save for Later
                            </Button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <Snowflake className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                                    <p className="text-xs text-muted-foreground">Extreme Cold Protection</p>
                                </div>
                                <div>
                                    <Wind className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                                    <p className="text-xs text-muted-foreground">Windproof</p>
                                </div>
                                <div>
                                    <Thermometer className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                                    <p className="text-xs text-muted-foreground">Temperature Control</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
