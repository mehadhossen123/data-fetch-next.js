import React from 'react';
import FoodCard from '../Component/cards/FoodCard';
import { resolve } from 'styled-jsx/css';
import CartItems from '../Component/CartItems';
import Search from '../Component/Search';





const getFood=async(search)=>{
    const res=await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data =await res.json();
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return data.foods;
   
}
export const metadata = {
  title: "All foods ",
  description: "This is the best Fast food  stall",
};

const FoodPage = async({searchParams}) => {
  const {search=''}=await searchParams;
  
 
    const foods=await getFood(search)

    return (
      <div>
        <h1 className="text-4xl font-bold text-center ">
          Total <span className="text-yellow-500">{foods.length} </span>
          Foods Found
        </h1>
        <div>
          <Search></Search>
         
       
      
     
        </div>

        <div className=" flex gap-5">
          <div className=" flex-1 gap-5 my-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food}></FoodCard>
            ))}
          </div>
          <div className="border-2 w-64 p-4 ">
            <h1 className="text-center text-3xl font-bold">Cart Items </h1>

            <hr />
            <CartItems></CartItems>
          </div>
        </div>
      </div>
    );
};

export default FoodPage;