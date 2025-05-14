'use server';

import { Suspense } from "react";
import Products from "./Products";
import { SearchForm } from "@/components/products/SearchForm";

const ProductsPage = ({ searchParams }: {
  searchParams?: {
    page?: string,
    sort_by?: string,
    order?: string,
    select?: string,
    query?: string,
  }
}) => {

  const page = Number(searchParams?.page) || 1;
  const sort_by = searchParams?.sort_by || '';
  const order = searchParams?.order || 'desc'; // desc, asc
  const select = searchParams?.select || '';
  const query = searchParams?.query || '';

  return (
    <div className="w-full flex flex-col items-center justify-center px-5">
      <h1>Products</h1>

      <SearchForm initialQuery={query} initialOrder={order}/>

      <Suspense key={page} fallback={<div>Loading...</div>}>
        <Products select={select} sortBy={sort_by} order={order} page={page} query={query} />
      </Suspense>

    </div>
  );
};

export default ProductsPage;
