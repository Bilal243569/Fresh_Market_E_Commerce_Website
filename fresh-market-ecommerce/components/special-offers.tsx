"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ProductCard, { type Product } from "./product-card"

// Sample offers (filter featured products that are on sale)
const specialOffers: Product[] = [
  {
    id: 2,
    name: "Sourdough Bread",
    slug: "sourdough-bread",
    price: 6.99,
    sale_price: 5.49,
    discount_percentage: 21,
    category: 3,
    description: "Freshly baked sourdough bread made with our century-old starter. Crusty outside, soft inside.",
    short_description: "Freshly baked artisanal sourdough bread.",
    images: [
      {
        id: 2,
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg",
        alt_text: "Sourdough Bread",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-16T10:00:00Z",
    updated_at: "2023-06-16T10:00:00Z",
  },
  {
    id: 4,
    name: "Premium Greek Yogurt",
    slug: "premium-greek-yogurt",
    price: 5.49,
    sale_price: 4.29,
    discount_percentage: 22,
    category: 2,
    description: "Creamy, protein-rich Greek yogurt. Made from the finest milk and traditional techniques.",
    short_description: "Creamy, protein-rich Greek yogurt.",
    images: [
      {
        id: 4,
        image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
        alt_text: "Premium Greek Yogurt",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: false,
    featured: true,
    is_offer: true,
    created_at: "2023-06-18T10:00:00Z",
    updated_at: "2023-06-18T10:00:00Z",
  },
  {
    id: 6,
    name: "Organic Cold-Pressed Olive Oil",
    slug: "organic-cold-pressed-olive-oil",
    price: 12.99,
    sale_price: 9.99,
    discount_percentage: 23,
    category: 5,
    description: "Extra virgin, cold-pressed olive oil from organic olives. Perfect for cooking and dressing.",
    short_description: "Extra virgin, cold-pressed organic olive oil.",
    images: [
      {
        id: 6,
        image: "/oil.png",
        alt_text: "Organic Cold-Pressed Olive Oil",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-20T10:00:00Z",
    updated_at: "2023-06-20T10:00:00Z",
  },
  {
    id: 8,
    name: "Artisanal Cheese Selection",
    slug: "artisanal-cheese-selection",
    price: 24.99,
    sale_price: 19.99,
    discount_percentage: 20,
    category: 2,
    description: "A curated selection of artisanal cheeses from local farms. Perfect for entertaining.",
    short_description: "A curated selection of artisanal cheeses.",
    images: [
      {
        id: 8,
        image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg",
        alt_text: "Artisanal Cheese Selection",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-22T10:00:00Z",
    updated_at: "2023-06-22T10:00:00Z",
  },
]

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Special Offers</h2>
            <p className="text-gray-600">Limited time deals on quality products</p>
          </div>
          <Link
            href="/offers"
            className="mt-4 md:mt-0 flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            View All Offers
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Large promo banner */}
          <div className="mt-12">
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-[21/9] md:aspect-[3/1]">
                <Image
                  src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
                  alt="Fresh Summer Produce"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="px-8 py-6 md:py-0 md:w-1/2">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Summer Produce Sale</h3>
                  <p className="text-gray-200 mb-4">
                    Get up to 30% off on seasonal fruits and vegetables. Perfect for refreshing summer meals!
                  </p>
                  <Link
                    href="/offers/summer-sale"
                    className="inline-block px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
