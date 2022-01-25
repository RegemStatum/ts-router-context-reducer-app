import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import AppContextValue from "../types/appContextValue";

const ProductsPage: FC = () => {
  const { sellId }: AppContextValue = useAppContext();

  return (
    <div>
      <h2>Products page {sellId}</h2>
    </div>
  );
};

export default ProductsPage;
