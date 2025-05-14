'use server'

import { INITIAL_PAGE } from "@/lib/definition/products";
import { getProducts } from "../api/products.api";
import ProductsList from "@/components/products/ProductsList";


const ProductsWrapper = async ({ sortBy, order, query }: { sortBy: string, order: string, query: string }) => {


    let productsData;
    let totalElements;


    const data = await getProducts(INITIAL_PAGE, sortBy, order, query);
    productsData = data.products;
    totalElements = data.total;


    return (

        <ProductsList
            initialProducts={productsData}
            totalElements={totalElements}
            sortBy={sortBy}
            order={order}
            query={query}
        />

    )
}

export default ProductsWrapper;