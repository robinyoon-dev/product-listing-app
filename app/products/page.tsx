'use server';

import { Suspense } from "react";
import Products from "./Products";
import { SearchForm } from "@/components/products/SearchForm";

const ProductsPage = ({ searchParams }: {
  searchParams?: {
    page?: string,
    sortBy?: string,
    order?: string,
    select?: string,
    query?: string,
  }
}) => {

  const page = Number(searchParams?.page) || 1;
  const sortBy = searchParams?.sortBy || '';
  const order = searchParams?.order || 'desc'; // desc, asc
  const select = searchParams?.select || '';
  const query = searchParams?.query || '';

  return (
    <div>
      <h1>Products</h1>

      <SearchForm initialQuery={query} />

      <Suspense key={page} fallback={<div>Loading...</div>}>
        <Products select={select} sortBy={sortBy} order={order} page={page} query={query} />
      </Suspense>

    </div>
  );
};

export default ProductsPage;
