import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { fetchProducts } from "@/lib/api"

export default async function ShopPage() {
    const products = await fetchProducts();

    return (
        <div className="min-h-screen bg-slate-50 pt-12">
            <div className="container mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Shop Collection</h1>
                    <p className="text-xl text-muted-foreground">Discover our premium winter wear collection.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {products.map((item) => (
                        <Link key={item.id} href={`/product/${item.slug}`}>
                            <Card className="overflow-hidden group cursor-pointer border-none shadow-sm hover:shadow-xl transition-all duration-300">
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
                                <div className="px-2 pb-2">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{item.color}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg">{item.display_price}</span>
                                        <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0 flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
