import Image from 'next/image'


export default function BrandLogoBanner() {
  const brands = [
    { name: 'Versace', logo: '/images/brandLogos/versace.png' },
    { name: 'Zara', logo: '/images/brandLogos/zara.png' },
    { name: 'Gucci', logo: '/images/brandLogos/gucci.png' },
    { name: 'Prada', logo: '/images/brandLogos/prada.png' },
    { name: 'Calvin Klein', logo: '/images/brandLogos/calvin-klein.png' },
  ]
  
  return (
    <div className="w-full h-32 pt-10 bg-black py-4 mb-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="w-24 flex justify-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={150}
                height={75}
                className="max-h-12 p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}