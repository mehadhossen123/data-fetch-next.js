
'use client'
import { cartContext } from '@/context/CartProvider';
import React, {  useContext } from 'react';
import ShowAddCart from './ShowAddCart';

const CartItems = () => {
    const {cart}=useContext(cartContext)
    return (
      <div>
        <h2 className='text-2xl'>
          {" "}
          <span className="text-yellow-600 "> {cart.length}</span> Items added
        </h2>
        <ShowAddCart></ShowAddCart>
      </div>
    );
};

export default CartItems;