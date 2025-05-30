import { NextResponse } from 'next/server';

export async function GET() {
    // Check if environment variables are loaded
    const envVars = {
        hasWordPressUrl: !!process.env.NEXT_PUBLIC_WORDPRESS_URL,
        hasConsumerKey: !!process.env.WOOCOMMERCE_CONSUMER_KEY,
        hasConsumerSecret: !!process.env.WOOCOMMERCE_CONSUMER_SECRET,
        wordPressUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL ? 'Set (hidden for security)' : 'Not set',
        consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY ? 'Set (hidden for security)' : 'Not set',
        consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET ? 'Set (hidden for security)' : 'Not set'
    };

    return NextResponse.json({
        success: true,
        message: 'Environment variables check',
        data: envVars
    });
} 