'use server';

import { Suspense } from "react";
import Products from "./Products";


const ProductsPage = () => {

  return (
    <div>
      <h1>Products</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>

    </div>
  );
};

export default ProductsPage;
