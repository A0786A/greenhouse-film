'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HowItWorks() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/how it works/tractor-warehouse.webp",
      alt: "Tractor in Warehouse"
    },
    {
      src: "/how it works/tractor.webp",
      alt: "Tractor"
    },
    {
      src: "/how it works/warehouse-greenhouse.webp",
      alt: "Warehouse Greenhouse"
    },
    {
      src: "/how it works/warehouse.webp",
      alt: "Warehouse"
    },
    {
      src: "/home/truck.webp",
      alt: "Delivery Truck"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[600px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/home/greenhouse.webp"
            alt="How It Works"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-black/50" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">How It Works</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-green-800">Enhancing Your Greenhouse Experience</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              At Greenhouse Film, we're committed to making greenhouse solutions easy and effective. Here's how we do it:
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Tailored Recommendations</h3>
                  <p className="text-gray-600">
                    We start by thoroughly understanding your greenhouse requirements, from climate conditions to plant varieties, ensuring our products align perfectly with your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Superior Quality Plastics</h3>
                  <p className="text-gray-600">
                    Every product is selected for exceptional durability, light diffusion, and weather resistance, helping your plants thrive in optimal conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Reliable and Fast Shipping</h3>
                  <p className="text-gray-600">
                    With secure and timely delivery, we ensure your chosen materials reach you without hassle, so you can focus on your greenhouse project.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Beyond your purchase, our experts remain available to provide advice, troubleshoot issues, and maximize the efficiency of your greenhouse films.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Image */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-xl overflow-hidden shadow-xl mb-24">
            <Image
              src="/how it works/greenhouse-layout.webp"
              alt="Greenhouse Layout"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Order with Ease. Cut with Precision. Ship with Speed.</h2>
            
            {/* Image Gallery */}
            <div className="w-full bg-gray-100 p-8 rounded-xl">
              <div className="grid grid-cols-5 gap-6">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative w-full h-48 bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-800">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Choose the perfect greenhouse film for your needs and start protecting your plants today.
            </p>
            <Link
              href="/store"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Our Products
            </Link>
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ×
          </button>
          <button
            onClick={showPreviousImage}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={showNextImage}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ›
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
} 