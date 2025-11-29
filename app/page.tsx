"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ArrowRight, Snowflake, Wind, Thermometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-xl border-none">
                Shop Collection <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20 hover:text-white">
                View Lookbook
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Snowflake, title: "Extreme Warmth", desc: "Insulated with premium down for temperatures down to -30°C." },
              { icon: Wind, title: "Windproof", desc: "Advanced shell technology blocks wind while remaining breathable." },
              { icon: Thermometer, title: "Temperature Control", desc: "Smart fabrics adapt to your body heat for optimal comfort." },
            ].map((feature, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow border-none shadow-none bg-slate-50/50">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
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
            <Button variant="ghost" className="gap-2">View All <ArrowRight className="w-4 h-4" /></Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Arctic Parka", price: "$299", color: "Midnight Blue", image: "/images/parka.png", slug: "arctic-parka" },
              { name: "Alpine Shell", price: "$189", color: "Glacier Grey", image: "/images/shell.png", slug: "alpine-shell" },
              { name: "Merino Layer", price: "$89", color: "Charcoal", image: "/images/layer.png", slug: "merino-layer" },
              { name: "Frost Boots", price: "$249", color: "Black", image: "/images/boots.png", slug: "frost-boots" }
            ].map((item, i) => (
              <Link key={i} href={`/product/${item.slug}`}>
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
                      <span className="font-bold text-lg">{item.price}</span>
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
