import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">SGVN</h2>
          <p className="text-gray-500 mt-2">Loading...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/images/school-logo.png"
              alt="SGVN Logo"
              className="w-20 h-20 object-contain rounded"
            />
            {/* Optionally, keep the name next to the logo */}
            {/* <span className="text-2xl font-bold">SGVN</span> */}
          </a>
          <nav className="space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <div className="inline-block relative group">
              <button className="hover:underline">Academics</button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <a href="/academics/programs" className="block px-4 py-2 hover:bg-blue-100">Programs</a>
                <a href="/academics/faculty" className="block px-4 py-2 hover:bg-blue-100">Faculty</a>
                <a href="/academics/curriculum" className="block px-4 py-2 hover:bg-blue-100">curriculum</a>
                <a href="/academics/calendar" className="block px-4 py-2 hover:bg-blue-100">Academic Calendar</a>
              </div>
            </div>
            <a href="/news" className="hover:underline">News&Events</a>
            <a href="/student-life" className="hover:underline">Student-life</a>
            <a href="/admissions" className="hover:underline">Admissions</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}