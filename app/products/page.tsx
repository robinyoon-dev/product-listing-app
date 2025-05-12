import ProductCard from "@/components/products/ProductCard";

const ProductsPage = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductCard id={""} name={""} price={0} description={""} imageUrl={""} />
    </div>
  );
};

export default ProductsPage;
