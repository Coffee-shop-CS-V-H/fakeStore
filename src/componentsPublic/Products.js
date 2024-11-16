import React from "react";
import { ApiContext } from "../contexts/ApiContext";
import PCard from "./PCard";
import { useContext } from "react";

function Products() {
  const { tList } = useContext(ApiContext);
  return (
    <div className="row">
      {tList.map((product) => {
        return <PCard product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Products;
