// Product type definition
interface ProductImage {
  id: number
  image: string
  alt_text: string
  is_primary: boolean
}

export interface Product {
  id: number
  name: string
  slug: string
  price: number
  sale_price: number | null
  discount_percentage: number | null
  category: number
  description: string
  short_description: string
  images: ProductImage[]
  videos: any[]
  in_stock: boolean
  featured: boolean
  is_offer: boolean
  created_at: string
  updated_at: string
}

// Sample products data
export const allProducts: Product[] = [
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
        image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking.jpg",
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
