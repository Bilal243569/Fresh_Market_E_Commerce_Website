"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gray-900">
          <Image
            src="https://images.pexels.com/photos/3735216/pexels-photo-3735216.jpeg"
            alt="Fresh Market Store"
            fill
            className="object-cover opacity-70"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h1>
                <p className="text-xl md:text-2xl text-white max-w-2xl">
                  Bringing the freshest produce and finest products to your table since 2010, with a vision for 2025 and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Content on the left */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="prose prose-lg">
                  <p>
                    Fresh Market was founded in 2010 with a simple mission: to provide customers with the freshest,
                    highest-quality foods and exceptional service in a warm and inviting shopping environment.
                  </p>
                  <p>
                    What began as a small local store has grown into a beloved grocery destination, but our commitment
                    to quality and service remains unchanged. We believe that food shopping should be a pleasure, not a
                    chore.
                  </p>
                  <p>
                    As we look ahead to 2025, we're expanding our commitment to sustainability with a pledge to reduce
                    our carbon footprint by 50% and source 75% of our products from local farms and producers within a
                    100-mile radius.
                  </p>
                  <p>
                    Our 2025 vision includes opening 15 new locations across the country, all powered by renewable
                    energy, and launching our innovative zero-waste packaging program for all Fresh Market branded
                    products.
                  </p>
                </div>
              </div>

              {/* Image on the right */}
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg"
                  alt="Fresh Market Store"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our 2025 Vision & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-emerald-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
                <p className="text-gray-600">
                  By 2025, we aim to have 100% of our products certified organic or sustainably sourced, ensuring the
                  highest quality for our customers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-emerald-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Our 2025 goal is to achieve carbon neutrality across all operations, with zero-waste packaging and
                  100% renewable energy in all our stores.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-emerald-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  By 2025, we pledge to invest $5 million annually in community programs, supporting local farmers, food
                  security initiatives, and nutrition education.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2025 Initiatives */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our 2025 Initiatives</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Farm-to-Table Network</h3>
                <p className="text-gray-600 mb-6">
                  By 2025, we're building a network of 500+ local farms within 100 miles of each store, ensuring the
                  freshest produce with minimal transportation impact. This initiative will reduce our carbon footprint
                  while supporting local economies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Reduced transportation emissions by 75%
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Support for 500+ local family farms
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Fresher produce with 24-hour farm-to-shelf timeline
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-[350px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"
                  alt="Local Farm Partnership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg"
                  alt="Zero Waste Packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Zero Waste by 2025</h3>
                <p className="text-gray-600 mb-6">
                  Our ambitious zero waste program aims to eliminate all single-use plastics from our stores by 2025.
                  We're introducing compostable packaging, bulk shopping options, and innovative reusable container
                  programs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    100% compostable or reusable packaging
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Expanded bulk food section in all stores
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Container deposit program with 85% return rate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our 2025 Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  title: "Founder & CEO",
                  image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                  bio: "Leading our 2025 vision for sustainable grocery retail",
                },
                {
                  name: "Michael Chen",
                  title: "Chief Sustainability Officer",
                  image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
                  bio: "Driving our zero-waste and carbon-neutral initiatives",
                },
                {
                  name: "Emily Rodriguez",
                  title: "VP of Local Partnerships",
                  image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
                  bio: "Expanding our network of local farmers and producers",
                },
                {
                  name: "David Wilson",
                  title: "Chief Technology Officer",
                  image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                  bio: "Implementing our digital transformation strategy",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-emerald-600 mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Us on Our Journey to 2025</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Be part of our sustainable future. Join thousands of customers who trust us for their grocery needs and
              support our mission for a greener tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register"
                className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Create an Account
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
