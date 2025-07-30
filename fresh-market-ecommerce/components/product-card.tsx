"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useWishlist } from "@/context/wishlist-context"

// Product type definition
interface ProductImage {
  id: number
  image: string
  alt_text: string
  is_primary: boolean
}

export interface Product {
  id: number
  name: string
  slug: string
  price: number
  sale_price: number | null
  discount_percentage: number | null
  category: number
  description: string
  short_description: string
  images: ProductImage[]
  videos: any[]
  in_stock: boolean
  featured: boolean
  is_offer: boolean
  created_at: string
  updated_at: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()
  const primaryImage = product.images.find((img) => img.is_primary) || product.images[0]

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product, 1)
  }

  return (
    <div
      className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sale badge */}
      {product.sale_price && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount_percentage ? `-${Math.round(product.discount_percentage)}%` : "SALE"}
        </div>
      )}

      {/* Out of stock overlay */}
      {!product.in_stock && (
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <span className="bg-white/90 text-gray-800 font-medium px-4 py-2 rounded">Out of Stock</span>
        </div>
      )}

      {/* Product image */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-square">
        <Image
          src={primaryImage?.image || "/placeholder.svg"}
          alt={primaryImage?.alt_text || product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </Link>

      {/* Quick action buttons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button
          onClick={(e) => {
            e.preventDefault()
            isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
          }}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} className={isInWishlist(product.id) ? "text-red-500 fill-red-500" : "text-gray-700"} />
        </button>
      </div>

      {/* Hover Add to Cart button that slides up from bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-3 transition-transform duration-300 ease-in-out ${isHovered ? "translate-y-0" : "translate-y-full"}`}
      >
        <button
          className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!product.in_stock}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" /> Add to Cart
        </button>
      </div>

      {/* Product details */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-gray-800 font-medium mb-1 hover:text-emerald-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2">{product.short_description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {product.sale_price ? (
              <>
                <span className="text-red-600 font-bold">${product.sale_price.toFixed(2)}</span>
                <span className="text-gray-500 line-through ml-2 text-sm">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-gray-800 font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
