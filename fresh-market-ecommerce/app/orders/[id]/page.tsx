"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Clock, CheckCircle, TruckIcon, MapPin } from "lucide-react"
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

export default function OrderDetailPage() {
  const { isAuthenticated } = useAuth()
  const params = useParams()
  const router = useRouter()
  const orderId = params.id as string

  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load order from localStorage
    const loadOrder = () => {
      setIsLoading(true)
      try {
        const storedOrders = localStorage.getItem("orders")
        if (storedOrders) {
          const orders = JSON.parse(storedOrders) as Order[]
          const foundOrder = orders.find((o) => o.id.toString() === orderId)
          setOrder(foundOrder || null)
        }
      } catch (error) {
        console.error("Failed to load order:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (orderId) {
      loadOrder()
    }
  }, [orderId])

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
            <Link href="/orders" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Orders
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-auto">Order Details</h1>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : !order ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Order not found</h2>
              <p className="text-gray-600 mb-8">The order you're looking for doesn't exist or has been removed.</p>
              <Link
                href="/orders"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
              >
                View All Orders
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-bold text-gray-800">Delivery Information</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <MapPin className="text-gray-500 mt-1 mr-3" size={20} />
                      <div>
                        <h3 className="font-medium text-gray-800">Delivery Address</h3>
                        <p className="text-gray-600">
                          123 Main Street
                          <br />
                          Apt 4B
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TruckIcon className="text-gray-500 mt-1 mr-3" size={20} />
                      <div>
                        <h3 className="font-medium text-gray-800">Delivery Method</h3>
                        <p className="text-gray-600">Standard Delivery (2-3 business days)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${(order.totalPrice + order.discount).toFixed(2)}</span>
                    </div>
                    {order.discount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Discount</span>
                        <span>-${order.discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">${order.totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-3 px-4 bg-emerald-600 text-white text-center font-medium rounded-md hover:bg-emerald-700 transition-colors">
                      Track Order
                    </button>
                    <button className="w-full py-3 px-4 border border-gray-300 text-gray-700 text-center font-medium rounded-md hover:bg-gray-100 transition-colors">
                      Need Help?
                    </button>
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
