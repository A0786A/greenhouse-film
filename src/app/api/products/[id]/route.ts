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
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        console.log('Fetching product with ID:', id);

        // Fetch the product by ID
        const response = await api.get(`products/${id}`);
        console.log('WooCommerce API Response:', {
            status: response.status,
            hasData: !!response.data
        });

        if (!response.data) {
            console.log('No product found with ID:', id);
            return NextResponse.json({
                success: false,
                message: 'Product not found'
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            product: response.data
        });

    } catch (error: any) {
        console.error('Error details:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
            stack: error.stack
        });
        
        return NextResponse.json({
            success: false,
            message: error.message || 'Failed to fetch product',
            details: error.response?.data || 'No additional details available'
        }, { status: error.response?.status || 500 });
    }
} 