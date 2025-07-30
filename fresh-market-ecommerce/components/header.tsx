"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, Heart, UserIcon, ShoppingCart, Menu, X, LogOut, SettingsIcon } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import CartDropdown from "./cart-dropdown"
import { useWishlist } from "@/context/wishlist-context"

// Types
interface HeaderProps {
  isAdmin?: boolean
  settings?: {
    site: {
      site_name: string
    }
  }
}

export default function Header({ isAdmin = false, settings = { site: { site_name: "Fresh Market" } } }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { totalItems, setIsCartOpen } = useCart()
  const { totalItems: wishlistItems } = useWishlist()
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsMenuOpen(false) // Close mobile menu if open
    }
  }

  const headerClasses = "fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-4"

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">{settings?.site.site_name || "Fresh Market"}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="nav-link">
                Home
              </Link>

              {/* Categories Dropdown */}
              <div className="relative">
                <button className="nav-link flex items-center" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                  Categories <ChevronDown size={16} className="ml-1" />
                </button>

                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 z-50"
                    >
                      <Link href="/categories/fruits-vegetables" className="block px-4 py-2 hover:bg-gray-100">
                        Fruits & Vegetables
                      </Link>
                      <Link href="/categories/dairy-eggs" className="block px-4 py-2 hover:bg-gray-100">
                        Dairy & Eggs
                      </Link>
                      <Link href="/categories/bakery" className="block px-4 py-2 hover:bg-gray-100">
                        Bakery
                      </Link>
                      <Link href="/categories/meat-seafood" className="block px-4 py-2 hover:bg-gray-100">
                        Meat & Seafood
                      </Link>
                      <Link href="/categories" className="block px-4 py-2 hover:bg-gray-100 text-emerald-600">
                        View All Categories
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/offers" className="nav-link">
                Special Offers
              </Link>
              <Link href="/about" className="nav-link">
                About Us
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>

            {/* Search, User, and Cart */}
            <div className="flex items-center space-x-4">
              {/* Search Form */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 text-gray-500">
                  <Search size={18} />
                </button>
              </form>

              {/* Wishlist Button */}
              <Link href="/wishlist" className="relative p-2 rounded-full hover:bg-gray-100">
                <Heart size={22} className="text-gray-700" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <UserIcon size={22} className="text-gray-700" />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50"
                    >
                      {isAuthenticated ? (
                        <>
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="font-medium text-gray-800">
                              {user?.firstName} {user?.lastName}
                            </p>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                          </div>
                          <Link href="/account" className="block px-4 py-2 hover:bg-gray-100">
                            My Account
                          </Link>
                          <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                            Orders
                          </Link>
                          {isAdmin && (
                            <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100">
                              <div className="flex items-center">
                                <SettingsIcon size={16} className="mr-2" />
                                Admin Dashboard
                              </div>
                            </Link>
                          )}
                          <button
                            onClick={() => logout()}
                            className="w-full text-left block px-4 py-2 hover:bg-gray-100 text-red-600"
                          >
                            <div className="flex items-center">
                              <LogOut size={16} className="mr-2" />
                              Logout
                            </div>
                          </button>
                        </>
                      ) : (
                        <>
                          <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                            Login
                          </Link>
                          <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">
                            Register
                          </Link>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-gray-100"
                aria-label="Open cart"
              >
                <ShoppingCart size={22} className="text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <form onSubmit={handleSearch} className="p-4 border-b border-gray-100">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="absolute right-3 top-2 text-gray-500">
                      <Search size={18} />
                    </button>
                  </div>
                </form>

                <nav className="py-2">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </Link>
                  <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="w-full text-left flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                  >
                    <span>Categories</span>
                    <ChevronDown size={16} className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isCategoryOpen && (
                    <div className="bg-gray-50 py-1 px-8">
                      <Link href="/categories/fruits-vegetables" className="block py-2 hover:text-emerald-600">
                        Fruits & Vegetables
                      </Link>
                      <Link href="/categories/dairy-eggs" className="block py-2 hover:text-emerald-600">
                        Dairy & Eggs
                      </Link>
                      <Link href="/categories/bakery" className="block py-2 hover:text-emerald-600">
                        Bakery
                      </Link>
                      <Link href="/categories/meat-seafood" className="block py-2 hover:text-emerald-600">
                        Meat & Seafood
                      </Link>
                      <Link href="/categories" className="block py-2 text-emerald-600">
                        View All Categories
                      </Link>
                    </div>
                  )}

                  <Link href="/offers" className="block px-4 py-2 hover:bg-gray-100">
                    Special Offers
                  </Link>
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </Link>
                </nav>

                <div className="border-t border-gray-100 py-2">
                  {isAuthenticated ? (
                    <>
                      <Link href="/account" className="block px-4 py-2 hover:bg-gray-100">
                        My Account
                      </Link>
                      <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                        Orders
                      </Link>
                      <Link href="/wishlist" className="block px-4 py-2 hover:bg-gray-100">
                        Wishlist
                      </Link>
                      {isAdmin && (
                        <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100">
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => logout()}
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                        Login
                      </Link>
                      <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Cart Dropdown */}
      <CartDropdown />
    </>
  )
}
