'use server'

import ProductCard from "@/components/products/ProductCard";
import ProductsContainer from "@/components/products/ProductsContainer";
import { DUMMY_PRODUCTS_DATA } from "@/lib/dummy/products";
import { getProducts } from "../api/products.api";
import { PRODUCT } from "@/lib/types/products";

const Products = async({ select, sortBy, order, page }: { select: string, sortBy: string, order: string, page: number }) => {

    let productsData;


    const data = await getProducts();
    productsData = data.products;


    return (
        <ProductsContainer>
            {productsData.map((product: PRODUCT) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    thumbnail={product.thumbnail}
                    rating={product.rating}
                    reviews={product.reviews.length}
                />
            ))}
        </ProductsContainer>
    )
}

export default Products;