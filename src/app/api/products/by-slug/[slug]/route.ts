import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_URL || '',
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY || '',
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET || '',
    version: 'wc/v3'
});

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params;
        console.log('API Request Details:', {
            slug,
            url: request.url,
            method: request.method,
            headers: Object.fromEntries(request.headers.entries())
        });
        
        console.log('API Configuration:', {
            url: process.env.NEXT_PUBLIC_WORDPRESS_URL ? 'Set' : 'Not set',
            consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY ? 'Set' : 'Not set',
            consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET ? 'Set' : 'Not set',
            version: 'wc/v3'
        });

        // Search for the product by slug
        console.log('Making API request to WooCommerce with params:', {
            slug,
            per_page: 1,
            status: 'publish'
        });
        
        const response = await api.get('products', {
            slug: slug,
            per_page: 1,
            status: 'publish'
        });
        
        console.log('WooCommerce API Response:', {
            status: response.status,
            dataLength: response.data?.length || 0,
            hasData: !!response.data,
            data: response.data
        });

        if (!response.data || response.data.length === 0) {
            console.log('No product found with slug:', slug);
            return NextResponse.json({
                success: false,
                message: 'Product not found',
                details: {
                    slug,
                    searchParams: { slug, per_page: 1, status: 'publish' }
                }
            }, { status: 404 });
        }

        const product = response.data[0];
        console.log('Product found:', {
            id: product.id,
            name: product.name,
            slug: product.slug,
            status: product.status
        });

        return NextResponse.json({
            success: true,
            productId: product.id,
            slug: product.slug
        });

    } catch (error: any) {
        console.error('Error details:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
            stack: error.stack,
            slug: params.slug
        });
        
        return NextResponse.json({
            success: false,
            message: error.message || 'Failed to fetch product',
            details: error.response?.data || 'No additional details available'
        }, { status: error.response?.status || 500 });
    }
} 