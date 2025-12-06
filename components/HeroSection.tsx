"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Winter Landscape"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container mx-auto relative z-10 px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30">
                        New Winter Collection 2025
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-lg">
                        Embrace the Chill
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance drop-shadow-md">
                        Premium winter wear designed for extreme comfort and timeless style. Experience warmth like never before.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/shop">
                            <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-xl border-none">
                                Shop Collection <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20 hover:text-white">
                            View Lookbook
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
