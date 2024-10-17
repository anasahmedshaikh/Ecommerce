
'use client'

import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react";
import { useState } from "react";

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const customers = [
    { name: 'Sarah M.', rating: 5, comment: "I'm blown away by the quality and style of the clothes I received. From casual to formal, every piece exceeded my expectations!" },
    { name: 'Alex K.', rating: 5, comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
    { name: 'James L.', rating: 5, comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends." },
    { name: 'Emily R.', rating: 5, comment: "I love how easy it is to mix and match different pieces to create unique outfits. The quality is fantastic and the prices are reasonable." },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + customers.length) % customers.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">OUR HAPPY CUSTOMERS</h2>
        <div className="flex space-x-2">
          <button onClick={prevSlide} className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200">
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200">
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {customers.map((review, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4">
              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 h-full flex flex-col">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <span className="font-semibold text-black mr-2">{review.name}</span>
                  <Check className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                </div>
                <p className="text-gray-600 text-xs md:text-sm flex-grow">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}