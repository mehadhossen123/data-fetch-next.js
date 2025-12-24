
"use client"
import React, { useState } from 'react';

const CartButton = () => {
    const [inCart,setInCart]=useState(false)
    const handleCartButton=()=>{
        setInCart(true)

    }
    return (
      <button
      disabled={inCart}
        onClick={handleCartButton}
        className="flex-1  disabled:text-gray-400  bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        {inCart ? "Added" : " Add to Cart"}
      </button>
    );
};

export default CartButton;