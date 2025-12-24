
"use client"
import { cartContext } from '@/context/CartProvider';
import React, { useContext, useState } from 'react';

const CartButton = ({food}) => {
    const [inCart,setInCart]=useState(false)
    const {addToCart}=useContext(cartContext)
    const handleCartButton=()=>{
        addToCart(food)
        setInCart(true)

    }
    return (
      <button
      disabled={inCart}
        onClick={handleCartButton}
        className="flex-1  disabled:text-gray-400  bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors"
      >
        {inCart ? "Added" : " Add to Cart"}
      </button>
    );
};

export default CartButton;