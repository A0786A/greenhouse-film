import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// Log the environment variables (without sensitive data)
console.log('WordPress URL configured:', !!process.env.NEXT_PUBLIC_WORDPRESS_URL);
console.log('Consumer Key configured:', !!process.env.WOOCOMMERCE_CONSUMER_KEY);
console.log('Consumer Secret configured:', !!process.env.WOOCOMMERCE_CONSUMER_SECRET);

if (!process.env.NEXT_PUBLIC_WORDPRESS_URL) {
    console.error('NEXT_PUBLIC_WORDPRESS_URL is not configured');
}

if (!process.env.WOOCOMMERCE_CONSUMER_KEY) {
    console.error('WOOCOMMERCE_CONSUMER_KEY is not configured');
}

if (!process.env.WOOCOMMERCE_CONSUMER_SECRET) {
    console.error('WOOCOMMERCE_CONSUMER_SECRET is not configured');
}

// Initialize WooCommerce API
export const wooCommerceApi = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_URL || '', // Your WordPress site URL
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY || '', // Your consumer key
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET || '', // Your consumer secret
    version: 'wc/v3' // WooCommerce API version
});

// Types for project data
export interface Project {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: string;
    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string | null;
    date_on_sale_to: string | null;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number | null;
    stock_status: string;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    sold_individually: boolean;
    weight: string;
    dimensions: {
        length: string;
        width: string;
        height: string;
    };
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: number;
    images: {
        id: number;
        src: string;
        alt: string;
    }[];
    categories: {
        id: number;
        name: string;
        slug: string;
    }[];
    tags: any[];
    attributes: {
        id: number;
        name: string;
        options: string[];
    }[];
    default_attributes: any[];
    variations: number[];
    grouped_products: number[];
    menu_order: number;
    meta_data: {
        key: string;
        value: string;
    }[];
    costPerSqft: number;
    minWidth: number;
    maxWidth: number;
    widthIncrement: number;
    minLength: number;
    maxLength: number;
    lengthIncrement: number;
    weightPerSqft: number;
} 