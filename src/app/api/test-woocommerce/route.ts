import { NextResponse } from 'next/server';
import { wooCommerceApi } from '@/config/woocommerce';

export async function GET() {
    try {
        // Try to fetch a single product to test the connection
        const response = await wooCommerceApi.get('products', {
            per_page: 1,
            status: 'publish'
        });

        return NextResponse.json({
            success: true,
            message: 'WooCommerce connection successful',
            data: {
                hasProducts: response.data.length > 0,
                productCount: response.data.length,
                apiVersion: 'wc/v3'
            }
        });
    } catch (error: any) {
        console.error('WooCommerce test failed:', error);
        
        return NextResponse.json({
            success: false,
            message: 'WooCommerce connection failed',
            error: {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data
            }
        }, { status: 500 });
    }
} 