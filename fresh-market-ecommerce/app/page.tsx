"use client"

import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import Features from "@/components/features"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import SpecialOffers from "@/components/special-offers"
import Newsletter from "@/components/newsletter"
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

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        {/* Add padding to account for fixed header */}
        <HeroSlider />
        <Features />
        <CategorySection />
        <FeaturedProducts />
        <SpecialOffers />
        <Newsletter />
        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
