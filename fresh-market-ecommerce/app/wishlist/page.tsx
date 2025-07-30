"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useWishlist } from "@/context/wishlist-context"
import { useCart } from "@/context/cart-context"
import ProductCard from "@/components/product-card"

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

export default function WishlistPage() {
  const { items, removeItem, totalItems } = useWishlist()
  const { addItem } = useCart()
  const [addedToCart, setAddedToCart] = useState<Record<number, boolean>>({})

  const handleAddToCart = (productId: number) => {
    const product = items.find((item) => item.id === productId)
    if (product) {
      addItem(product)
      setAddedToCart((prev) => ({ ...prev, [productId]: true }))

      // Reset the "Added to cart" message after 2 seconds
      setTimeout(() => {
        setAddedToCart((prev) => ({ ...prev, [productId]: false }))
      }, 2000)
    }
  }

  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Continue Shopping
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-auto">My Wishlist</h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Heart size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your wishlist yet.</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-6">
                {totalItems} {totalItems === 1 ? "item" : "items"} in your wishlist
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((product) => (
                  <div key={product.id} className="relative">
                    <ProductCard product={product} />

                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <button
                        onClick={() => removeItem(product.id)}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>

                      <button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={!product.in_stock || addedToCart[product.id]}
                        className={`p-2 rounded-full shadow-md transition-colors ${
                          addedToCart[product.id]
                            ? "bg-emerald-600 text-white"
                            : "bg-white hover:bg-gray-100 text-gray-700"
                        } ${!product.in_stock ? "opacity-50 cursor-not-allowed" : ""}`}
                        aria-label="Add to cart"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>

                    {addedToCart[product.id] && (
                      <div className="absolute bottom-16 left-0 right-0 bg-emerald-600 text-white text-center py-2 text-sm">
                        Added to cart!
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
