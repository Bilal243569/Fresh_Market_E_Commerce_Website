"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, Plus, Minus, Trash2, RefreshCw } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"

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

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
  const [couponError, setCouponError] = useState("")
  const [discount, setDiscount] = useState(0)

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code")
      return
    }

    setIsApplyingCoupon(true)
    setCouponError("")

    // Simulate API call to validate coupon
    setTimeout(() => {
      if (couponCode.toLowerCase() === "fresh10") {
        // Apply 10% discount
        setDiscount(totalPrice * 0.1)
      } else if (couponCode.toLowerCase() === "fahad") {
        // Apply 30% discount
        setDiscount(totalPrice * 0.3)
      } else {
        setCouponError("Invalid or expired coupon code")
      }
      setIsApplyingCoupon(false)
    }, 1000)
  }

  const finalTotal = totalPrice - discount

  const router = useRouter()

  const handleCheckout = () => {
    if (items.length === 0) return

    // Create order object
    const order = {
      id: Date.now(),
      items: [...items],
      totalPrice: finalTotal,
      discount,
      status: "Processing",
      date: new Date().toISOString(),
    }

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]))

    // Clear cart
    clearCart()

    // Redirect to orders page
    router.push("/orders")
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-auto">Shopping Cart</h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-bold text-gray-800">
                        Cart Items ({totalItems} {totalItems === 1 ? "item" : "items"})
                      </h2>
                      <button
                        onClick={clearCart}
                        className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <RefreshCw size={16} className="mr-1" /> Clear Cart
                      </button>
                    </div>
                  </div>

                  <div className="divide-y">
                    {items.map((item) => (
                      <div key={item.product.id} className="p-6 flex flex-col sm:flex-row">
                        {/* Product image */}
                        <div className="w-full sm:w-24 h-24 flex-shrink-0 relative rounded overflow-hidden mb-4 sm:mb-0">
                          <Image
                            src={item.product.images[0]?.image || "/placeholder.svg"}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 96px"
                          />
                        </div>

                        {/* Product details */}
                        <div className="sm:ml-6 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800">{item.product.name}</h3>
                              <p className="text-sm text-gray-500">{item.product.short_description}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:text-right">
                              {item.product.sale_price ? (
                                <>
                                  <span className="text-red-600 font-bold">${item.product.sale_price.toFixed(2)}</span>
                                  <span className="text-gray-500 line-through ml-2 text-sm">
                                    ${item.product.price.toFixed(2)}
                                  </span>
                                </>
                              ) : (
                                <span className="text-gray-800 font-bold">${item.product.price.toFixed(2)}</span>
                              )}
                            </div>
                          </div>

                          {/* Quantity controls */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-3 py-1 border-x">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="font-bold mr-4">
                                ${((item.product.sale_price || item.product.price) * item.quantity).toFixed(2)}
                              </span>
                              <button
                                onClick={() => removeItem(item.product.id)}
                                className="text-gray-500 hover:text-red-500 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${totalPrice.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon code */}
                  <div className="mb-6">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                      Coupon Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        disabled={isApplyingCoupon}
                        className="px-4 py-2 bg-emerald-600 text-white rounded-r-md hover:bg-emerald-500 transition-colors disabled:opacity-70"
                      >
                        {isApplyingCoupon ? "Applying..." : "Apply"}
                      </button>
                    </div>
                    {couponError && <p className="mt-1 text-sm text-red-600">{couponError}</p>}
                    {discount > 0 && <p className="mt-1 text-sm text-emerald-600">Coupon applied successfully!</p>}
                  </div>

                  {/* Checkout button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 px-4 bg-emerald-600 text-white text-center font-medium rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Proceed to Checkout
                  </button>

                  {/* Payment methods */}
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 mb-2">We accept:</p>
                    <div className="flex space-x-2">
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                        <Image
                          src="/jazz.png"
                          alt="Visa"
                          width={44}
                          height={36}
                        />
                      </div>
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                        <Image
                          src="/easy.png"
                          alt="Mastercard"
                          width={24}
                          height={16}
                        />
                      </div>
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                        <Image
                          src="/1.png"
                          alt="PayPal"
                          width={44}
                          height={36}
                        />
                      </div>
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                        <Image
                          src="/2.png"
                          alt="Apple Pay"
                          width={72}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
