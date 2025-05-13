'use server'

import ProductCard from "@/components/products/ProductCard";
import ProductsContainer from "@/components/products/ProductsContainer";
import { getProducts } from "../api/products.api";
import { PRODUCT } from "@/lib/types/products";
import PaginationWrapper from "@/components/products/PaginationWrapper";


const Products = async ({ select, sortBy, order, page }: { select: string, sortBy: string, order: string, page: number }) => {

    let productsData;
    let totalElements;

    const data = await getProducts(page);
    productsData = data.products;
    totalElements = data.total;

    return (
        <div className="flex flex-col items-center justify-center">
            <p>Total Products: {data.total}</p>
            <p>skip: {data.skip}</p>
            <p>limit: {data.limit}</p>

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
            <PaginationWrapper totalElements={totalElements} />
        </div>
    )
}

export default Products;