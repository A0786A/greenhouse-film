import { wooCommerceApi, Project } from '../config/woocommerce';

interface WooCommerceError {
    response?: {
        data: any;
        status: number;
    };
}

export async function getProducts(page: number = 1, perPage: number = 10, categoryId?: number): Promise<Project[]> {
    try {
        console.log('Fetching products with params:', { page, perPage, categoryId });
        const params: any = {
            per_page: perPage,
            page: page,
            status: 'publish'
        };

        if (categoryId) {
            params.category = categoryId;
        }

        console.log('Making API request with params:', params);
        
        const response = await wooCommerceApi.get('products', params);
        console.log('WooCommerce API response:', response);
        
        if (!response.data) {
            console.error('No data in response:', response);
            return [];
        }

        return response.data;
    } catch (error: unknown) {
        console.error('Detailed error in getProducts:', error);
        const wooError = error as WooCommerceError;
        if (wooError.response) {
            console.error('Error response:', wooError.response.data);
            console.error('Error status:', wooError.response.status);
        }
        return [];
    }
}

export async function getProductById(id: number): Promise<Project | null> {
    try {
        console.log('Fetching product by ID:', id);
        const response = await wooCommerceApi.get(`products/${id}`);
        console.log('Product response:', response);
        return response.data;
    } catch (error: unknown) {
        console.error(`Error fetching product ${id}:`, error);
        const wooError = error as WooCommerceError;
        if (wooError.response) {
            console.error('Error response:', wooError.response.data);
            console.error('Error status:', wooError.response.status);
        }
        return null;
    }
}

export async function getProductCategories(): Promise<Array<{ id: number; name: string }>> {
    try {
        console.log('Fetching product categories');
        const response = await wooCommerceApi.get('products/categories', {
            per_page: 100,
            hide_empty: true
        });
        console.log('Categories response:', response);
        
        if (!response.data) {
            console.error('No data in categories response:', response);
            return [];
        }

        return response.data;
    } catch (error: unknown) {
        console.error('Error fetching product categories:', error);
        const wooError = error as WooCommerceError;
        if (wooError.response) {
            console.error('Error response:', wooError.response.data);
            console.error('Error status:', wooError.response.status);
        }
        return [];
    }
}

export async function addToCart(productId: number, quantity: number = 1): Promise<boolean> {
    try {
        console.log(`Adding product ${productId} to cart, quantity: ${quantity}`);
        // TODO: Implement cart functionality
        return true;
    } catch (error: unknown) {
        console.error('Error adding product to cart:', error);
        return false;
    }
} 