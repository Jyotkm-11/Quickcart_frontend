import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
import Footer from "./Footer";

const Allproducts = () => {
  const navigate = useNavigate();
  const {
    products,
    addToCart,
   filtereddata, setFiltereddata
  } = useContext(AppContext);

  const filterByCat = (cat) => {
    setFiltereddata(products.filter((data) => data.category.toLowerCase() === cat.toLowerCase()));
    navigate(`/category/${cat}`);
  }

  return (
    <>
    <Head/>
      <div >
        <h3 className="fs-2  text-center  fw-bold mt-5 text-success">All Products</h3>
        {/* <div className="d-flex gap-4 fs-5">
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Rice & Grains")}>All</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Baking Materials")}>Baking Materials</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Fresh Fruits")}>Fresh Fruits</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Milk & Dairies")}>Milk & Dairies</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Meats")}>Meats</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Vegetables")}>Vegetables</a>
        </div> */}
      </div>

      <div className="grid grid-cols-5 gap-4 p-4">
        {products?.map((i) => {
         

          return (
            <div key={i._id} className="card bg-base-100 shadow-sm">
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
              <div className="card-body">
                <h5 className="text-gray-600 text-xs">{i.category}</h5>
                <h2 className="card-title text-xl">{i.title}</h2>
                <p>{i.description}</p>

                <div className="d-flex justify-content-between align-items-center" style={{ width: "250px" }}>
                  <span className="fw-bold text-success" style={{ fontSize: "1.1rem" }}>
                    ₹{i.price}
                  </span>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(i._id, i.title, i.price, 1, i.imgsrc)}
                    className="btn fw-semibold d-flex align-items-center gap-2 px-3 py-1 rounded"
                    style={{ backgroundColor: "rgba(25, 135, 84, 0.1)", color: "#198754" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                           1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125
                           0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1
                           5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625
                           10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75
                           0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    Add
                  </button>

                 
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </>
  );
};

export default Allproducts;
