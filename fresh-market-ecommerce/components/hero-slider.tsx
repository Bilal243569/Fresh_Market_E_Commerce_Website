"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

// Hero slider content
const slides = [
  {
    id: 1,
    title: "Fresh Organic Produce",
    subtitle: "From farm to table, experience the finest organic fruits and vegetables",
    buttonText: "Shop Organic",
    buttonLink: "/categories/organic",
    image: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    id: 2,
    title: "Summer Sale",
    subtitle: "Up to 30% off on seasonal items. Limited time offer!",
    buttonText: "View Offers",
    buttonLink: "/offers",
    image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg",
    color: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: 3,
    title: "Artisanal Bakery",
    subtitle: "Discover our freshly baked bread and pastries",
    buttonText: "Shop Bakery",
    buttonLink: "/categories/bakery",
    image: "https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg",
    color: "bg-cyan-600 hover:bg-cyan-700",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-advance on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Navigation handlers
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  return (
    <div
      className="relative h-[500px] md:h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="absolute inset-0 z-10">
                  {/* Using next/image for better performance */}
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                  <div className="max-w-2xl">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-lg md:text-xl text-gray-200 mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Link href={slide.buttonLink}>
                        <Button size="lg" className={`shadow-md ${slide.color} border-none`}>
                          {slide.buttonText}
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
