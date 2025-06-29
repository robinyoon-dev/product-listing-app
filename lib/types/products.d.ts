export type ViewMode = 'list' | 'grid';

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

type Dimensions = {
    width: number;
    height: number;
    depth: number;
};

type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};

export type PRODUCT = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
};
