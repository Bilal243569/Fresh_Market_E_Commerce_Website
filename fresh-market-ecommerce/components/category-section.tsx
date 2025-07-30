"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Sample categories data
const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    productCount: 124,
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
    productCount: 86,
  },
  {
    id: 3,
    name: "Bakery",
    slug: "bakery",
    image: "https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg",
    productCount: 53,
  },
  {
    id: 4,
    name: "Meat & Seafood",
    slug: "meat-seafood",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
    productCount: 78,
  },
  {
    id: 5,
    name: "Pantry & Dry Goods",
    slug: "pantry",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    productCount: 92,
  },
  {
    id: 6,
    name: "Beverages",
    slug: "beverages",
    image: "https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg",
    productCount: 47,
  },
]

interface CategoryCardProps {
  category: {
    id: number
    name: string
    slug: string
    image: string
    productCount: number
  }
  index: number
}

function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <Link
        href={`/categories/${category.slug}`}
        className="group block relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="aspect-square overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
          <p className="text-gray-200 text-sm">{category.productCount} Products</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our quality products by category</p>
          </div>
          <Link href="/categories" className="mt-4 md:mt-0 text-emerald-600 hover:text-emerald-700 font-medium">
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
