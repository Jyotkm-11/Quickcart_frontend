import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Showproduct = () => {
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
      <div className="d-flex justify-content-between align-items-center mb-3 ms-0 mt-5 me-5">
        <h3 className="fs-2 ms-3">Popular Products</h3>
        <div className="d-flex gap-4 fs-5">
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Rice & Grains")}>All</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Baking Materials")}>Baking Materials</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Fresh Fruits")}>Fresh Fruits</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Milk & Dairies")}>Milk & Dairies</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Meats")}>Meats</a>
          <a style={{ textDecoration: "none" }} className="text-dark" onClick={() => filterByCat("Vegetables")}>Vegetables</a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {products?.slice(0, 15).map((i) => {
         

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

  {/* Hide description on mobile */}
  <p className="hidden md:block">{i.description}</p>

  <div className="d-flex justify-content-between align-items-center" style={{ width: "250px" }}>
    <span className="fw-bold text-success" style={{ fontSize: "1.1rem" }}>
      ₹{i.price}
    </span>

    <button
      onClick={() => addToCart(i._id, i.title, i.price, 1, i.imgsrc)}
      className="btn fw-semibold d-flex align-items-center gap-2 px-3 py-1 rounded"
      style={{ backgroundColor: "rgba(25, 135, 84, 0.1)", color: "#198754" }}
    >
      {/* SVG */}
      Add
    </button>
  </div>
</div>

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Showproduct;
