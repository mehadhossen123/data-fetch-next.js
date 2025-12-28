import React from "react";


const MessageCard = ({ item }) => {


  return (
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
        ID: {item._id}
      </span>

      <p className="mt-2 text-gray-800 text-lg font-medium">{item.message}</p>

      <p className="text-black">{new Date(item.date).toLocaleDateString()} </p>
      <p className="text-black">{new Date(item.date).toLocaleTimeString()}</p>

      <hr className="my-4 border-gray-100" />

      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-95 transition-transform">
          Update
        </button>

        <button className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-rose-500 rounded-lg hover:bg-rose-600 active:scale-95 transition-transform">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
