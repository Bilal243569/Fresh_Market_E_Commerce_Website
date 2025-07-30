"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "./product-card"
import type { Product } from "./product-card"

interface CategoryGridProps {
  products: Product[]
  categoryName: string
}

export default function CategoryGrid({ products, categoryName }: CategoryGridProps) {
  const [sortBy, setSortBy] = useState("default") // default, price-low, price-high
  const [filterInStock, setFilterInStock] = useState(false)
  const [filterOnSale, setFilterOnSale] = useState(false)

  // Apply filters
  let filteredProducts = [...products]

  if (filterInStock) {
    filteredProducts = filteredProducts.filter((product) => product.in_stock)
  }

  if (filterOnSale) {
    filteredProducts = filteredProducts.filter((product) => product.sale_price !== null)
  }

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
      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="in-stock"
              checked={filterInStock}
              onChange={() => setFilterInStock(!filterInStock)}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="in-stock" className="ml-2 text-gray-700">
              In Stock Only
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="on-sale"
              checked={filterOnSale}
              onChange={() => setFilterOnSale(!filterOnSale)}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="on-sale" className="ml-2 text-gray-700">
              On Sale
            </label>
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

      {/* Products Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {sortedProducts.length} {sortedProducts.length === 1 ? "product" : "products"} in {categoryName}
        </p>
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
        </div>
      )}
    </div>
  )
}
