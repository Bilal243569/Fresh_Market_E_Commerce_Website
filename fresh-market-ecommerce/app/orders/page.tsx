"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Clock, CheckCircle, TruckIcon } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/context/auth-context"

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

// Order type definition
interface OrderItem {
  product: {
    id: number
    name: string
    price: number
    sale_price: number | null
    images: Array<{
      id: number
      image: string
      alt_text: string
      is_primary: boolean
    }>
  }
  quantity: number
}

interface Order {
  id: number
  items: OrderItem[]
  totalPrice: number
  discount: number
  status: string
  date: string
}

export default function OrdersPage() {
  const { isAuthenticated } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load orders from localStorage
    const loadOrders = () => {
      setIsLoading(true)
      try {
        const storedOrders = localStorage.getItem("orders")
        if (storedOrders) {
          setOrders(JSON.parse(storedOrders))
        }
      } catch (error) {
        console.error("Failed to load orders:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadOrders()
  }, [])

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing":
        return <Clock className="text-blue-500" size={18} />
      case "Shipped":
        return <TruckIcon className="text-orange-500" size={18} />
      case "Delivered":
        return <CheckCircle className="text-green-500" size={18} />
      default:
        return <Package className="text-gray-500" size={18} />
    }
  }

  if (!isAuthenticated) {
    return (
      <div>
        <Header />
        <div className="pt-[72px] min-h-screen">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Please sign in to view your orders</h2>
              <p className="text-gray-600 mb-8">You need to be logged in to access your order history.</p>
              <Link
                href="/login"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <Footer settings={siteSettings} />
      </div>
    )
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-auto">My Orders</h1>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No orders found</h2>
              <p className="text-gray-600 mb-8">You haven't placed any orders yet.</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center">
                          <h2 className="text-lg font-bold text-gray-800">Order #{order.id}</h2>
                          <span className="ml-4 flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                            {getStatusIcon(order.status)}
                            <span className="ml-1">{order.status}</span>
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">Placed on {formatDate(order.date)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">
                          Total: <span className="font-bold">${order.totalPrice.toFixed(2)}</span>
                        </p>
                        {order.discount > 0 && (
                          <p className="text-emerald-600 text-sm">You saved: ${order.discount.toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="divide-y">
                    {order.items.map((item) => (
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
                              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
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
                              <p className="text-gray-600 text-sm">
                                Subtotal: $
                                {((item.product.sale_price || item.product.price) * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-gray-50 flex justify-between items-center">
                    <Link
                      href={`/products/${order.items[0]?.product.id}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Buy Again
                    </Link>
                    <Link
                      href={`/orders/${order.id}`}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
