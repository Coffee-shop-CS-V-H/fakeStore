import React from 'react'
import Cart from './Cart';
import { useContext } from "react";
import { KosarContext } from '../contexts/KosarContext';

function MyCart() {
    const { kosar} = useContext(KosarContext);

    return (
        <>
             <div className="row">
              {kosar.map((product) => {
                return <Cart product={product} key={product.id}
                
                />;
                
              })}
              
            </div>
        </>
           
        
    );
}

export default MyCart
