import React from 'react';
import { Project } from '@/config/woocommerce';
import Link from 'next/link';

interface ProductCardProps {
    product: Project;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative aspect-w-16 aspect-h-9">
                {product.images && product.images.length > 0 ? (
                    <img
                        src={product.images[0].src}
                        alt={product.images[0].alt || product.name}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.categories.map((category) => (
                        <span
                            key={category.id}
                            className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                            {category.name}
                        </span>
                    ))}
                </div>
                <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <Link
                    href={`/products/${product.slug}`}
                    className="inline-block w-full text-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard; 