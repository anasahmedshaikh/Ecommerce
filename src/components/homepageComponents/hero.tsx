import heromodel from "@/public/images/hero.png"
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative max-w-[100vw] h-[100vh] bg-[#F3F0F1] -z-20">
      <div className="absolute inset-0 bg-opacity-50 flex items-center bg-cover bg-center ">
        <div className="absolute max-w-2/4 h-full -z-10 ml-[50vw] overflow-hidden" >
        <Image src={heromodel} alt="hero image" /> 
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
  )
}



// export default function HeroSection() {
//   return (
//     <div className="relative w-full h-screen bg-transparent overflow-hidden">
//         <Image
//           src={heromodel}
//           alt="Hero image of models"
//           layout="fill"
//           objectFit="contain"
//           objectPosition="center right"
//           className=" -z-0"
//         />
//       <div className="absolute top-0 left-0 w-20 h-20">
//         <Image src={star} alt="Decorative star" layout="fill" objectFit="contain" />
//       </div>
//       <div className="absolute bottom-20 left-10 w-10 h-10">
//         <Image src={star} alt="Decorative star" layout="fill" objectFit="contain" />
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <h1 className="text-5xl font-extrabold text-black leading-tight">
//               FIND CLOTHES THAT MATCHES YOUR STYLE
//             </h1>
//             <p className="text-gray-700 text-lg">
//               Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//             </p>
//             <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-full inline-block font-semibold text-lg hover:bg-gray-800 transition-colors">
//               Shop Now
//             </Link>
//             <div className="grid grid-cols-3 gap-8 pt-8">
//               <div>
//                 <p className="text-4xl font-bold text-black">200+</p>
//                 <p className="text-gray-700">International Brands</p>
//               </div>
//               <div>
//                 <p className="text-4xl font-bold text-black">2,000+</p>
//                 <p className="text-gray-700">High-Quality Products</p>
//               </div>
//               <div>
//                 <p className="text-4xl font-bold text-black">30,000+</p>
//                 <p className="text-gray-700">Happy Customers</p>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-full">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }