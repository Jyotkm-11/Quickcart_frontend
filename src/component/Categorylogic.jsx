import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AppContext from "../Context/AppContext";
import Head from "./Head";
import Footer from "./Footer";

const Categorylogic = () => {
  const { products, filtereddata, setFiltereddata, addToCart } = useContext(AppContext);
  const { cat } = useParams();

  useEffect(() => {
    if (cat && products.length > 0) {
      setFiltereddata(
        products.filter((data) => data.category.toLowerCase() === cat.toLowerCase())
      );
    }
  }, [cat, products, setFiltereddata]);

  return (
    <>
      <Head />
      <h2 className="text-center text-success fw-bold"> {cat.toUpperCase()} </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filtereddata?.length > 0 ? (
          filtereddata.map((i) => (
            <div key={i._id} className="card bg-base-100 shadow-sm p-4 border rounded-lg flex flex-col justify-between">
              {/* Image with link */}
              <Link to={`/product/${i._id}`}>
                <figure className="w-full h-40 flex items-center justify-center overflow-hidden">
                  <img
                    src={i.imgsrc}
                    className="object-cover"
                    style={{ height: "140px", width: "55%" }}
                    alt={i.title}
                  />
                </figure>
              </Link>

              {/* Category & Title */}
              <div className="mt-3">
                <p className="text-xs text-gray-500">{i.category}</p>
                <h2 className="text-base font-semibold mt-1">{i.title}</h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {i.description}
                </p>
              </div>

              {/* Price and Add Button */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-700 font-semibold text-sm">
                  ₹{i.price}
                </span>
                <button
                  className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded hover:bg-green-200"
                  onClick={() =>
                    addToCart(i._id, i.title, i.price, 1, i.imgsrc)
                  }
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600 col-span-full">
            No products found.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Categorylogic;
