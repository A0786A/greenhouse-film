'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Project } from '@/config/woocommerce';
import { getProducts, getProductCategories } from '@/utils/woocommerce';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState<Array<{ id: number; name: string }>>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [initialLoadAttempted, setInitialLoadAttempted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!initialLoadAttempted) {
                console.log('First load attempt...');
                setInitialLoadAttempted(true);
            }

            try {
                setLoading(true);
                console.log('Starting data fetch...');
                
                // Test API connection first
                try {
                    const testResponse = await fetch('/api/test-woocommerce');
                    const testData = await testResponse.json();
                    console.log('API test response:', testData);
                } catch (testError) {
                    console.error('API test failed:', testError);
                }

                const [productsData, categoriesData] = await Promise.all([
                    getProducts(currentPage, 10, selectedCategory || undefined),
                    getProductCategories()
                ]);

                console.log('Fetch completed. Products:', productsData?.length || 0, 'Categories:', categoriesData?.length || 0);
                
                if (!productsData || productsData.length === 0) {
                    console.log('No products returned from API');
                    setError('No products available at the moment. Please check your WooCommerce store configuration.');
                } else {
                    setProducts(productsData);
                    setError(null);
                }
                
                if (!categoriesData || categoriesData.length === 0) {
                    console.log('No categories returned from API');
                } else {
                    setCategories(categoriesData);
                }
            } catch (err) {
                console.error('Detailed fetch error:', err);
                setError('Failed to load products. Please check your WooCommerce connection and try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, selectedCategory, initialLoadAttempted]);

    // Show a more detailed loading state
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
                <p className="text-gray-600">Loading products...</p>
                {!initialLoadAttempted && (
                    <p className="text-sm text-gray-500 mt-2">First time loading, this might take a moment...</p>
                )}
            </div>
        );
    }

    // Show a more detailed error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-red-500">Error Loading Products</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <div className="text-left bg-gray-50 p-4 rounded">
                        <p className="text-sm text-gray-500 mb-2">Troubleshooting steps:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>Check your WooCommerce store is running</li>
                            <li>Verify your API credentials in .env.local</li>
                            <li>Ensure your products are published</li>
                            <li>Check browser console for detailed errors</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // Show a more detailed empty state
    if (products.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">No Products Found</h2>
                    <p className="text-gray-600 mb-4">
                        We couldn't find any products in your WooCommerce store.
                    </p>
                    <div className="text-left bg-gray-50 p-4 rounded">
                        <p className="text-sm text-gray-500 mb-2">Please check:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>Your WooCommerce store has products</li>
                            <li>Products are published and visible</li>
                            <li>Products are assigned to categories</li>
                            <li>Your API credentials have proper permissions</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
            
            {/* Category Filter */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full ${
                            selectedCategory === null
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        All Products
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full ${
                                selectedCategory === category.id
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        {product.images[0] && (
                            <div className="relative aspect-w-16 aspect-h-9">
                                <img
                                    src={product.images[0].src}
                                    alt={product.images[0].alt || product.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <div
                                className="text-gray-600 mb-4 line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                            <div className="flex flex-wrap gap-2">
                                {product.categories.map((category) => (
                                    <span
                                        key={category.id}
                                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                    >
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                            <button
                                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                                onClick={() => {
                                    console.log('Add to cart clicked for product:', product.id);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={products.length < 10}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPage; 