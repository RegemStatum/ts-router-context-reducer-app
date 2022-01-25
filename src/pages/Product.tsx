import React, { FC } from "react";
// react router
import { useParams } from "react-router-dom";

const ProductPage: FC = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product page</h2>
      <p>My product: {productId}</p>
    </div>
  );
};

export default ProductPage;
