import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 px-4 md:px-6 lg:px-12 max-w-full md:max-w-[73%] mx-auto w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout