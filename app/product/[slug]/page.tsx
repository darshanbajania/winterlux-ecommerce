"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Snowflake, Wind, Thermometer } from "lucide-react"
import { notFound, useParams } from "next/navigation"

const products = {
    "arctic-parka": {
        name: "Arctic Parka",
        price: "$299",
        color: "Midnight Blue",
        image: "/images/parka.png",
        description: "The ultimate winter companion. Our Arctic Parka features premium down insulation rated for extreme cold, a detachable fur-lined hood, and windproof outer shell. Designed for temperatures down to -30°C.",
        features: ["Premium 800-fill down insulation", "Waterproof and windproof", "Adjustable fur-lined hood", "Multiple interior pockets"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    "alpine-shell": {
        name: "Alpine Shell",
        price: "$189",
        color: "Glacier Grey",
        image: "/images/shell.png",
        description: "Lightweight yet incredibly protective. The Alpine Shell uses advanced technical fabrics to provide superior wind and water resistance while maintaining breathability for active winter adventures.",
        features: ["3-layer waterproof membrane", "Fully taped seams", "Pit-zip vents", "Helmet-compatible hood"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    "merino-layer": {
        name: "Merino Layer",
        price: "$89",
        color: "Charcoal",
        image: "/images/layer.png",
        description: "Experience the natural warmth of premium merino wool. This base layer regulates temperature, wicks moisture, and naturally resists odors for all-day comfort.",
        features: ["100% Merino wool", "Temperature regulating", "Odor resistant", "Flatlock seams"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    "frost-boots": {
        name: "Frost Boots",
        price: "$249",
        color: "Black",
        image: "/images/boots.png",
        description: "Rugged winter boots built to last. Featuring waterproof leather construction, thermal insulation, and aggressive tread pattern for superior traction on ice and snow.",
        features: ["Waterproof leather upper", "Thermal insulation", "Vibram Arctic Grip sole", "Removable liner"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"]
    }
}

export default function ProductPage() {
    const params = useParams()
    const slug = params?.slug as string
    const product = products[slug as keyof typeof products]

    if (!product) {
        notFound()
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
                            <p className="text-3xl font-bold text-primary">{product.price}</p>
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
                                        className="px-6 py-3 border border-slate-200 rounded-xl hover:border-primary hover:bg-slate-50 transition-colors font-medium"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <Button size="lg" className="flex-1 gap-2">
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
