'use client';

import Navbar from '@/components/Navbar';
import WeightCalculator from '@/components/WeightCalculator';
import RelatedProducts from '@/components/RelatedProducts';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function IRACProductPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedWidth, setSelectedWidth] = useState('12\' Wide');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [length, setLength] = useState(100);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart({
      id: 'irac-greenhouse-plastic',
      name: '4 YEARS IRAC GREENHOUSE PLASTIC SHEETING 6 MIL 55% LIGHT DIFFUSION',
      price: price,
      weight: weight,
      image: '/home/irac_plastic.webp',
      width: selectedWidth,
      thickness: '6 Mil',
      quantity: quantity,
      length: length
    });
    
    setTimeout(() => {
      setIsAddingToCart(false);
      router.push('/cart');
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white pt-28">
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/store" className="hover:text-green-600">GREENHOUSE PLASTIC / COVER</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">4 YEARS IRAC GREENHOUSE PLASTIC SHEETING 6 MIL 55% LIGHT DIFFUSION</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Product Grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-12">
            {/* Product Image */}
            <div className="mb-8 lg:mb-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <Image
                  src="/home/irac_plastic.webp"
                  alt="IRAC Greenhouse Plastic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="prose prose-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  4 YEARS IRAC GREENHOUSE PLASTIC SHEETING 6 MIL 55% LIGHT DIFFUSION
                </h1>

                {/* Product Specifications */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Thickness</label>
                      <select 
                        className="w-full border border-gray-300 rounded-md p-2"
                        disabled
                      >
                        <option>6 Mil</option>
                      </select>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Width</label>
                      <select 
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={selectedWidth}
                        onChange={(e) => setSelectedWidth(e.target.value)}
                      >
                        <option>12' Wide</option>
                        <option>24' Wide</option>
                        <option>32' Wide</option>
                        <option>42' Wide</option>
                        <option>48' Wide</option>
                        <option>50' Wide</option>
                      </select>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <WeightCalculator 
                        defaultLength={length}
                        quantity={quantity}
                        width={selectedWidth}
                        onWeightChange={setWeight}
                        onPriceChange={setPrice}
                        onLengthChange={setLength}
                      />
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full border border-gray-300 rounded-md p-2"
                        min="1"
                      />
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">Weight: {weight.toFixed(2)} lbs</p>
                        <p className="text-sm font-bold text-gray-900">Total: ${price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="flex gap-4 mb-8">
                  <button 
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
                  >
                    {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                  </button>
                  <a 
                    href="/specifications/IRAC-GREENHOUSE-PLASTIC-COVER.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors text-center"
                  >
                    Product Specifications
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs - Full Width */}
          <div className="mt-12">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`${
                    activeTab === 'description'
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('additional')}
                  className={`${
                    activeTab === 'additional'
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Additional Information
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`${
                    activeTab === 'reviews'
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Reviews (0)
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {activeTab === 'description' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      IRAC Greenhouse Plastic for Stronger Plant Growth
                    </h2>
                    <p className="text-gray-600">
                      IRAC Greenhouse Plastic protects plants in all seasons. It spreads light evenly for steady growth. Heat stays inside for better temperature control. The cover reduces condensation to prevent mold. The 6 mil plastic option offers great insulation. A four-year lifespan means fewer replacements. Strong material resists wear and tear. Your plants get stable conditions year-round.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Built for Long-Lasting Performance
                    </h2>
                    <p className="text-gray-600">
                      A good greenhouse cover must last through tough weather. Our UV resistant plastic blocks harsh sunlight. It prevents cracking and fading over time. Strong material stands up to wind and rain. Heat stays inside during colder months. Your plants stay safe from sudden temperature drops. Long-lasting durability saves money over time. The cover won't rip under pressure. It holds firm during strong winds. Reliable protection keeps crops growing strong.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Infrared and Anti-Drip Technology
                    </h2>
                    <p className="text-gray-600">
                      Infrared additives hold warmth during cold nights. This keeps plants safe from temperature changes. The anti-drip feature stops water buildup. Less moisture means lower mold risk. Water spots won't block sunlight. Better light exposure leads to steady plant growth. Healthier plants produce better yields. Even light distribution helps all crops. No dark spots mean uniform growth. Plants stay strong in all seasons.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Thick and Strong for Reliable Protection
                    </h2>
                    <p className="text-gray-600">
                      Our film comes in 6 mil plastic. Thick plastic keeps greenhouses warm. It blocks excess moisture and prevents drafts. Strong material resists tearing in storms. A heavy duty plastic greenhouse stays protected year-round. Fewer replacements mean long-term savings. The right thickness supports healthy plants. Sturdy film lasts through extreme weather. No sagging or stretching over time. Your crops stay shielded from harsh elements.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Wide Size Range for Every Greenhouse
                    </h2>
                    <p className="text-gray-600">
                      Choose from widths of 12 to 60 feet. The right size ensures full coverage. Custom lengths help reduce material waste. A snug fit prevents heat loss. Strong seals keep wind from entering. A well-fitted cover boosts insulation. Your greenhouse stays efficient in all seasons. Proper sizing keeps temperatures stable. No loose ends mean better protection. A tight fit extends the cover's lifespan.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Better Light Spread for Healthy Crops
                    </h2>
                    <p className="text-gray-600">
                      Even light exposure helps plants grow strong. The plastic light diffuser sheet prevents shadows. Every plant gets the sunlight it needs. Diffused light reduces plant stress. No hot spots mean no burning. Photosynthesis stays steady for better yields. Healthy crops thrive under balanced lighting. Light reaches all leaves evenly. No dark areas slow plant growth. More exposure leads to stronger stems.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Strong Heat Retention for Stable Temperatures
                    </h2>
                    <p className="text-gray-600">
                      A steady climate keeps plants healthy. Our film holds heat overnight. Infrared additives prevent warmth from escaping. Less heat loss lowers energy costs. Controlled temperatures reduce plant stress. Cold shocks won't harm your crops. A warm greenhouse means steady growth. Stable warmth helps roots develop faster. No sudden chills slow plant growth. The heat stays inside for better efficiency.
                    </p>
                  </div>

                  {/* Product Features */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Product Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• IR = INFRARED, AC = ANTI-DRIP / CONDENSATION</li>
                      <li>• INCLUDES INFRARED & ANTI-DRIP ADDITIVES</li>
                      <li>• 6 MIL THICKNESS</li>
                      <li>• AVAILABLE 12' WIDE TO 60' WIDE</li>
                      <li>• CUT-TO-LENGTH PER CUSTOMER REQUIREMENT</li>
                      <li>• 55% LIGHT DIFFUSION</li>
                      <li>• DESIGN TO HOLD HEAT</li>
                    </ul>
                  </div>

                  {/* Related Products */}
                  <RelatedProducts />
                </div>
              )}

              {activeTab === 'additional' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">SKU</h3>
                    <p className="text-gray-600">N/A</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Category</h3>
                    <p className="text-gray-600">GREENHOUSE PLASTIC / COVER</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Specifications</h3>
                    <div className="mt-4">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Thickness</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 Mil</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Width</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              12' Wide, 24' Wide, 32' Wide, 42' Wide, 48' Wide, 50' Wide
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Length</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              100+ feet
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Related Products */}
                  <RelatedProducts />
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">There are no reviews yet.</p>
                    <p className="text-gray-600">Be the first to review "4 YEARS IRAC GREENHOUSE PLASTIC SHEETING 6 MIL 55% LIGHT DIFFUSION"</p>
                    <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                      Write a Review
                    </button>
                  </div>

                  {/* Related Products */}
                  <RelatedProducts />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 