import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchProducts } from "@/lib/api"
import { Product } from "@/lib/products"

// Start with a mock function for deleting since we don't have a backend endpoint for it yet
// In a real app, this would call `api.delete('/wishlist/:id')`
const deleteFromWishlistMock = async (productId: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, 500) // Simulate network delay
    })
}

export const useWishlist = () => {
    const queryClient = useQueryClient()

    // Query to fetch wishlist items
    // NOTE: In the current mock setup, we are just slicing the first 3 products
    // In a real app, this would be `fetchWishlist`
    const { data, isLoading, isError } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
            const products = await fetchProducts()
            return products.slice(0, 3) // Simulating the same logic as the original page
        },
    })

    // Mutation to delete an item
    const deleteMutation = useMutation({
        mutationFn: deleteFromWishlistMock,
        onMutate: async (productId) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: ["wishlist"] })

            // Snapshot the previous value
            const previousWishlist = queryClient.getQueryData<Product[]>(["wishlist"])

            // Optimistically update to the new value
            if (previousWishlist) {
                queryClient.setQueryData<Product[]>(
                    ["wishlist"],
                    previousWishlist.filter((item) => item.id !== productId)
                )
            }

            // Return a context object with the snapshotted value
            return { previousWishlist }
        },
        onError: (err, newTodo, context) => {
            // If the mutation fails, use the context returned from onMutate to roll back
            if (context?.previousWishlist) {
                queryClient.setQueryData(["wishlist"], context.previousWishlist)
            }
        },
        onSettled: () => {
            // Always refetch after error or success:
            queryClient.invalidateQueries({ queryKey: ["wishlist"] })
        },
    })

    return {
        wishlistItems: data,
        isLoading,
        isError,
        deleteFromWishlist: deleteMutation.mutate,
        isDeleting: deleteMutation.isPending,
    }
}
