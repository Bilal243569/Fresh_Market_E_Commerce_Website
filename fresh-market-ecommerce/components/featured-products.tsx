"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ProductCard, { type Product } from "./product-card"

// Sample featured products data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Organic Red Apples",
    slug: "organic-red-apples",
    price: 4.99,
    sale_price: null,
    discount_percentage: null,
    category: 1,
    description: "Fresh, organic red apples sourced from local farms. High in fiber and antioxidants.",
    short_description: "Fresh, organic red apples from local farms.",
    images: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg",
        alt_text: "Organic Red Apples",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-15T10:00:00Z",
    updated_at: "2023-06-15T10:00:00Z",
  },
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
    id: 3,
    name: "Organic Avocados",
    slug: "organic-avocados",
    price: 7.99,
    sale_price: null,
    discount_percentage: null,
    category: 1,
    description: "Perfectly ripe, organic avocados. Rich in healthy fats and perfect for salads or guacamole.",
    short_description: "Perfectly ripe, organic avocados.",
    images: [
      {
        id: 3,
        image: "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg",
        alt_text: "Organic Avocados",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-17T10:00:00Z",
    updated_at: "2023-06-17T10:00:00Z",
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
    id: 5,
    name: "Wild-Caught Salmon Fillets",
    slug: "wild-caught-salmon-fillets",
    price: 15.99,
    sale_price: null,
    discount_percentage: null,
    category: 4,
    description: "Premium wild-caught salmon fillets. High in omega-3 fatty acids and perfect for grilling.",
    short_description: "Premium wild-caught salmon fillets.",
    images: [
      {
        id: 5,
        image: "https://images.pexels.com/photos/1148280/pexels-photo-1148280.jpeg",
        alt_text: "Wild-Caught Salmon Fillets",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-19T10:00:00Z",
    updated_at: "2023-06-19T10:00:00Z",
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
        image: "oil.png",
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
    id: 7,
    name: "Assorted Organic Berries",
    slug: "assorted-organic-berries",
    price: 8.99,
    sale_price: null,
    discount_percentage: null,
    category: 1,
    description: "A mix of fresh, organic strawberries, blueberries, and raspberries. Perfect for snacking.",
    short_description: "Fresh, organic mixed berries.",
    images: [
      {
        id: 7,
        image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
        alt_text: "Assorted Organic Berries",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-21T10:00:00Z",
    updated_at: "2023-06-21T10:00:00Z",
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

export default function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our selection of premium products</p>
          </div>
          <Link
            href="/featured"
            className="mt-4 md:mt-0 flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            View All Featured
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProducts.slice(0, 8).map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
