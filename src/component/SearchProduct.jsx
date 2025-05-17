import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import Head from './Head';
import { Link } from "react-router-dom";

const SearchProduct = () => {
  const{ products, addToCart } = useContext(AppContext);  
    console.log("pro:----",products)
  const [SearchProduct, setSearchProduct] = useState([]);
  const {term } = useParams()
  console.log(term)
  useEffect(() =>{
    setSearchProduct(
      products.filter(
        (data) => data?.title?.toLowerCase().includes(term.toLowerCase())
      )
    )
  }, [term, products])
  console.log("data")
  console.log(SearchProduct)
  if (!SearchProduct) {
    return <div>Loading ..... </div>
  }

  return (
    <>
    <Head/>
    <div>

     <center><h2 style={{marginTop:"10px"}}>Showing Results for "{term.toUpperCase()}" </h2></center> <br />
      <div className="row">
        {SearchProduct.map((product) => (
          <div className="col-md-4" key={product._id}>
          <div
            className="card card-mycolors mb-4"
            style={{ width: "280px", margin: "20px auto" }}
          >
            <figure className="w-full h-36 flex items-center justify-center overflow-hidden">
              <img
                src={product.imgsrc}
                alt={product.title}
                className="object-cover"
                style={{ height: "120px", width: "60%" }}
              />
            </figure>
            <div className="card-body">
              <h5 className="text-gray-600 text-xs">{product.category}</h5>
              <h2 className="card-title text-lg">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              
              {/* Buttons row */}
              <div className="d-flex gap-5 mt-2">
              <Link to={`/product/${product._id}`}> 
                <a
                  href={`/product/${product._id}`}
                  className="btn btn-mycolors btn-sm"
                  style={{
                    backgroundColor: "rgba(25, 135, 84, 0.1)",
                    color: "#198754",
                  }}
                >
                  View Details
                </a>
                </Link>
                <button
                  onClick={() =>
                    addToCart(
                      product._id,
                      product.title,
                      product.price,
                      1,
                      product.imgsrc
                    )
                  }
                  className="btn fw-semibold d-flex align-items-center gap-2 px-3 py-1 rounded btn-sm"
                  style={{
                    backgroundColor: "rgba(25, 135, 84, 0.1)",
                    color: "#198754",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                      1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 
                      0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 
                      7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 
                      10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 
                      .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 
                      0 1 .75 0Z"
                    />
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
    </>
  );
};

export default SearchProduct