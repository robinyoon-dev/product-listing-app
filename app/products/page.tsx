'use server';

import { Suspense } from "react";
import ProductsWrapper from "./ProductsWrapper";
import { SearchForm } from "@/components/products/SearchForm";

const ProductsPage = ({ searchParams }: {
  searchParams?: {
    sort_by?: string,
    order?: string,
    query?: string,
  }
}) => {
  const sort_by = searchParams?.sort_by || '';
  const order = searchParams?.order || 'desc'; // desc, asc
  const query = searchParams?.query || '';


  return (
    <div className="w-full max-w-screen-lg flex flex-col items-center justify-center px-5 gap-4">
      <h1 className="text-2xl font-bold">상품 리스트</h1>

      <SearchForm initialQuery={query} initialOrder={order} />

      <Suspense key={query + sort_by + order} fallback={<div>Loading...</div>}>
        <ProductsWrapper sortBy={sort_by} order={order} query={query} />
      </Suspense>

    </div>
  );
};

export default ProductsPage;
