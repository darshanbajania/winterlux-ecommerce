"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ArrowRight, Snowflake, Wind, Thermometer, ShieldCheck, Droplets, Feather } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useProducts } from "@/hooks/useProducts"
import HeroSection from "@/components/HeroSection"
import { motion } from "framer-motion"

export default function Home() {
  const { data: products, isLoading } = useProducts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About / Features Section - Bento Grid */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for the Extremes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proprietary technology combines aerospace-grade insulation with adaptative fabrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Feature 1: Large Card with details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 flex flex-col justify-center group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Snowflake className="w-48 h-48 text-blue-500" />
              </div>
              <div className="relative z-10 max-w-md">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-100 text-blue-600">
                  <Snowflake className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cryo-Protection™ Insulation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Tested in Antarctic conditions, our triple-layer down alternative retains 99.8% of body heat while remaining ultra-lightweight. Rated for temperatures as low as -40°C.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Image Card (Visual Texture) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1 row-span-2 relative overflow-hidden rounded-3xl group"
            >
              <Image
                src="/images/fabric-macro.png"
                alt="Waterproof Fabric Texture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold mb-1">Hydro-Shield Shell</h3>
                <p className="text-white/80 text-sm">Waterproof. Breathable. Indestructible.</p>
              </div>
            </motion.div>

            {/* Feature 3: Compact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1 row-span-1 rounded-3xl bg-slate-900 text-white p-8 flex flex-col justify-between group hover:shadow-2xl transition-shadow"
            >
              <div>
                <Wind className="w-10 h-10 mb-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Windproof Core</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Advanced membrane technology blocks 100% of wind chill without compromising breathability.
              </p>
            </motion.div>

            {/* Feature 4: Compact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-1 row-span-1 rounded-3xl bg-blue-50 border border-blue-100 p-8 flex flex-col justify-between group hover:border-blue-300 transition-colors"
            >
              <div>
                <Feather className="w-10 h-10 mb-4 text-blue-600 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">Zero-Gravity Feel</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Maximum warmth with minimal bulk. Designed for unrestricted movement and all-day comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Our most popular winter essentials.</p>
            </div>
            <Link href="/shop">
              <Button variant="ghost" className="gap-2">View All <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {isLoading ? (
              // Loading Skeleton
              Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <div className="aspect-[3/4] bg-slate-200 animate-pulse rounded-xl mb-4" />
                  <div className="px-2 pb-2 space-y-3">
                    <div className="h-6 bg-slate-200 animate-pulse rounded w-3/4" />
                    <div className="h-4 bg-slate-200 animate-pulse rounded w-1/2" />
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-slate-200 animate-pulse rounded w-1/4" />
                      <div className="h-8 w-8 bg-slate-200 animate-pulse rounded-full" />
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              products?.slice(0, 4).map((item) => (
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
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        New Arrival
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
              ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517299321609-52687d1bc555?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Winter Club</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and winter style tips.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-full px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" className="rounded-full px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
