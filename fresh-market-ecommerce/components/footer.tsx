"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"

interface SocialMedia {
  facebook?: string
  twitter?: string
  instagram?: string
}

interface SiteSettings {
  site: {
    site_name: string
    site_description?: string
    address?: string
    contact_phone?: string
    contact_email?: string
    social_media: SocialMedia
    footer_text?: string
    enable_newsletter?: boolean
  }
}

interface FooterProps {
  settings?: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription for:", email)
    setEmail("")
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <footer className="bg-emerald-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{settings?.site.site_name || "Fresh Market"}</h3>
            <p className="text-emerald-100 mb-4">
              {settings?.site.site_description || "Your premium online grocery store"}
            </p>
            <div className="flex space-x-4 mb-4">
              {settings?.site.social_media.facebook && (
                <a
                  href={settings.site.social_media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {settings?.site.social_media.twitter && (
                <a
                  href={settings.site.social_media.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {settings?.site.social_media.instagram && (
                <a
                  href={settings.site.social_media.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-emerald-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-emerald-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Offers & Discounts
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-emerald-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-emerald-200 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-emerald-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-emerald-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {settings?.site.address && (
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-emerald-100">{settings.site.address}</span>
                </li>
              )}
              {settings?.site.contact_phone && (
                <li className="flex items-center">
                  <Phone size={20} className="mr-2 text-emerald-500" />
                  <a
                    href={`tel:${settings.site.contact_phone}`}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {settings.site.contact_phone}
                  </a>
                </li>
              )}
              {settings?.site.contact_email && (
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 text-emerald-500" />
                  <a
                    href={`mailto:${settings.site.contact_email}`}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {settings.site.contact_email}
                  </a>
                </li>
              )}
              <li className="flex items-center">
                <Clock size={20} className="mr-2 text-emerald-500" />
                <span className="text-emerald-100">
                  Mon-Fri: 8am-8pm
                  <br />
                  Sat-Sun: 9am-6pm
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {settings?.site.enable_newsletter !== false && (
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-emerald-100 mb-4">
                Subscribe to our newsletter for the latest products and promotions.
              </p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow py-2 px-4 rounded-md bg-emerald-700 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-md bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-medium"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-100 text-sm mb-4 md:mb-0">
            {settings?.site.footer_text || `© ${new Date().getFullYear()} Fresh Market. All rights reserved.`}
          </p>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-12 relative">
              <Image src="/placeholder.svg?height=32&width=48" alt="Visa" width={48} height={32} />
            </div>
            <div className="h-8 w-12 relative">
              <Image src="/placeholder.svg?height=32&width=48" alt="Mastercard" width={48} height={32} />
            </div>
            <div className="h-8 w-12 relative">
              <Image src="/placeholder.svg?height=32&width=48" alt="PayPal" width={48} height={32} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
