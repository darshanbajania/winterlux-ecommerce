"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const looks = [
    {
        id: 1,
        // Generated: Urban winter portrait
        src: "/images/lookbook-urban.png",
        alt: "Urban Winter Explorer",
        title: "Urban Explorer",
        desc: "Navigate the city in style.",
        size: "large"
    },
    {
        id: 2,
        // Generated: Mountain landscape with hiker
        src: "/images/lookbook-alpine.png",
        alt: "Alpine Adventure",
        title: "Alpine Adventure",
        desc: "Conquer the peaks.",
        size: "small"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
        alt: "Cozy Evenings",
        title: "Après Ski",
        desc: "Comfort after the climb.",
        size: "small"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2622&auto=format&fit=crop",
        alt: "Snow Day",
        title: "Snow Day",
        desc: "Embrace the elements.",
        size: "medium"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2695&auto=format&fit=crop",
        alt: "Winter Minimalist",
        title: "Winter Minimalist",
        desc: "Simplicity in the cold.",
        size: "large"
    },
    {
        id: 6,
        // Generated: Nordic cozy style
        src: "/images/lookbook-nordic.png",
        alt: "Nordic Style",
        title: "Nordic Vibes",
        desc: "Inspired by the north.",
        size: "medium"
    }
]

export default function LookbookPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-[60vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1465220183275-1faa863377e3?q=80&w=2000&auto=format&fit=crop"
                        alt="Lookbook Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center space-y-4 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                    >
                        Winter 2025
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/80 max-w-lg mx-auto"
                    >
                        A visual journey through our latest collection.
                        Where performance meets premium aesthetic.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="space-y-24">
                    {looks.map((look, index) => (
                        <motion.div
                            key={look.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={cn(
                                "flex flex-col md:flex-row gap-12 items-center",
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            <div className="flex-1 w-full relative aspect-[3/4] md:aspect-[4/3] overflow-hidden rounded-2xl group">
                                <Image
                                    src={look.src}
                                    alt={look.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <span className="text-sm font-semibold tracking-widest uppercase text-slate-500">
                                    Look 0{index + 1}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                                    {look.title}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                    {look.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
