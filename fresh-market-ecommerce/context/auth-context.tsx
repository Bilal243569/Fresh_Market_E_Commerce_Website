"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>
  isLoading: boolean
  error: string | null
  redirectAfterLogin: string | null
  setRedirectAfterLogin: (path: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [redirectAfterLogin, setRedirectAfterLogin] = useState<string | null>(null)

  // Check for existing user session on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err)
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes - accept any email/password combination
      // In a real app, this would validate against a database
      const user = {
        id: 1,
        firstName: "User",
        lastName: "Account",
        email: email,
      }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      return true
    } catch (err) {
      setError("An error occurred. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (firstName: string, lastName: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes - in a real app, this would be an actual API call
      const user = {
        id: Date.now(),
        firstName,
        lastName,
        email,
      }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      return true
    } catch (err) {
      setError("An error occurred. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    isLoading,
    error,
    redirectAfterLogin,
    setRedirectAfterLogin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
