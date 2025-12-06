"use client"

import { use } from "react"
import { useProduct } from "@/hooks/useProduct"
import ProductDetailsClient from "@/components/ProductDetailsClient"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const { data: product, isLoading, isError } = useProduct(slug)

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                <span className="ml-4 text-lg text-muted-foreground">Finding your gear...</span>
            </div>
        )
    }

    if (isError || !product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <p className="text-muted-foreground mb-6">We couldn't load the product details. Current backend might be sleeping?</p>
                <Button onClick={() => window.location.reload()}>Try Refreshing</Button>
            </div>
        )
    }

    // Reuse the existing details component which already handles the UI layout
    return <ProductDetailsClient product={product} />
}
