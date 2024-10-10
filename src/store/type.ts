// makeupApi.ts
export interface Product {
    id: number;
    brand: string;
    name: string;
    price: string; 
    price_sign: string | null;
    currency: string | null;
    image_link: string;
    product_link: string;
    description: string;
    rating: number | null;
    category: string | null;
    product_type: string;
    quantity: number;
    liked?: boolean;
    key?: number;
    description_html?: string;

    website_link: string;
    
}