"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import type { Product } from "@/components/product-card"
import { allProducts } from "@/data/products"

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

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (query) {
      setIsLoading(true)

      // Simulate API call delay
      setTimeout(() => {
        const results = searchProducts(query)
        setSearchResults(results)
        setIsLoading(false)
      }, 500)
    } else {
      setSearchResults([])
      setIsLoading(false)
    }
  }, [query])

  // Search function to filter products based on query
  const searchProducts = (searchQuery: string): Product[] => {
    const normalizedQuery = searchQuery.toLowerCase().trim()

    return allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.short_description.toLowerCase().includes(normalizedQuery)
      )
    })
  }

  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {query ? `Search Results for "${query}"` : "Search Products"}
            </h1>
            {query && (
              <p className="text-gray-600">
                Found {searchResults.length} {searchResults.length === 1 ? "product" : "products"}
              </p>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : (
            <>
              {!query ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">Enter a search term to find products.</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">No products found</h2>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching "{query}". Try using different keywords or browse our
                    categories.
                  </p>
                  <Link
                    href="/categories"
                    className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Browse Categories
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
