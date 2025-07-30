"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-emerald-100 mb-8">
            Get updates on new products, special offers, and seasonal tips delivered to your inbox.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-emerald-600 mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600">You've been added to our mailing list and will receive updates soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 transition-colors text-white font-medium py-3 px-6 rounded-md flex items-center justify-center"
                >
                  <span className="mr-2">Subscribe</span>
                  <Send size={16} />
                </button>
              </div>
              <p className="text-xs text-emerald-100 mt-3">
                We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
