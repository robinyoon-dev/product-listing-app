'use server';

import { Suspense } from "react";
import Products from "./Products";


const ProductsPage = ({ searchParams }: {
  searchParams?: {
    page?: string,
    sortBy?: string,
    order?: string,
    select?: string,
  }
}) => {

  const page = Number(searchParams?.page) || 1;
  const sortBy = searchParams?.sortBy || '';
  const order = searchParams?.order || 'desc'; // desc, asc
  const select = searchParams?.select || '';

  return (
    <div>
      <h1>Products</h1>

      <Suspense key={select+ page} fallback={<div>Loading...</div>}>
        <Products select={select} sortBy={sortBy} order={order} page={page} />
      </Suspense>

    </div>
  );
};

export default ProductsPage;
