import type React from "react"
import type { Metadata } from "next"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"
import { WishlistProvider } from "@/context/wishlist-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fresh Market - Premium Online Grocery Store",
  description: "Shop fresh produce, organic foods, and premium groceries online with Fresh Market",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>{children}</CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
