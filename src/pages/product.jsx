import React from "react";
import ProductHero from "../components/Product/ProductHero";
import ProductDetails from "../components/Product/ProductDetails";
import RelatedProducts from "../components/Product/RelatedProducts";


const Product = () => {
  return (
    <div>
      <ProductHero />
      <ProductDetails />
      <RelatedProducts />
    </div>
  );
};

export default Product;
