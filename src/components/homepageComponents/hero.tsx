import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    // mobile header
    <div className="bg-[#F3F0F1]">
      <div className="md:hidden">
        <div className="bg-[#F3F0F1] px-6 max-w-sm mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-2">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-gray-600 mb-4">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <Link href="/shop" className="block w-full bg-black text-white text-center py-3 rounded-full font-semibold mb-6 hover:bg-gray-800 transition duration-300">
            Shop Now
          </Link>
          <div className="flex justify-between mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-gray-600">International Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2,000+</div>
              <div className="text-sm text-gray-600">High-Quality Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">30,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero.png"
              alt="Stylish couple in trendy outfits"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:inline md:relative w-[100vw] h-[100vh] bg-[#F3F0F1] ">
        <div className="inline inset-0 bg-opacity-50  bg-cover bg-center ">
          <div className="absolute max-w-2/4 h-full ml-[50vw] overflow-hidden " >
            <Image 
              src="/images/hero.png"
              alt="hero image"  
              width={1600} 
              height={800} 
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl font-extrabold text-black leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-800 text-lg">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-full inline-block font-semibold text-lg">Shop Now</Link>
              <div className="flex space-x-12 pt-8">
                <div>
                  <p className="text-4xl font-bold text-black">200+</p>
                  <p className="text-gray-800">International Brands</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-black">2,000+</p>
                  <p className="text-gray-800">High-Quality Products</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-black">30,000+</p>
                  <p className="text-gray-800">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
