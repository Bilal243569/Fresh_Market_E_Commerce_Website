"use client"

import { Truck, Shield, Clock, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Truck size={36} className="text-emerald-600" />,
    title: "Free Shipping",
    description: "Free delivery on orders over $50",
  },
  {
    icon: <Shield size={36} className="text-emerald-600" />,
    title: "Secure Payment",
    description: "Multiple secure payment methods",
  },
  {
    icon: <Clock size={36} className="text-emerald-600" />,
    title: "Same-Day Delivery",
    description: "Order before 2pm for same-day delivery",
  },
  {
    icon: <RefreshCw size={36} className="text-emerald-600" />,
    title: "Easy Returns",
    description: "30-day money-back guarantee",
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
