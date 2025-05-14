'use client'

import { useEffect, useState } from "react";
import LoadingSpinner from "../common/loading/LoadingSpinner";
import { useInView } from "react-intersection-observer";
import { PRODUCT } from "@/lib/types/products";
import { MemoizedProductCard } from "./ProductCard";
import ProductsContainer from "./ProductsContainer";
import { INITIAL_PAGE } from "@/lib/definition/products";
import { getProducts } from "@/app/api/products.api";

const ProductsList = (
    { initialProducts, totalElements, sortBy, order, query }
        :
        {
            initialProducts: PRODUCT[],
            totalElements: number,
            sortBy: string,
            order: string,
            query: string
        }) => {

    const [products, setProducts] = useState<PRODUCT[]>(initialProducts);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [isLastPage, setIsLastPage] = useState(false);
    const [ref, inView] = useInView();


    const loadMoreProducts = async () => {
        const nextPage = page + 1;
        const data = await getProducts(nextPage, sortBy, order, query);
        const fetchedProducts = data.products;


        if (fetchedProducts?.length > 0) {
            setPage(nextPage);
            setProducts([...products, ...fetchedProducts]);
        } else {
            setIsLastPage(true);
        }
    }


    useEffect(() => {
        if (inView) {
            loadMoreProducts();
        }
    }, [inView]);

    return (
        <div className="flex flex-col items-center justify-center">

            {totalElements === 0 && <p>일치하는 결과가 없습니다.</p>}


            {totalElements > 0 && (
                <ProductsContainer>
                    {products.map((product: PRODUCT) => (
                        <MemoizedProductCard
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

            <div
                className="flex flex-row justify-center items-center w-full h-[100px] p-4"
                ref={ref}
            >
                {isLastPage ? <p>더 이상 불러올 수 없습니다.</p> : <LoadingSpinner text="리스트를 불러오는 중..." />}
            </div>
        </div>
    )
}

export default ProductsList;