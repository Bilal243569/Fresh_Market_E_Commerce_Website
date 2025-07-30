"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Product } from "@/components/product-card"
import { useAuth } from "./auth-context"

interface WishlistContextType {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  isInWishlist: (productId: number) => boolean
  totalItems: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const { isAuthenticated, setRedirectAfterLogin } = useAuth()
  const router = useRouter()

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist))
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error)
      }
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(items))
    } else {
      localStorage.removeItem("wishlist")
    }
    setTotalItems(items.length)
  }, [items])

  const addItem = (product: Product) => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      // Save current URL to redirect back after login
      setRedirectAfterLogin(window.location.pathname)
      // Redirect to register page
      router.push("/register")
      return
    }

    setItems((prevItems) => {
      // Check if product is already in wishlist
      if (prevItems.some((item) => item.id === product.id)) {
        return prevItems
      }
      return [...prevItems, product]
    })
  }

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const isInWishlist = (productId: number) => {
    return items.some((item) => item.id === productId)
  }

  const value = {
    items,
    addItem,
    removeItem,
    isInWishlist,
    totalItems,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
