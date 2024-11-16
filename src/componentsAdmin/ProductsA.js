import React, { useContext } from 'react'
import Product from './Product';
import { ApiContext } from '../contexts/ApiContext';

function ProductsA() {
  const { tList } = useContext(ApiContext);
  console.log("prod" ,{tList})
  return (
    <div className="row">
      {tList.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  )
}

export default ProductsA