'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Clear Greenhouse Film",
    description: "Premium clear greenhouse film with UV protection and excellent light transmission.",
    price: 299.99,
    image: "/store/clear-film.webp",
    category: "Films",
    features: [
      "UV Protection",
      "High Light Transmission",
      "Durable Material",
      "Weather Resistant"
    ]
  },
  {
    id: 2,
    name: "Diffused Greenhouse Film",
    description: "Professional-grade diffused film for optimal light distribution and plant growth.",
    price: 349.99,
    image: "/store/diffused-film.webp",
    category: "Films",
    features: [
      "Light Diffusion",
      "Heat Retention",
      "Anti-Condensation",
      "Long Lifespan"
    ]
  },
  {
    id: 3,
    name: "Thermal Greenhouse Film",
    description: "Energy-saving thermal film designed for temperature control and insulation.",
    price: 399.99,
    image: "/store/thermal-film.webp",
    category: "Films",
    features: [
      "Thermal Insulation",
      "Energy Saving",
      "Frost Protection",
      "Durable Coating"
    ]
  },
  {
    id: 4,
    name: "Anti-Drip Film",
    description: "Specialized film that prevents condensation and water droplets.",
    price: 379.99,
    image: "/store/anti-drip-film.webp",
    category: "Films",
    features: [
      "Anti-Drip Coating",
      "Clear Visibility",
      "Disease Prevention",
      "Easy Installation"
    ]
  },
  {
    id: 5,
    name: "Shade Cloth",
    description: "High-quality shade cloth for temperature and light control.",
    price: 249.99,
    image: "/store/shade-cloth.webp",
    category: "Accessories",
    features: [
      "UV Protection",
      "Temperature Control",
      "Durable Material",
      "Easy to Install"
    ]
  }
];

export default function Products() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === Number(productId));
    return total + (product?.price || 0) * quantity;
  }, 0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[400px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/store/store-hero.webp"
            alt="Our Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-black/50" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Our Products</h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Discover our premium selection of greenhouse films and accessories
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <div className="flex items-center gap-2">
                      {cart[product.id] ? (
                        <>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{cart[product.id]}</span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                          >
                            +
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(product.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {Object.keys(cart).length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4">
          <div className="container mx-auto max-w-6xl flex justify-between items-center">
            <div>
              <span className="font-semibold">Items in cart: {Object.values(cart).reduce((a, b) => a + b, 0)}</span>
              <span className="ml-4 font-bold text-green-600">Total: ${cartTotal.toFixed(2)}</span>
            </div>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

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