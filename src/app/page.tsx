'use client';

import Image from "next/image";
import Link from 'next/link';
import HeroSection from "@/components/HeroSection";
import ProductIntroSection from '@/components/ProductIntroSection';
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductIntroSection />

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16">
            {/* IRAC Greenhouse Plastic */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="relative w-full h-[400px] rounded-t-2xl">
                <Image
                  src="/home/irac_plastic.webp"
                  alt="IRAC Greenhouse Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-red-500 text-black px-3 py-2 rounded-md">IRAC GREENHOUSE PLASTIC / COVER</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">Starting at $6.37</p>
                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Includes anti-drip and heat-retaining properties
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    6 mil thickness for strong durability
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Widths range from 12 to 60 feet
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom length cutting for exact fit
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    55% light diffusion improves plant health
                  </li>
                </ul>
                <Link 
                  href="/products/irac-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Clear Greenhouse Plastic */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="relative w-full h-[400px] rounded-t-2xl">
                <Image
                  src="/home/irac_plastic.webp"
                  alt="Light Deprivation Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-yellow-500 text-black px-3 py-2 rounded-md">CLEAR GREENHOUSE PLASTIC</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">Starting at $4.77</p>
                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Allows 90% light for maximum sun exposure
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    25% diffusion ensures proper light distribution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Strong 6 mil plastic for all-weather use
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Widths range from 12 to 60 feet
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Cut to your greenhouse size
                  </li>
                </ul>
                <Link 
                  href="/products/clear-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Diffused Greenhouse Plastic */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="relative w-full h-[400px] rounded-t-2xl">
        <Image
                  src="/home/irac_plastic.webp"
                  alt="Diffused Greenhouse Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-orange-500 text-black px-3 py-2 rounded-md">DIFFUSED (White) GREENHOUSE PLASTIC</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">Starting at $8.47</p>
                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    55% light diffusion for balanced coverage
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    6 mil thickness resists wear and tear
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Reflects heat to prevent overheating
          </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom cut for a perfect greenhouse fit
          </li>
                 
                </ul>
                <Link 
                  href="/products/diffused-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Duplicate IRAC Greenhouse Plastic */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="relative w-full h-[400px] rounded-t-2xl">
                <Image
                  src="/home/poly_plastic_3-yrs.webp"
                  alt="HOOP HOUSE / POLY PLASTIC"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-green-500 text-black px-3 py-2 rounded-md">HOOP HOUSE / POLY PLASTIC</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">Starting at $8.13</p>
                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Infared additives keep head inside longer
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    65-70% diffusion ensures even lighting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    6 mil thick for durability in all seasons
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Designed for FL & CA growing conditions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                     Warranty valid only in FL & CA
                  </li>
                </ul>
                <Link 
                  href="/products/irac-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Duplicate Clear Greenhouse Plastic */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="relative w-full h-[400px] rounded-t-2xl">
                <Image
                  src="/home/deprivation_plastic_3-yrs.webp"
                  alt="Light Deprivation Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-black text-white px-3 py-2 rounded-md">LIGHT DEPRIVATION PLASTIC</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">Starting at $9.96</p>
                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    100% blackout for total light control
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Reversible black and white for flexible use
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    UV-resistant for long-term greenhouse protection
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    6 mil thickness prevents tearing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom cut for different greenhouse sizes
                  </li>
                </ul>
                <Link 
                  href="/products/clear-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Duplicate Diffused Greenhouse Plastic */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="relative w-full h-[400px] rounded-t-2xl">
            <Image
                  src="/home/plastic_1-2-yrs.webp"
                  alt="Over Winter Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-blue-500 text-black px-3 py-2 rounded-md">OVER WINTER PLASTIC</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">Starting at $5.44</p>
                <ul className="space-y-1 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Designed for seasonal crop protection
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Tough material resists tearing and stretching
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Holds in warmth and reduces energy loss
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    5 mil thickness for lightweight yet strong coverage
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Available in clear or 55% diffusion options
                  </li>
                  
                </ul>
                <Link 
                  href="/products/diffused-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">How It Works</h2>
          
          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <video 
              className="w-full rounded-lg shadow-lg"
              autoPlay 
              loop 
              muted
              playsInline
            >
              <source src="/home/CTL.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">How Our Greenhouse Film Protects & Improves Plant Growth</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A strong greenhouse film creates a stable environment for crops. It shields against harsh weather, retains heat, and allows the right amount of light for healthy growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/home/harsh_weather.webp"
                  alt="Strong Protection Against Harsh Weather"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Strong Protection Against Harsh Weather</h3>
              <p className="text-gray-600">
                Plants need reliable protection from wind, rain, and temperature changes. Our heavy duty greenhouse covers prevent damage by maintaining a stable climate inside. This ensures steady growth and reduces the risk of plant stress due to sudden weather shifts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/home/better_light.webp"
                  alt="Better Light Control for Healthier Crops"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Better Light Control for Healthier Crops</h3>
              <p className="text-gray-600">
                Too much direct sunlight can harm plants. Our clear plastic sheeting diffuses light evenly, reducing hotspots and preventing sun damage. The right balance of light exposure helps crops grow strong while keeping leaves from burning in high heat.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/home/hoop_house.webp"
                  alt="Ideal for Hoop House and Large Greenhouses"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Ideal for Hoop House and Large Greenhouses</h3>
              <p className="text-gray-600">
                Our hoop house greenhouse pro film fits different greenhouse structures. Whether for small setups or commercial farms, it provides the right insulation and light transmission. It works well for vegetable farms, nurseries, and seasonal growing.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/home/tear_resistant.webp"
                  alt="Long-Lasting and Tear-Resistant Material"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Long-Lasting and Tear-Resistant Material</h3>
              <p className="text-gray-600">
                Durability matters when choosing a greenhouse film. Our 6 mil greenhouse plastic resists tears, strong winds, and frequent use. This ensures plants stay protected throughout the seasons without needing frequent replacements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/home/green_setup.webp"
                  alt="Custom Sizes for Every Greenhouse Setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Custom Sizes for Every Greenhouse Setup</h3>
              <p className="text-gray-600">
                No two greenhouses are the same. Our plastic sheet roll comes in different sizes to match various structures. Whether for small backyard gardens or large-scale farms, custom cuts ensure complete coverage and easy installation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/home/uv_resistant.webp"
                  alt="UV-Resistant and Weatherproof for All Seasons"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">UV-Resistant and Weatherproof for All Seasons</h3>
              <p className="text-gray-600">
                Our UV resistant plastic blocks harmful sun rays. It prevents material breakdown and extends durability. The film allows enough light for plant growth. Strong weatherproofing protects against extreme heat, rain, and wind. Your crops stay safe in every season with our clear plastic sheeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get the Right Greenhouse Film Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Get the Right Greenhouse Film for Healthy Growth</h2>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/home/shade.webp"
                    alt="Know What You Need"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Know What You Need</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Need more light, warmth, or total shade? Pick the right poly sheeting for your setup. Some films keep heat inside. Others block light for better growth.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <Image
                    src="/home/thicker_films.webp"
                    alt="Choose the Right Thickness"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Choose the Right Thickness</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Thicker films hold heat better. Thin ones let in more sunlight. Pick based on your weather. The right choice helps plants grow strong.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <Image
                    src="/home/perfect_fit.webp"
                    alt="Measure for a Perfect Fit"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Measure for a Perfect Fit</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Custom sizes prevent heat loss. A good fit gives full coverage. Proper sizing keeps plants safe. Always measure before buying.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <Image
                    src="/home/truck.webp"
                    alt="Order and Set Up Easily"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Order and Set Up Easily</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our films are simple to install. Unroll and place over the frame. Secure tightly for long use. Get Sun Protection for Plants all year.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mt-20 mb-16 text-green-800">Keep Your Plants Safe with a Strong Greenhouse Film</h2>
          
          <div className="mt-16 text-center max-w-6xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Our poly tunnel plastic balances sunlight while preventing heat loss at night. The tear-resistant material lasts all year and stands strong against rough weather. We offer custom sizes for all greenhouses. Installation is fast and simple. Just unroll, secure, and enjoy year-round protection.
            </p>
            <p className="text-lg text-gray-600 mb-16">
              Don't let bad weather harm your crops. Get a heavy-duty greenhouse cover today. Keep your plants safe in any season. Order now for strong, reliable protection!
            </p>

            {/* Image Gallery Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/1.webp')}
              >
                <Image
                  src="/gallery/1.webp"
                  alt="Greenhouse Film Installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/2.webp')}
              >
                <Image
                  src="/gallery/2.webp"
                  alt="Greenhouse Film in Use"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/3.webp')}
              >
                <Image
                  src="/gallery/3.webp"
                  alt="Greenhouse Film Protection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/4.webp')}
              >
                <Image
                  src="/gallery/4.webp"
                  alt="Greenhouse Film Durability"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/5.webp')}
              >
                <Image
                  src="/gallery/5.webp"
                  alt="Greenhouse Film Quality"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/6.webp')}
              >
                <Image
                  src="/gallery/6.webp"
                  alt="Greenhouse Film Benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/7.webp')}
              >
                <Image
                  src="/gallery/7.webp"
                  alt="Greenhouse Film Application"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage('/gallery/8.webp')}
              >
                <Image
                  src="/gallery/8.webp"
                  alt="Greenhouse Film Results"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                  <Image
                    src={selectedImage}
                    alt="Full size image"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                  <button 
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">What Growers Say About Our Greenhouse Film</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Real experiences from farmers and gardeners who trust our film for strong plant protection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">
                "It's perfect for my backyard greenhouse! It withstands strong winds and keeps my plants warm at night. It's super easy to install and works great!"
              </p>
              <div className="font-bold">Henry W</div>
              <div className="text-gray-500">Customer</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">
                "Best cover I've ever used! It keeps heat inside during winter and prevents overheating in summer. My crops have never grown better!"
              </p>
              <div className="font-bold">Ethan P</div>
              <div className="text-gray-500">Customer</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">
                "Survived harsh summers and freezing winters! The material is tough and has never torn. My plants are thriving, and the price is totally worth it."
              </p>
              <div className="font-bold">Isabella C</div>
              <div className="text-gray-500">Customer</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">
                "Finding the right size was always a problem. The custom sizing made all the difference! Perfect fit, easy to install, and great protection!"
              </p>
              <div className="font-bold">Olivia H</div>
              <div className="text-gray-500">Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Our Recent Blogs & Articles</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Check out expert tips, trends, and insights! Get fresh ideas, behind-the-scenes stories, and inspiration to enhance your greenhouse experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">Greenhouse Efficiency with High-Quality Plastic</h3>
                <p className="text-gray-500 mb-4">Blog</p>
                <p className="text-gray-600">by Green House Film | December 4, 2024</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">The Ultimate Guide to Choosing the Right Plastic</h3>
                <p className="text-gray-500 mb-4">Blog</p>
                <p className="text-gray-600">by Green House Film | December 4, 2024</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">How to Install Greenhouse Plastic Like a Pro</h3>
                <p className="text-gray-500 mb-4">Blog</p>
                <p className="text-gray-600">by Green House Film | December 4, 2024</p>
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="pl-0">
              <div className="relative w-80 h-24 mb-6 -ml-8">
                <Image
                  src="/home/green-logo.webp"
                  alt="Greenhouse Film Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <h3 className="text-sm font-medium mb-6 text-gray-400">WHERE GREEN MEETS VISION</h3>
              <div className="flex space-x-4 mb-6">
                <a href="https://facebook.com" className="hover:text-green-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="hover:text-green-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">A subsidiary entirely owned by Ferrari Metals, Inc.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/store" className="text-gray-400 hover:text-white transition-colors">Store</a></li>
                <li><a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How it works</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Condition</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">CONTACT</h3>
              <ul className="space-y-3 text-gray-400">
                <li>(818) 893-9097</li>
                <li>(818) 893-9014</li>
                <li>info@greenhousefilm.com</li>
                <li>800 W. 16th Street Long Beach, CA 90813</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">NEWSLETTER</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-green-500"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Copyright © 2025 Green House Film. All Rights Reserved.</p>
            <p className="mt-2">Designed & Developed By Liberty Web Studio</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
