'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/home/greenhouse.webp',
    '/home/truck.webp',
    '/home/warehouse.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Green overlay with black for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          Durable Greenhouse Films for Year-Round Plant Protection
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl">
          A greenhouse film plays a key role in maintaining the right environment for plant growth. 
          It shields crops from harsh weather, retains warmth, and controls humidity levels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/products" 
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
          >
            EXPLORE MORE
          </Link>
          <Link 
            href="/how-it-works" 
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:text-green-700"
          >
            HOW IT WORKS
          </Link>
        </div>
      </div>
    </section>
  );
} 