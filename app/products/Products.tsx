'use server'

import ProductCard from "@/components/products/ProductCard";
import ProductsContainer from "@/components/products/ProductsContainer";
import { getProducts, getSearchedProducts } from "../api/products.api";
import { PRODUCT } from "@/lib/types/products";
import PaginationWrapper from "@/components/products/PaginationWrapper";


const Products = async ({ sortBy, order, page, query }: {  sortBy: string, order: string, page: number, query: string }) => {

    let productsData;
    let totalElements;

    if(query !== ''){
        const data = await getSearchedProducts(query, page, sortBy, order);
        productsData = data.products;
        totalElements = data.total;
    }else{
        const data = await getProducts(page,sortBy, order);
        productsData = data.products;
        totalElements = data.total;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <p>Total Products: {totalElements}</p>

            {totalElements === 0 && <p>일치하는 결과가 없습니다.</p>}

            {totalElements > 0 && (
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
            )}
            <PaginationWrapper totalElements={totalElements} />
        </div>
    )
}

export default Products;