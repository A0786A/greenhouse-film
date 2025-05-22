'use client';

import Image from "next/image";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[600px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/about/planting.webp"
            alt="Greenhouse Planting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">About Green House Film</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl pt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Your Trusted Experts in Greenhouse Film Solutions</h2>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-80">
                <Image
                  src="/about/green-house.webp"
                  alt="Green House"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/home/hoop_house.webp"
                  alt="Hoop House"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/about/green-film.webp"
                  alt="Green Film"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="space-y-8 flex flex-col items-center justify-center h-full">
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/about/durable-plastic.webp"
                    alt="Durable Plastic Solutions"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-800 text-center">Durable Plastic Solutions</h3>
                <p className="text-gray-600 text-sm text-center">Engineered for lasting performance in greenhouse environments.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/about/grow-smarter.webp"
                    alt="Grow Smarter"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-800 text-center">Grow Smarter</h3>
                <p className="text-gray-600 text-sm text-center">Premium plastic solutions for better greenhouse yields.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-green-800 py-20 rounded-xl mb-16 -mx-4 md:-mx-8">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <h3 className="text-5xl md:text-6xl font-bold mb-4 text-white">15+</h3>
                  <p className="text-xl text-white/90">Years Of Experience</p>
                </div>
                <div>
                  <h3 className="text-5xl md:text-6xl font-bold mb-4 text-white">12K+</h3>
                  <p className="text-xl text-white/90">Satisfied Growers</p>
                </div>
                <div>
                  <h3 className="text-5xl md:text-6xl font-bold mb-4 text-white">50K+</h3>
                  <p className="text-xl text-white/90">Greenhouses Covered</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-green-800">Strong, Reliable, and Built to Last</h3>
              <p className="text-lg text-gray-600">
                Our greenhouse films keep plants safe in any weather. Made from strong plastic, they last long and don't tear easily. 
                They block harmful rays but let in sunlight for healthy growth. This helps control temperature and reduces plant stress. 
                Our plastic covers can fit greenhouses of all sizes. From small backyard setups to large farms, they provide insulation and clarity where needed.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-white">
              <Image
                src="/about/light-transmission.webp"
                alt="Light Transmission Technology"
                fill
                className="object-contain rounded-2xl transition-transform duration-500 hover:scale-110 p-4"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-800 p-8 rounded-xl shadow-lg">
                <div className="relative w-16 h-16 mb-6">
                  <Image
                    src="/about/reliability.webp"
                    alt="Reliability Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">Reliable & Long-Lasting</h4>
                <p className="text-white/90">
                  Our greenhouse films are built to withstand tough conditions. With strong durability and UV resistance, 
                  they protect crops and maintain performance in all climates.
                </p>
              </div>
              <div className="bg-green-800 p-8 rounded-xl shadow-lg">
                <div className="relative w-16 h-16 mb-6">
                  <Image
                    src="/about/solutions.webp"
                    alt="Solutions Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">Custom Fit for Every Need</h4>
                <p className="text-white/90">
                  We offer a variety of plastic covers to match different growing conditions. Whether you need high insulation 
                  or maximum light transmission, we have the right solution.
                </p>
              </div>
              <div className="bg-green-800 p-8 rounded-xl shadow-lg">
                <div className="relative w-16 h-16 mb-6">
                  <Image
                    src="/about/customer-support.webp"
                    alt="Customer Support Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">Support at Every Step</h4>
                <p className="text-white/90">
                  Our team is always ready to assist with your greenhouse needs. From expert guidance to quick delivery, 
                  we help you get the best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Who we are</h2>
          <div className="bg-green-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <p className="text-lg text-white/90">
                  We specialize in greenhouse films that protect crops and improve plant growth. Our experience in agricultural plastics 
                  helps farmers grow sustainably in all weather conditions. With years in the industry, we understand all the farming challenges. 
                  Our focus is on high-quality materials that offer durability, flexibility, and the right light balance that plants need. 
                  Every film we produce meets the highest standards for performance and reliability.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/about/green-house.webp"
                  alt="Greenhouse Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="pt-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">What we Do</h2>
          <div className="bg-green-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] order-2 md:order-1">
                <Image
                  src="/about/green-film.webp"
                  alt="Greenhouse Film Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-1 md:order-2">
                <p className="text-lg text-white/90">
                  We design greenhouse films that improve farming efficiency. Made with durable, UV-resistant materials, they create the best 
                  environment for healthy crops. Our plastic covers protect plants, regulate temperature, and reduce stress. With smart engineering 
                  and real-world expertise, we help farmers increase yields. Our goal is to support sustainable agriculture with reliable, 
                  high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-800">Protect Your Crops Today!</h2>
          <Link 
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Let's Connect
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