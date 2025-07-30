"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample site settings
const siteSettings = {
  site: {
    site_name: "Fresh Market",
    site_description: "Your premium online grocery store with the freshest products delivered to your door",
    address: "123 Market Street, New York, NY 10001",
    contact_phone: "+1 (555) 123-4567",
    contact_email: "info@freshmarket.com",
    social_media: {
      facebook: "https://facebook.com/freshmarket",
      twitter: "https://twitter.com/freshmarket",
      instagram: "https://instagram.com/freshmarket",
    },
    footer_text: `© ${new Date().getFullYear()} Fresh Market. All rights reserved.`,
    enable_newsletter: true,
  },
}

// Sample categories data
const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    productCount: 124,
    description: "Fresh, organic fruits and vegetables sourced from local farms and trusted suppliers.",
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
    productCount: 86,
    description: "Quality dairy products and farm-fresh eggs from free-range, ethically raised chickens.",
  },
  {
    id: 3,
    name: "Bakery",
    slug: "bakery",
    image: "https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg",
    productCount: 53,
    description: "Freshly baked breads, pastries, and desserts made with traditional recipes and premium ingredients.",
  },
  {
    id: 4,
    name: "Meat & Seafood",
    slug: "meat-seafood",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
    productCount: 78,
    description: "Premium cuts of meat and fresh seafood, including organic and free-range options.",
  },
  {
    id: 5,
    name: "Pantry & Dry Goods",
    slug: "pantry",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    productCount: 92,
    description: "Essential pantry staples, cooking ingredients, and specialty items from around the world.",
  },
  {
    id: 6,
    name: "Beverages",
    slug: "beverages",
    image: "https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg",
    productCount: 47,
    description: "Refreshing drinks, including organic juices, specialty coffees, teas, and craft beverages.",
  },
  {
    id: 7,
    name: "Snacks & Confectionery",
    slug: "snacks",
    image: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg",
    productCount: 65,
    description: "Delicious snacks, chocolates, and sweets for every occasion, including healthy and organic options.",
  },
  {
    id: 8,
    name: "Frozen Foods",
    slug: "frozen",
    image: "https://images.pexels.com/photos/3645553/pexels-photo-3645553.jpeg",
    productCount: 41,
    description: "Convenient frozen meals, vegetables, and desserts that don't compromise on quality or taste.",
  },
  {
    id: 9,
    name: "Health & Wellness",
    slug: "health-wellness",
    image: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg",
    productCount: 38,
    description: "Natural supplements, organic products, and wellness essentials for a healthy lifestyle.",
  },
  {
    id: 10,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    productCount: 29,
    description: "Quality kitchenware, eco-friendly cleaning products, and home essentials.",
  },
]

export default function CategoriesPage() {
  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[200px] md:h-[250px] bg-gray-900">
          <Image
            src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
            alt="Categories"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Shop by Category</h1>
              <p className="text-lg text-white max-w-2xl mx-auto px-4">
                Browse our quality products organized by category
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/categories/${category.slug}`} className="block group">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-bold text-white">{category.name}</h2>
                        <p className="text-sm text-gray-200">{category.productCount} Products</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-b-lg shadow-sm">
                      <p className="text-gray-600 line-clamp-2">{category.description}</p>
                      <div className="mt-3 flex justify-end">
                        <span className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                          Browse Products →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
