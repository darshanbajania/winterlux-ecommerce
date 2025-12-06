import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "@/lib/api"
import { Product } from "@/lib/products"

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    })
}
