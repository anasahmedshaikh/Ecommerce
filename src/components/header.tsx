'use client'
import Link from "next/link"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { useEffect, useState } from "react"


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const [index, setIndex] = useState(-1);
    const [height, setHeight] = useState(false);
    const [elem, setElem] = useState(false);
    const [scrollingDown, setScrollingDown] = useState<boolean>(false);
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop =
          window.scrollY || document.documentElement.scrollTop;
        setScrollingDown(currentScrollTop > lastScrollTop);
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollTop]);

    return (
        <header className="border-b relative backdrop-blur-glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Mobile Header */}
                <div className="flex items-center justify-between w-full md:hidden">
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
                <div className={`hidden md:flex md:items-center md:justify-between md:w-full ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}>
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

// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";


// const Navbar = () => {
//   const [index, setIndex] = useState(-1);
//   const [height, setHeight] = useState(false);
//   const [elem, setElem] = useState(false);
//   const [scrollingDown, setScrollingDown] = useState<boolean>(false);
//   const [lastScrollTop, setLastScrollTop] = useState<number>(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop =
//         window.scrollY || document.documentElement.scrollTop;
//       setScrollingDown(currentScrollTop > lastScrollTop);
//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);
//   const navbarElem = (
//     <>
//       {navLinks.map((val, ind) => (
//         <Link href={val.link} key={ind}>
//           <li
//             className={`relative uppercase text-sm px-4 font-semibold h-[45px] flex items-end justify-start pb-1 cursor-pointer ${
//               val.name === "home" && "tracking-tighter"
//             }`}
//             onMouseEnter={() => setIndex(ind)}
//             onMouseLeave={() => setIndex(-1)}
//             onClick={() => {window.innerWidth <= 640 && animateSlider()}}
//           >
//             {val.name}
//             <div
//               className="h-[2px] duration-300 bottom-0 bg-red-800 absolute"
//               style={{
//                 width: index === ind ? `${val.name.length * 9}px` : `0px`,
//               }}
//             ></div>
//           </li>
//         </Link>
//       ))}
//     </>
//   );
//   const animateSlider = () => {
//     setHeight((val) => !val);
//     if (elem) {
//       setElem(false);
//     } else {
//       setTimeout(() => {
//         setElem(true);
//       }, 500);
//     }
//   };
//   return (
//     <div className={`fixed top-0 z-[1000] border-b-[1px] border-zinc-800 h-16 w-full backdrop-blur-glass text-red-800 flex justify-between items-center px-8 duration-500 ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}>
//       <div
//         className={`logo font-bold text-xl text-red-800 uppercase`}
//       >
//         MF-Garage
//       </div>
//       <ul className="h-full sm:flex hidden">{navbarElem}</ul>
//       <div
//         className="h-6 w-8 cursor-pointer sm:hidden flex flex-col items-start justify-between"
//         onClick={() => animateSlider()}
//       >
//         <div
//           className={`h-[2px] w-full bg-red-800 rounded-full [transform-origin:left] duration-300 ${
//             height ? "rotate-[43deg]" : "rotate-0"
//           }`}
//         ></div>
//         <div
//           className={`h-[2px] w-full bg-red-800 rounded-full duration-300 ${
//             height ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"
//           }`}
//         ></div>
//         <div
//           className={`h-[2px] w-full bg-red-800 rounded-full [transform-origin:left] duration-300 ${
//             height ? "-rotate-45" : "rotate-0"
//           }`}
//         ></div>
//       </div>
//       <div
//         className={`absolute right-0 bottom-0 translate-y-full flex flex-col items-center justify-start duration-500 ${
//           height ? "h-60" : "h-0"
//         } w-32 backdrop-blur-glass bg-black/80 rounded-bl-md`}
//       >
//         {elem && navbarElem}
//       </div>
//     </div>
//   );
// };

// export default Navbar;