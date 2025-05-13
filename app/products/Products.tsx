'use server'

import ProductCard from "@/components/products/ProductCard";
import ProductsContainer from "@/components/products/ProductsContainer";
import { DUMMY_PRODUCTS_DATA } from "@/lib/dummy/products";

const Products = ({ select, sortBy, order, page }: { select: string, sortBy: string, order: string, page: number }) => {

    let productsData;

    //TODO: Fetch products data 
    productsData = DUMMY_PRODUCTS_DATA;



    return (
        <ProductsContainer>
            {productsData.map((product) => (
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