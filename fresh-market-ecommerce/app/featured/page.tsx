"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
  {
    id: 9,
    name: "Organic Honey",
    slug: "organic-honey",
    price: 8.99,
    sale_price: null,
    discount_percentage: null,
    category: 5,
    description: "Pure, raw organic honey sourced from local beekeepers. Rich in flavor and nutrients.",
    short_description: "Pure, raw organic honey from local beekeepers.",
    images: [
      {
        id: 9,
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
        alt_text: "Organic Honey",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-23T10:00:00Z",
    updated_at: "2023-06-23T10:00:00Z",
  },
  {
    id: 10,
    name: "Freshly Roasted Coffee Beans",
    slug: "freshly-roasted-coffee-beans",
    price: 14.99,
    sale_price: 12.99,
    discount_percentage: 13,
    category: 5,
    description: "Premium coffee beans, freshly roasted for maximum flavor and aroma.",
    short_description: "Premium freshly roasted coffee beans.",
    images: [
      {
        id: 10,
        image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        alt_text: "Freshly Roasted Coffee Beans",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-24T10:00:00Z",
    updated_at: "2023-06-24T10:00:00Z",
  },
  {
    id: 11,
    name: "Organic Quinoa",
    slug: "organic-quinoa",
    price: 6.99,
    sale_price: null,
    discount_percentage: null,
    category: 5,
    description: "Organic white quinoa, a complete protein source. Perfect for salads, bowls, and side dishes.",
    short_description: "Organic white quinoa, a complete protein source.",
    images: [
      {
        id: 11,
        image: "https://images.pexels.com/photos/7421242/pexels-photo-7421242.jpeg",
        alt_text: "Organic Quinoa",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-25T10:00:00Z",
    updated_at: "2023-06-25T10:00:00Z",
  },
  {
    id: 12,
    name: "Grass-Fed Ground Beef",
    slug: "grass-fed-ground-beef",
    price: 9.99,
    sale_price: 8.49,
    discount_percentage: 15,
    category: 4,
    description: "Premium grass-fed ground beef. Lean, flavorful, and perfect for burgers and meatballs.",
    short_description: "Premium grass-fed ground beef.",
    images: [
      {
        id: 12,
        image: "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg",
        alt_text: "Grass-Fed Ground Beef",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-26T10:00:00Z",
    updated_at: "2023-06-26T10:00:00Z",
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

export default function FeaturedPage() {
  const [activeFilter, setActiveFilter] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("default") // default, price-low, price-high

  // Filter products by category
  const filteredProducts = activeFilter
    ? featuredProducts.filter((product) => product.category === activeFilter)
    : featuredProducts

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return (a.sale_price || a.price) - (b.sale_price || b.price)
    } else if (sortBy === "price-high") {
      return (b.sale_price || b.price) - (a.sale_price || a.price)
    }
    return 0 // default sorting (as is)
  })

  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="bg-emerald-600 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h1>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                Discover our selection of premium products, hand-picked for quality and value
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium text-gray-700 mb-3">Filter by Category</h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === null
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All
                  </button>
                  {Object.entries(categories).map(([id, name]) => (
                    <button
                      key={id}
                      onClick={() => setActiveFilter(Number(id))}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeFilter === Number(id)
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

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
                <p className="text-gray-500 mb-6">Try changing your filters or check back later for new products.</p>
                <button
                  onClick={() => setActiveFilter(null)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
