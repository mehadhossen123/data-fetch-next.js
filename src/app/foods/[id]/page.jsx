import { redirect } from "next/navigation";
import React from "react";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const {details} = await res.json();
 return{
  title:details.title,
 }
}

const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
  
    return data.details || data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const FoodDetails = async ({ params }) => {

  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food.title) {
    return (
      // <div className="text-center mt-10 min-h-screen flex justify-center items-center">
      //   <p className="text-red-500 font-bold">Food not found</p>
      //   <p className="text-gray-500">ID: {id}</p> 
      // </div>
      redirect('/foods')
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
     
      {food.foodImg ? (
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-64 object-cover rounded shadow-sm"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
          No Image Available
        </div>
      )}

      {/* Title */}
      <h1 className="mt-4 text-2xl font-bold text-gray-800">
        {food.title || "No Title"}
      </h1>

      <div className="mt-2 space-y-1">
        <p className="text-gray-600">
          <span className="font-semibold">Category:</span> {food.category}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Area:</span> {food.area}
        </p>
        <p className="mt-2 text-2xl font-bold text-green-600">৳ {food.price}</p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>

        {food.video && food.video !== "" ? (
          <a
            href={food.video}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors flex items-center"
          >
            Watch Video
          </a>
        ) : (
          <p className="text-sm text-gray-400 self-center italic">
            Video unavailable
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
