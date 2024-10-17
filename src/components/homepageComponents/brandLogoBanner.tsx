import Image from 'next/image'
import versace from '@/public/images/brandLogos/versace.png'
import zara from '@/public/images/brandLogos/zara.png'
import gucci from '@/public/images/brandLogos/gucci.png'
import prada from '@/public/images/brandLogos/prada.png'
import ck from '@/public/images/brandLogos/calvin-klein.png'

export default function BrandLogoBanner() {
  const brands = [
    { name: 'Versace', logo: versace },
    { name: 'Zara', logo: zara },
    { name: 'Gucci', logo: gucci },
    { name: 'Prada', logo: prada },
    { name: 'Calvin Klein', logo: ck },
  ]
  
  return (
    <div className="w-full h-32 pt-10 bg-black py-4 mb-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="w-30 flex justify-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={150}
                height={75}
                objectFit="contain"
                className="max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}