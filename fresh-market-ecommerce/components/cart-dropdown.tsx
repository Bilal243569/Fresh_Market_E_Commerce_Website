"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartDropdown() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const cartRef = useRef<HTMLDivElement>(null)

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false)
      }
    }

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCartOpen, setIsCartOpen])

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isCartOpen])

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart panel */}
          <motion.div
            ref={cartRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Cart header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold flex items-center">
                <ShoppingBag className="mr-2" size={20} /> Shopping Cart ({totalItems})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-grow overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.product.id} className="flex border-b pb-4">
                      {/* Product image */}
                      <div className="w-20 h-20 flex-shrink-0 relative rounded overflow-hidden">
                        <Image
                          src={item.product.images[0]?.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Product details */}
                      <div className="ml-4 flex-grow">
                        <h3 className="text-sm font-medium">{item.product.name}</h3>
                        <div className="flex items-center mt-1">
                          {item.product.sale_price ? (
                            <>
                              <span className="text-red-600 font-bold">${item.product.sale_price.toFixed(2)}</span>
                              <span className="text-gray-500 line-through ml-2 text-xs">
                                ${item.product.price.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="text-gray-800 font-bold">${item.product.price.toFixed(2)}</span>
                          )}
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="mx-2 min-w-[20px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto p-1 text-gray-500 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart footer */}
            {items.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
                <Link
                  href="/cart"
                  className="block w-full py-3 px-4 bg-emerald-600 text-white text-center font-medium rounded-md hover:bg-emerald-700 transition-colors"
                  onClick={() => setIsCartOpen(false)}
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full mt-2 py-2 px-4 border border-gray-300 text-gray-700 text-center font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
