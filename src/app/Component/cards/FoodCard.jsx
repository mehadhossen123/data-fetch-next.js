import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";
import Image from "next/image";

const FoodCard = ({ food }) => {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-36 object-cover"
      /> */}
      <Image
        src={food.foodImg}
        alt={food.title}
        className="w-full h-36 object-cover"
        width={400}
        height={200}
      ></Image>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{food.title}</h2>
        <p className="text-sm text-gray-500">{food.category}</p>
        <p className="mt-2 text-xl font-bold text-green-600">৳ {food.price}</p>

        <div className="mt-4 flex gap-2">
          <CartButton food={food}></CartButton>
          <Link
            href={`/foods/${food.id}`}
            className="flex-1 bg-gray-200 text-center text-gray-800 py-1 px-3 rounded hover:bg-gray-300 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
