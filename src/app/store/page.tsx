'use client';

import Image from "next/image";
import Link from 'next/link';
import StoreIntroSection from '@/components/StoreIntroSection';

export default function StorePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[600px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/home/greenhouse.webp"
            alt="Greenhouse Film Store"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-black/50" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Products</h1>
        </div>
      </section>

      <StoreIntroSection />

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
                  href="/products/irac-greenhouse-plastic-cover"
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
                  alt="Clear Greenhouse Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 bg-blue-500 text-black px-3 py-2 rounded-md">CLEAR GREENHOUSE PLASTIC</h3>
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
                  href="/products/diffused-white-greenhouse-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Hoop House Plastic */}
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
                  href="/products/hoop-house-poly-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Light Deprivation Plastic */}
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
                  href="/products/light-deprivation-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Over Winter Plastic */}
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
                  href="/products/over-winter-plastic"
                  className="inline-block w-32 bg-green-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-green-700 transition-colors text-xs font-medium"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Greenhouse Plastic Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Why Choose Our Greenhouse Plastic?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <p className="text-gray-700">6 mil greenhouse plastic offers strength and longevity.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <p className="text-gray-700">Reinforced greenhouse plastic resists tearing and extreme conditions.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <p className="text-gray-700">Plastic UV protection shields plants from harmful rays.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden md:col-span-1 lg:col-span-1">
              <p className="text-gray-700">Transparent plastic for greenhouse maintains optimal light levels.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden md:col-span-1 lg:col-span-1">
              <p className="text-gray-700">Polyethylene plastic for greenhouse is flexible, tough, and built for long-term use.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
          </ul>
        </div>
      </section>

      {/* Wide-Ranging Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Wide-Ranging Benefits of Plastic for Greenhouses</h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Greenhouse film provides insulation, controls humidity, and protects plants from extreme weather. Plus, the benefits of plastic go beyond protection; they are rigid, flexible, and budget-friendly, making it the go-to choice for year-round farming. More growth, less stress—now that's a win!
          </p>

          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">HORTICULTURAL FILM</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Light Transmission */}
            <div className="bg-gray-50 p-8 rounded-xl group">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/store/balanced-light.webp"
                  alt="Light Transmission"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Balanced Light Transmission for Healthy Growth</h3>
              <p className="text-gray-600 mb-4">
                Good light is key to plant growth. Our greenhouse poly plastic allows just the right amount of sunlight while blocking excessive heat. With proper light diffusion, plants get even coverage, reducing shadows and overheating.
              </p>
            </div>

            {/* Temperature Control */}
            <div className="bg-gray-50 p-8 rounded-xl group">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/store/stable-temperatures.webp"
                  alt="Temperature Control"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Stable Temperatures with Thermal Control</h3>
              <p className="text-gray-600 mb-4">
                A well-insulated greenhouse keeps plants thriving. Our heavy duty plastic greenhouse traps warmth at night and prevents overheating during the day. This reduces stress on crops and ensures better growth.
              </p>
            </div>

            {/* Light Diffusion */}
            <div className="bg-gray-50 p-8 rounded-xl group">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/store/temperature-control.webp"
                  alt="Light Diffusion"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Light Diffusion for Optimal Growth</h3>
              <p className="text-gray-600">
                Most Thermal Films provide diffused light. Light diffusion increases photosynthetic efficiency by providing more homogeneous light from all directions. A diffused film reduces shadows, helps minimize burning and ensures better distribution of light. It has also been known to help average leaf temperatures. We offer a variety of diffused films with light diffusion rates of 30%-70%.
              </p>
            </div>

            {/* Condensation Control */}
            <div className="bg-gray-50 p-8 rounded-xl group">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/store/condensation-control.webp"
                  alt="Condensation Control"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Condensation Control for Clearer Light</h3>
              <p className="text-gray-600">
                Too much moisture inside a greenhouse can lead to mold and diseases. Our film prevents water droplets from forming, helping plants stay dry and healthy. A clear cover means more sunlight reaches your crops.
              </p>
            </div>

            {/* UV Protection */}
            <div className="bg-gray-50 p-8 rounded-xl group">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/store/uv-protection.webp"
                  alt="UV Protection"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Anti-Virus/UV Blocking</h3>
              <p className="text-gray-600">
                These films block UV radiation; this significantly reduces pest activity and damage caused by insects.
              </p>
            </div>

            {/* Pest Protection */}
            <div className="bg-gray-50 p-8 rounded-xl group">
              <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/store/dust-protection.webp"
                  alt="Pest Protection"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Pest & Dust Protection for Better Yields</h3>
              <p className="text-gray-600">
                Our plastic UV protection not only shields plants but also reduces pests and insects. Dust-resistant materials keep the cover clear, allowing maximum light in. This means healthier plants with less maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800">Buy the Right Greenhouse Cover Today</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Every farm has different needs. We offer types of plastic that cater to all growing conditions, from 6 mil greenhouse plastic for durability to white greenhouse plastic for controlled lighting. Invest in high-quality materials to protect your crops and improve your harvest.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Contact Us
          </Link>
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