import React from 'react';
import FoodCard from '../Component/cards/FoodCard';
import { resolve } from 'styled-jsx/css';

const getFood=async()=>{
    const res=await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data =await res.json();
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return data.foods;
   
}

const FoodPage = async() => {
    const foods=await getFood()

    return (
      <div>
        <h1 className="text-4xl font-bold text-center ">
          Total <span className="text-yellow-500">{foods.length} </span>
           Foods Found
        </h1>
        <div className=' gap-5 my-5 grid lg:grid-cols-3 grid-cols-1'>
            {
                foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)
            }

        </div>
      </div>
    );
};

export default FoodPage;