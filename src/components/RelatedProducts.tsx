'use client';

import Image from 'next/image';
import Link from 'next/link';

const relatedProducts = [
  {
    id: 'diffused-white',
    name: '6 Mil DIFFUSED (White) GREENHOUSE PLASTIC 55% LIGHT DIFFUSION AND REFLECTED HEAT',
    image: '/home/irac_plastic.webp',
    category: 'GREENHOUSE PLASTIC / COVER'
  },
  {
    id: 'clear-plastic',
    name: '6 Mil CLEAR GREENHOUSE PLASTIC LIGHT DIFFUSION (25%) & HIGH LIGHT TRANSMITTANCE',
    image: '/home/irac_plastic.webp',
    category: 'GREENHOUSE PLASTIC / COVER'
  },
  {
    id: 'over-winter',
    name: '5 Mil OVER WINTER PLASTIC BETTER TEAR STRENGTH AND 55% LIGHT DIFFUSION',
    image: '/home/irac_plastic.webp',
    category: 'GREENHOUSE PLASTIC / COVER'
  },
  {
    id: 'light-deprivation',
    name: 'LIGHT DEPRIVATION PLASTIC 100% BLOCK SUNLIGHT PROTECTION 6 Mil',
    image: '/home/irac_plastic.webp',
    category: 'GREENHOUSE PLASTIC / COVER'
  }
];

export default function RelatedProducts() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <div className="aspect-w-3 aspect-h-2 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Select Options
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 