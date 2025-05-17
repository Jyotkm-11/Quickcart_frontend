import React, { useContext, useState } from 'react'

import AppContext from '../Context/AppContext'
import { useNavigate } from "react-router-dom";
const Dealsofday = () => {

  const {cart , products, filtereddata , setFiltereddata} = useContext(AppContext);
  
  const navigate = useNavigate();
 
 
   const filterByCat = (cat) =>{
    setFiltereddata(products.filter((data) => data.category.toLowerCase() === cat.toLowerCase()))
    navigate(`/category/${cat}`);
   }



  return (
    <>
    <div className="p-6">
  <h2 className="text-4xl font-bold mb-6 ms-4 mt-4">Deals Of The Day</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
   {[
  {
    title: "Organic Cage Grade A Large Eggs",
    brand: "Hambger Hel",
    price: "21.00",
    originalPrice: "24.00",
    category: "Eggs",
    imgsrc: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-5-min.png"
  },
  {
    title: "Naturally Flavored Cinnamon Vanilla",
    brand: "Hambger Hel",
    price: "51.00",
    originalPrice: "55.00",
    category: "Beverages",
    imgsrc: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-6-min.png"
  },
  {
    title: "Seeds of Organic Watermelon",
    brand: "Hambger Hel",
    price: "61.50",
    originalPrice: "66.00",
    category: "Fruits",
    imgsrc: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-7-min.png"
  },
  {
    title: "Dried fruit: apricots, figs, prunes",
    brand: "USA Noodle Soup",
    price: "56.00",
    originalPrice: "76.00",
    category: "Dry Fruits",
    imgsrc: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-8-min.png"
  }
].map((item, idx) => (
  <div
    key={idx}
    onClick={() => filterByCat(item.category)}
    className="cursor-pointer bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition"
  >
    <div className="relative w-full rounded-lg overflow-hidden">
      <img
        src={item.imgsrc}
        alt={item.title}
        className="w-full h-56 object-cover"
      />
      <div className="absolute inset-x-0 bottom-16 flex justify-center gap-2">
        {["Days", "Hours", "Mins", "Secs"].map((label, i) => (
          <div
            key={i}
            className="bg-white text-green-600 font-semibold text-sm text-center px-2 py-1 rounded shadow"
          >
            <div className="text-lg leading-none">00</div>
            <div className="text-xs">{label}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-20 w-full text-center">
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-sm text-gray-500">
        By <span className="text-green-600">{item.brand}</span>
      </p>
      <div className="flex justify-between items-center mt-3 px-2">
        <div>
          <span className="text-green-600 font-bold text-lg">₹{item.price}</span>
          <span className="line-through text-gray-400 ml-2 text-sm">
            ₹{item.originalPrice}
          </span>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="bg-green-100 text-green-600 font-semibold px-3 py-1 rounded flex items-center gap-1 hover:bg-green-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13l1.5-3h7l1.5 3"
            />
          </svg>
          Add
        </button>
      </div>
    </div>
  </div>
))}

  </div>
</div>

    </>
  )
}

export default Dealsofday