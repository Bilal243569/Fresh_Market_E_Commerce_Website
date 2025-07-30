"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard, { type Product } from "@/components/product-card"

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

// Sample offers data
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
  {
    id: 10,
    name: "Organic Honey",
    slug: "organic-honey",
    price: 8.99,
    sale_price: 6.99,
    discount_percentage: 22,
    category: 5,
    description: "Pure, raw organic honey sourced from local beekeepers. Rich in flavor and nutrients.",
    short_description: "Pure, raw organic honey from local beekeepers.",
    images: [
      {
        id: 10,
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
        alt_text: "Organic Honey",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-06-24T10:00:00Z",
    updated_at: "2023-06-24T10:00:00Z",
  },
  {
    id: 12,
    name: "Premium Coffee Beans",
    slug: "premium-coffee-beans",
    price: 14.99,
    sale_price: 11.99,
    discount_percentage: 20,
    category: 5,
    description: "Freshly roasted premium coffee beans from sustainable farms. Bold flavor with hints of chocolate.",
    short_description: "Freshly roasted premium coffee beans.",
    images: [
      {
        id: 12,
        image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        alt_text: "Premium Coffee Beans",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-06-26T10:00:00Z",
    updated_at: "2023-06-26T10:00:00Z",
  },
  {
    id: 14,
    name: "Organic Quinoa",
    slug: "organic-quinoa",
    price: 7.99,
    sale_price: 5.99,
    discount_percentage: 25,
    category: 5,
    description: "Organic white quinoa, a complete protein source. Perfect for salads, bowls, and side dishes.",
    short_description: "Organic white quinoa, a complete protein source.",
    images: [
      {
        id: 14,
        image: "https://images.pexels.com/photos/7421242/pexels-photo-7421242.jpeg",
        alt_text: "Organic Quinoa",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-06-28T10:00:00Z",
    updated_at: "2023-06-28T10:00:00Z",
  },
  {
    id: 16,
    name: "Fresh Atlantic Salmon",
    slug: "fresh-atlantic-salmon",
    price: 18.99,
    sale_price: 15.99,
    discount_percentage: 16,
    category: 4,
    description: "Fresh Atlantic salmon fillets. Rich in omega-3 fatty acids and perfect for grilling or baking.",
    short_description: "Fresh Atlantic salmon fillets.",
    images: [
      {
        id: 16,
        image: "https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg",
        alt_text: "Fresh Atlantic Salmon",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-06-30T10:00:00Z",
    updated_at: "2023-06-30T10:00:00Z",
  },
  {
    id: 18,
    name: "Organic Strawberries",
    slug: "organic-strawberries",
    price: 6.99,
    sale_price: 4.99,
    discount_percentage: 29,
    category: 1,
    description: "Sweet, juicy organic strawberries. Perfect for snacking, desserts, or smoothies.",
    short_description: "Sweet, juicy organic strawberries.",
    images: [
      {
        id: 18,
        image: "https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg",
        alt_text: "Organic Strawberries",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-02T10:00:00Z",
    updated_at: "2023-07-02T10:00:00Z",
  },
  {
    id: 20,
    name: "Organic Avocado Pack",
    slug: "organic-avocado-pack",
    price: 9.99,
    sale_price: 7.99,
    discount_percentage: 20,
    category: 1,
    description: "Pack of 4 perfectly ripe organic avocados. Rich in healthy fats and perfect for salads or guacamole.",
    short_description: "Pack of 4 perfectly ripe organic avocados.",
    images: [
      {
        id: 20,
        image: "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg",
        alt_text: "Organic Avocado Pack",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-04T10:00:00Z",
    updated_at: "2023-07-04T10:00:00Z",
  },
  {
    id: 22,
    name: "Artisanal Sourdough Crackers",
    slug: "artisanal-sourdough-crackers",
    price: 5.99,
    sale_price: 4.49,
    discount_percentage: 25,
    category: 3,
    description: "Crispy artisanal sourdough crackers. Perfect for cheese boards and dips.",
    short_description: "Crispy artisanal sourdough crackers.",
    images: [
      {
        id: 22,
        image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
        alt_text: "Artisanal Sourdough Crackers",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-06T10:00:00Z",
    updated_at: "2023-07-06T10:00:00Z",
  },
  {
    id: 24,
    name: "Organic Blueberries",
    slug: "organic-blueberries",
    price: 7.99,
    sale_price: 5.99,
    discount_percentage: 25,
    category: 1,
    description: "Sweet, juicy organic blueberries. High in antioxidants and perfect for snacking or baking.",
    short_description: "Sweet, juicy organic blueberries.",
    images: [
      {
        id: 24,
        image: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg",
        alt_text: "Organic Blueberries",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-08T10:00:00Z",
    updated_at: "2023-07-08T10:00:00Z",
  },
]

// Category mapping
const categories = {
  1: "Fruits & Vegetables",
  2: "Dairy & Eggs",
  3: "Bakery",
  4: "Meat & Seafood",
  5: "Pantry & Dry Goods",
}

export default function OffersPage() {
  const [activeFilters, setActiveFilters] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("discount") // discount, price-low, price-high
  const [showFilters, setShowFilters] = useState(false)

  // Filter products by category
  const filteredProducts =
    activeFilters.length > 0
      ? specialOffers.filter((product) => activeFilters.includes(product.category))
      : specialOffers

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "discount") {
      return (b.discount_percentage || 0) - (a.discount_percentage || 0)
    } else if (sortBy === "price-low") {
      return (a.sale_price || a.price) - (b.sale_price || b.price)
    } else if (sortBy === "price-high") {
      return (b.sale_price || b.price) - (a.sale_price || a.price)
    }
    return 0
  })

  const toggleFilter = (categoryId: number) => {
    if (activeFilters.includes(categoryId)) {
      setActiveFilters(activeFilters.filter((id) => id !== categoryId))
    } else {
      setActiveFilters([...activeFilters, categoryId])
    }
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        {/* Hero Banner */}
        <section className="relative">
          <div className="aspect-[3/1] md:aspect-[4/1]">
            <Image
              src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
              alt="Special Offers"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Special Offers</h1>
                <p className="text-lg text-white mb-6">
                  Discover amazing deals on our premium products. Limited time offers you don't want to miss!
                </p>
                <Link
                  href="#offers"
                  className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors"
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section id="offers" className="py-16">
          <div className="container mx-auto px-4">
            {/* Filters and Sorting */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors md:hidden"
                >
                  <Filter size={20} className="mr-2" />
                  Filters
                  <ChevronDown size={16} className={`ml-1 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>
                <div className="hidden md:block">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h2>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(categories).map(([id, name]) => (
                      <button
                        key={id}
                        onClick={() => toggleFilter(Number(id))}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          activeFilters.includes(Number(id))
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                    {activeFilters.length > 0 && (
                      <button
                        onClick={clearFilters}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="discount">Highest Discount</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 md:hidden"
              >
                <h2 className="text-lg font-bold text-gray-800 mb-3">Filter by Category</h2>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(categories).map(([id, name]) => (
                    <button
                      key={id}
                      onClick={() => toggleFilter(Number(id))}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        activeFilters.includes(Number(id))
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                  {activeFilters.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try changing your filters or check back later for new offers.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Promotions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <Image
                    src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
                    alt="Organic Produce Sale"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent flex items-center">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Organic Produce Sale</h3>
                    <p className="text-emerald-100 mb-4">
                      Get 20% off all organic fruits and vegetables. Fresh from local farms!
                    </p>
                    <Link
                      href="/categories/fruits-vegetables"
                      className="inline-flex items-center text-white font-medium hover:underline"
                    >
                      Shop Now <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <Image
                    src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
                    alt="Bakery Special"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent flex items-center">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Bakery Special</h3>
                    <p className="text-amber-100 mb-4">
                      Buy any 2 artisanal breads and get 1 free. Freshly baked every morning!
                    </p>
                    <Link
                      href="/categories/bakery"
                      className="inline-flex items-center text-white font-medium hover:underline"
                    >
                      Shop Now <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
