import { useQuery } from "@tanstack/react-query"
import { fetchProduct } from "@/lib/api"
import { Product } from "@/lib/products"

export const useProduct = (slug: string) => {
    return useQuery<Product>({
        queryKey: ["product", slug],
        queryFn: () => fetchProduct(slug),
        enabled: !!slug, // Only run query if slug is provided
    })
}
