'use client'
import Link from "next/link"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { useEffect, useState } from "react"


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="border-b relative backdrop-blur-glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Mobile Header */}
                <div className="flex items-center justify-between w-full lg:hidden">
                    <button className="text-gray-500" onClick={toggleMobileMenu}>
                        <Menu className="h-6 w-6" />
                    </button>
                    <Link href="/" className="text-2xl font-bold">SHOP.CO</Link>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500">
                            <Search className="h-6 w-6" />
                        </button>
                        <Link href="/cart" className="text-gray-500">
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                        <button className="text-gray-500">
                            <User className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Desktop Header */}
                <div className="hidden lg:flex md:items-center md:justify-between md:w-full ">
                    <Link href="/" className="text-2xl font-black text-black">SHOP.CO</Link>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
                        <Link href="/on-sale" className="text-gray-700 hover:text-gray-900">On Sale</Link>
                        <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900">New Arrivals</Link>
                        <Link href="/brands" className="text-gray-700 hover:text-gray-900">Brands</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input type="text" placeholder="Search for products..." className="border rounded-full pl-10 pr-4 py-2 text-sm w-64" />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
                        <User className="h-6 w-6 text-gray-700" />
                        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50">
                    <nav className="px-4 py-2">
                        <Link href="/shop" className="block py-2 text-gray-700 hover:text-gray-900">Shop</Link>
                        <Link href="/on-sale" className="block py-2 text-gray-700 hover:text-gray-900">On Sale</Link>
                        <Link href="/new-arrivals" className="block py-2 text-gray-700 hover:text-gray-900">New Arrivals</Link>
                        <Link href="/brands" className="block py-2 text-gray-700 hover:text-gray-900">Brands</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
