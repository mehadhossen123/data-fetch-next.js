import { cartContext } from '@/context/CartProvider';
import React, { useContext } from 'react';

const ShowAddCart = () => {
    const {cart}=useContext(cartContext)
   
    return (
      <div>
        {cart.map((item, i) => (
          <div className=" flex bg-white shadow-2xl mb-5 py-3 rounded-2xl items-center" key={i}>
            <img src={item.foodImg} alt="" className='w-24' />
            <h3 className='text-black'>{item.title}</h3>
          </div>
        ))}
      </div>
    );
};

export default ShowAddCart;