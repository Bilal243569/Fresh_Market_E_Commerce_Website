"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryGrid from "@/components/category-grid"
import type { Product } from "@/components/product-card"

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

// Sample categories data
const categories = {
  "fruits-vegetables": {
    id: 1,
    name: "Fruits & Vegetables",
    description: "Fresh, organic fruits and vegetables sourced from local farms and trusted suppliers.",
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    banner: "https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg",
  },
  "dairy-eggs": {
    id: 2,
    name: "Dairy & Eggs",
    description: "Quality dairy products and farm-fresh eggs from free-range, ethically raised chickens.",
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
    banner: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg",
  },
  bakery: {
    id: 3,
    name: "Bakery",
    description: "Freshly baked breads, pastries, and desserts made with traditional recipes and premium ingredients.",
    image: "https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg",
    banner: "https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg",
  },
  "meat-seafood": {
    id: 4,
    name: "Meat & Seafood",
    description: "Premium cuts of meat and fresh seafood, including organic and free-range options.",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
    banner: "https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg",
  },
  pantry: {
    id: 5,
    name: "Pantry & Dry Goods",
    description: "Essential pantry staples, cooking ingredients, and specialty items from around the world.",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    banner: "https://images.pexels.com/photos/6248970/pexels-photo-6248970.jpeg",
  },
  beverages: {
    id: 6,
    name: "Beverages",
    description: "Refreshing drinks, including organic juices, specialty coffees, teas, and craft beverages.",
    image: "https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg",
    banner: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg",
  },
}

