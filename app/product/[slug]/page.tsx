import { fetchProduct } from "@/lib/api"
import { notFound } from "next/navigation"
import ProductDetailsClient from "@/components/ProductDetailsClient"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const product = await fetchProduct(slug)
        return <ProductDetailsClient product={product} />
    } catch (error) {
        notFound()
    }
}