// Sample products data
const allProducts: Product[] = [
  {
    id: 1,
    name: "Organic Red Apples",
    slug: "organic-red-apples",
    price: 4.99,
    sale_price: null,
    discount_percentage: null,
    category: 1, // Fruits & Vegetables
    description: "Fresh, organic red apples sourced from local farms. High in fiber and antioxidants.",
    short_description: "Fresh, organic red apples from local farms.",
    images: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg",
        alt_text: "Organic Red Apples",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-15T10:00:00Z",
    updated_at: "2023-06-15T10:00:00Z",
  },
  {
    id: 3,
    name: "Organic Avocados",
    slug: "organic-avocados",
    price: 7.99,
    sale_price: null,
    discount_percentage: null,
    category: 1, // Fruits & Vegetables
    description: "Perfectly ripe, organic avocados. Rich in healthy fats and perfect for salads or guacamole.",
    short_description: "Perfectly ripe, organic avocados.",
    images: [
      {
        id: 3,
        image: "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg",
        alt_text: "Organic Avocados",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-17T10:00:00Z",
    updated_at: "2023-06-17T10:00:00Z",
  },
  {
    id: 7,
    name: "Assorted Organic Berries",
    slug: "assorted-organic-berries",
    price: 8.99,
    sale_price: null,
    discount_percentage: null,
    category: 1, // Fruits & Vegetables
    description: "A mix of fresh, organic strawberries, blueberries, and raspberries. Perfect for snacking.",
    short_description: "Fresh, organic mixed berries.",
    images: [
      {
        id: 7,
        image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
        alt_text: "Assorted Organic Berries",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-21T10:00:00Z",
    updated_at: "2023-06-21T10:00:00Z",
  },
  {
    id: 13,
    name: "Organic Bananas",
    slug: "organic-bananas",
    price: 3.49,
    sale_price: 2.99,
    discount_percentage: 14,
    category: 1, // Fruits & Vegetables
    description: "Organic, fair-trade bananas. Perfect for snacking, smoothies, or baking.",
    short_description: "Organic, fair-trade bananas.",
    images: [
      {
        id: 13,
        image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
        alt_text: "Organic Bananas",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-06-27T10:00:00Z",
    updated_at: "2023-06-27T10:00:00Z",
  },
  {
    id: 20,
    name: "Organic Spinach",
    slug: "organic-spinach",
    price: 4.49,
    sale_price: 3.99,
    discount_percentage: 11,
    category: 1, // Fruits & Vegetables
    description: "Fresh organic spinach leaves. Perfect for salads, smoothies, or cooking.",
    short_description: "Fresh organic spinach leaves.",
    images: [
      {
        id: 20,
        image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg",
        alt_text: "Organic Spinach",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-04T10:00:00Z",
    updated_at: "2023-07-04T10:00:00Z",
  },
  {
    id: 2,
    name: "Sourdough Bread",
    slug: "sourdough-bread",
    price: 6.99,
    sale_price: 5.49,
    discount_percentage: 21,
    category: 3, // Bakery
    description: "Freshly baked sourdough bread made with our century-old starter. Crusty outside, soft inside.",
    short_description: "Freshly baked artisanal sourdough bread.",
    images: [
      {
        id: 2,
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg",
        alt_text: "Sourdough Bread",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-16T10:00:00Z",
    updated_at: "2023-06-16T10:00:00Z",
  },
  {
    id: 14,
    name: "Artisanal Baguette",
    slug: "artisanal-baguette",
    price: 4.99,
    sale_price: null,
    discount_percentage: null,
    category: 3, // Bakery
    description: "Traditional French baguette with a crispy crust and soft interior. Baked fresh daily.",
    short_description: "Traditional French baguette baked fresh daily.",
    images: [
      {
        id: 14,
        image: "https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg",
        alt_text: "Artisanal Baguette",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: false,
    created_at: "2023-06-28T10:00:00Z",
    updated_at: "2023-06-28T10:00:00Z",
  },
  {
    id: 15,
    name: "Chocolate Croissants",
    slug: "chocolate-croissants",
    price: 8.99,
    sale_price: 7.49,
    discount_percentage: 17,
    category: 3, // Bakery
    description: "Buttery, flaky croissants filled with rich chocolate. Perfect for breakfast or dessert.",
    short_description: "Buttery, flaky croissants filled with rich chocolate.",
    images: [
      {
        id: 15,
        image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg",
        alt_text: "Chocolate Croissants",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-06-29T10:00:00Z",
    updated_at: "2023-06-29T10:00:00Z",
  },
  {
    id: 21,
    name: "Cinnamon Rolls",
    slug: "cinnamon-rolls",
    price: 7.99,
    sale_price: 6.49,
    discount_percentage: 19,
    category: 3, // Bakery
    description: "Freshly baked cinnamon rolls with cream cheese frosting. Perfect for breakfast or dessert.",
    short_description: "Freshly baked cinnamon rolls with cream cheese frosting.",
    images: [
      {
        id: 21,
        image: "https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg",
        alt_text: "Cinnamon Rolls",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-05T10:00:00Z",
    updated_at: "2023-07-05T10:00:00Z",
  },
  {
    id: 4,
    name: "Premium Greek Yogurt",
    slug: "premium-greek-yogurt",
    price: 5.49,
    sale_price: 4.29,
    discount_percentage: 22,
    category: 2, // Dairy & Eggs
    description: "Creamy, protein-rich Greek yogurt. Made from the finest milk and traditional techniques.",
    short_description: "Creamy, protein-rich Greek yogurt.",
    images: [
      {
        id: 4,
        image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
        alt_text: "Premium Greek Yogurt",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: false,
    featured: true,
    is_offer: true,
    created_at: "2023-06-18T10:00:00Z",
    updated_at: "2023-06-18T10:00:00Z",
  },
  {
    id: 8,
    name: "Artisanal Cheese Selection",
    slug: "artisanal-cheese-selection",
    price: 24.99,
    sale_price: 19.99,
    discount_percentage: 20,
    category: 2, // Dairy & Eggs
    description: "A curated selection of artisanal cheeses from local farms. Perfect for entertaining.",
    short_description: "A curated selection of artisanal cheeses.",
    images: [
      {
        id: 8,
        image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg",
        alt_text: "Artisanal Cheese Selection",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-22T10:00:00Z",
    updated_at: "2023-06-22T10:00:00Z",
  },
  {
    id: 16,
    name: "Organic Free-Range Eggs",
    slug: "organic-free-range-eggs",
    price: 6.99,
    sale_price: null,
    discount_percentage: null,
    category: 2, // Dairy & Eggs
    description: "Farm-fresh organic eggs from free-range chickens. Rich in flavor and nutrients.",
    short_description: "Farm-fresh organic eggs from free-range chickens.",
    images: [
      {
        id: 16,
        image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg",
        alt_text: "Organic Free-Range Eggs",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: false,
    created_at: "2023-06-30T10:00:00Z",
    updated_at: "2023-06-30T10:00:00Z",
  },
  {
    id: 22,
    name: "Organic Butter",
    slug: "organic-butter",
    price: 5.99,
    sale_price: 4.99,
    discount_percentage: 17,
    category: 2, // Dairy & Eggs
    description: "Creamy organic butter made from grass-fed cow's milk. Perfect for cooking and baking.",
    short_description: "Creamy organic butter from grass-fed cow's milk.",
    images: [
      {
        id: 22,
        image: "https://images.pexels.com/photos/531334/pexels-photo-531334.jpeg",
        alt_text: "Organic Butter",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-06T10:00:00Z",
    updated_at: "2023-07-06T10:00:00Z",
  },
  {
    id: 5,
    name: "Wild-Caught Salmon Fillets",
    slug: "wild-caught-salmon-fillets",
    price: 15.99,
    sale_price: null,
    discount_percentage: null,
    category: 4, // Meat & Seafood
    description: "Premium wild-caught salmon fillets. High in omega-3 fatty acids and perfect for grilling.",
    short_description: "Premium wild-caught salmon fillets.",
    images: [
      {
        id: 5,
        image: "https://images.pexels.com/photos/1148280/pexels-photo-1148280.jpeg",
        alt_text: "Wild-Caught Salmon Fillets",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-19T10:00:00Z",
    updated_at: "2023-06-19T10:00:00Z",
  },
  {
    id: 12,
    name: "Grass-Fed Ground Beef",
    slug: "grass-fed-ground-beef",
    price: 9.99,
    sale_price: 8.49,
    discount_percentage: 15,
    category: 4, // Meat & Seafood
    description: "Premium grass-fed ground beef. Lean, flavorful, and perfect for burgers and meatballs.",
    short_description: "Premium grass-fed ground beef.",
    images: [
      {
        id: 12,
        image: "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg",
        alt_text: "Grass-Fed Ground Beef",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-26T10:00:00Z",
    updated_at: "2023-06-26T10:00:00Z",
  },
  {
    id: 17,
    name: "Fresh Jumbo Shrimp",
    slug: "fresh-jumbo-shrimp",
    price: 18.99,
    sale_price: 15.99,
    discount_percentage: 16,
    category: 4, // Meat & Seafood
    description: "Fresh, sustainably sourced jumbo shrimp. Perfect for grilling, sautéing, or adding to pasta.",
    short_description: "Fresh, sustainably sourced jumbo shrimp.",
    images: [
      {
        id: 17,
        image: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg",
        alt_text: "Fresh Jumbo Shrimp",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-01T10:00:00Z",
    updated_at: "2023-07-01T10:00:00Z",
  },
  {
    id: 23,
    name: "Organic Chicken Breast",
    slug: "organic-chicken-breast",
    price: 12.99,
    sale_price: 10.99,
    discount_percentage: 15,
    category: 4, // Meat & Seafood
    description: "Organic, free-range chicken breast. Lean, tender, and perfect for grilling or baking.",
    short_description: "Organic, free-range chicken breast.",
    images: [
      {
        id: 23,
        image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg",
        alt_text: "Organic Chicken Breast",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-07T10:00:00Z",
    updated_at: "2023-07-07T10:00:00Z",
  },
  {
    id: 6,
    name: "Organic Cold-Pressed Olive Oil",
    slug: "organic-cold-pressed-olive-oil",
    price: 12.99,
    sale_price: 9.99,
    discount_percentage: 23,
    category: 5, // Pantry & Dry Goods
    description: "Extra virgin, cold-pressed olive oil from organic olives. Perfect for cooking and dressing.",
    short_description: "Extra virgin, cold-pressed organic olive oil.",
    images: [
      {
        id: 6,
        image: "/oil.png",
        alt_text: "Organic Cold-Pressed Olive Oil",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-20T10:00:00Z",
    updated_at: "2023-06-20T10:00:00Z",
  },
  {
    id: 9,
    name: "Organic Honey",
    slug: "organic-honey",
    price: 8.99,
    sale_price: null,
    discount_percentage: null,
    category: 5, // Pantry & Dry Goods
    description: "Pure, raw organic honey sourced from local beekeepers. Rich in flavor and nutrients.",
    short_description: "Pure, raw organic honey from local beekeepers.",
    images: [
      {
        id: 9,
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
        alt_text: "Organic Honey",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-23T10:00:00Z",
    updated_at: "2023-06-23T10:00:00Z",
  },
  {
    id: 11,
    name: "Organic Quinoa",
    slug: "organic-quinoa",
    price: 6.99,
    sale_price: null,
    discount_percentage: null,
    category: 5, // Pantry & Dry Goods
    description: "Organic white quinoa, a complete protein source. Perfect for salads, bowls, and side dishes.",
    short_description: "Organic white quinoa, a complete protein source.",
    images: [
      {
        id: 11,
        image: "https://images.pexels.com/photos/7421242/pexels-photo-7421242.jpeg",
        alt_text: "Organic Quinoa",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: false,
    created_at: "2023-06-25T10:00:00Z",
    updated_at: "2023-06-25T10:00:00Z",
  },
  {
    id: 24,
    name: "Organic Pasta",
    slug: "organic-pasta",
    price: 4.99,
    sale_price: 3.99,
    discount_percentage: 20,
    category: 5, // Pantry & Dry Goods
    description: "Organic durum wheat pasta. Perfect for a variety of dishes.",
    short_description: "Organic durum wheat pasta.",
    images: [
      {
        id: 24,
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        alt_text: "Organic Pasta",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-08T10:00:00Z",
    updated_at: "2023-07-08T10:00:00Z",
  },
  {
    id: 10,
    name: "Freshly Roasted Coffee Beans",
    slug: "freshly-roasted-coffee-beans",
    price: 14.99,
    sale_price: 12.99,
    discount_percentage: 13,
    category: 6, // Beverages
    description: "Premium coffee beans, freshly roasted for maximum flavor and aroma.",
    short_description: "Premium freshly roasted coffee beans.",
    images: [
      {
        id: 10,
        image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        alt_text: "Freshly Roasted Coffee Beans",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: true,
    is_offer: true,
    created_at: "2023-06-24T10:00:00Z",
    updated_at: "2023-06-24T10:00:00Z",
  },
  {
    id: 18,
    name: "Organic Green Tea",
    slug: "organic-green-tea",
    price: 9.99,
    sale_price: 7.99,
    discount_percentage: 20,
    category: 6, // Beverages
    description: "Premium organic green tea leaves. Rich in antioxidants and perfect for hot or iced tea.",
    short_description: "Premium organic green tea leaves.",
    images: [
      {
        id: 18,
        image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
        alt_text: "Organic Green Tea",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-02T10:00:00Z",
    updated_at: "2023-07-02T10:00:00Z",
  },
  {
    id: 19,
    name: "Cold-Pressed Orange Juice",
    slug: "cold-pressed-orange-juice",
    price: 6.99,
    sale_price: null,
    discount_percentage: null,
    category: 6, // Beverages
    description: "Fresh, cold-pressed orange juice with no added sugars or preservatives.",
    short_description: "Fresh, cold-pressed orange juice.",
    images: [
      {
        id: 19,
        image: "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg",
        alt_text: "Cold-Pressed Orange Juice",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: false,
    created_at: "2023-07-03T10:00:00Z",
    updated_at: "2023-07-03T10:00:00Z",
  },
  {
    id: 25,
    name: "Sparkling Water Variety Pack",
    slug: "sparkling-water-variety-pack",
    price: 12.99,
    sale_price: 10.99,
    discount_percentage: 15,
    category: 6, // Beverages
    description:
      "Refreshing sparkling water in a variety of natural flavors. No added sugars or artificial ingredients.",
    short_description: "Refreshing sparkling water in a variety of natural flavors.",
    images: [
      {
        id: 25,
        image: "https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg",
        alt_text: "Sparkling Water Variety Pack",
        is_primary: true,
      },
    ],
    videos: [],
    in_stock: true,
    featured: false,
    is_offer: true,
    created_at: "2023-07-09T10:00:00Z",
    updated_at: "2023-07-09T10:00:00Z",
  },
]

// Category ID mapping
const categoryIdMap = {
  "fruits-vegetables": 1,
  "dairy-eggs": 2,
  bakery: 3,
  "meat-seafood": 4,
  pantry: 5,
  beverages: 6,
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = categories[slug as keyof typeof categories]
  const categoryId = categoryIdMap[slug as keyof typeof categoryIdMap]

  // Filter products by category
  const categoryProducts = allProducts.filter((product) => product.category === categoryId)

  if (!category) {
    return (
      <div>
        <Header />
        <div className="pt-[72px] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
            <Link
              href="/categories"
              className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Categories
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[200px] md:h-[250px] bg-gray-900">
          <Image
            src={category.banner || category.image}
            alt={category.name}
            fill
            className="object-cover opacity-70"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <Link
                  href="/categories"
                  className="inline-flex items-center text-white/80 hover:text-white mb-2 transition-colors"
                >
                  <ArrowLeft size={16} className="mr-1" /> All Categories
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
                <p className="text-lg text-white/90">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <CategoryGrid products={categoryProducts} categoryName={category.name} />
          </div>
        </section>

        <Footer settings={siteSettings} />
      </div>
    </div>
  )
}
