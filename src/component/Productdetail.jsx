import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Head from './Head';
import AppContext from "../Context/AppContext";
import Relatedproduct from './Relatedproduct';
import Featuredcat from './Featuredcat';
import Lastpartbody from './Lastpartbody';
import Footer from './Footer';

const ProductDetail = () => {
  const {products} = useContext(AppContext);
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const url = "http://localhost:3000/api";


const [reviewText, setReviewText] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [saveInfo, setSaveInfo] = useState(false);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${url}/product/${id}`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                setProduct(response.data.product);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id, url]); // Ensure dependencies are properly listed

    // const {products,} = useContext(AppContext)

    const categories = [
        { name: "Baking Material", count: 7, icon: "🧁" },
        { name: "Bread and Juice", count: 5, icon: "🥖" },
        { name: "Clothing & Beauty", count: 2, icon: "👗" },
        { name: "Deals Of The Day", count: 4, icon: "🔥" },
        { name: "Fresh Fruit", count: 8, icon: "🍌" },
        { name: "Fresh Seafood", count: 5, icon: "🐟" },
        { name: "Milks and Dairies", count: 3, icon: "🥛" },
        { name: "Vegetables", count: 3, icon: "🥕" },
      ];

      const [rating, setRating] = useState(0);
      const [hover, setHover] = useState(0);
    return (
        <>
           <Head/>
           <hr />
          
           <div className="container my-5 p-4 shadow-lg rounded bg-white" style={{ maxWidth: "1100px" }}>
        <div className="row align-items-start">
          <div className="col-md-5 text-center">
            <img
              src={product?.imgsrc || "placeholder.jpg"}
              alt={product?.title || "Loading..."}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "450px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h1 className="text-success fw-bold">{product?.title || "Loading..."}</h1>
            <h3 className="text-muted mb-3">₹ {product?.price || "Loading..."}</h3>
            <p className="text-secondary">{product?.description || "Loading..."}</p>

            <div className="d-flex align-items-center gap-3 mt-4">
              <button className="btn btn-outline-success px-4">
                {product?.qty || "Qty"}
              </button>
              <button className="btn btn-success px-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className='text-center text-teal-700 fs-2 fw-bold'>Similar Products</h3>
<Relatedproduct category={product?.category} />


<div className="p-4 border rounded-lg mt-3 mx-auto bg-slate-100" style={{ maxWidth: "1350px"  }}>
     
      <h2 className="text-xl font-semibold mb-2">Reviews</h2>
     
      <p className="mb-4 font-medium">Be the first to review <span className="text-green-700"> {product?.title || "Loading.."} </span></p>
      <p className="text-sm text-gray-500 mb-2">Your email address will not be published. Required fields are marked *</p>
      
      {/* Rating */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Your rating *</label>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <span
                key={index}
                className={`cursor-pointer text-2xl ${
                  ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                }`}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            );
          })}
        </div>
      </div>

      {/* Review textarea */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Your review *</label>
       <textarea
  rows="5"
  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
  placeholder="Write your review here..."
  value={reviewText}
  onChange={(e) => setReviewText(e.target.value)}
></textarea>

      </div>

      {/* Name input */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name *</label>
       <input
  type="text"
  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

      </div>

      {/* Email input */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email *</label>
       <input
  type="email"
  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

      </div>

      {/* Checkbox */}
  

      

      {/* Submit button */}
      <button
  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
  onClick={() => {
    // Clear all fields
    setRating(0);
    setHover(0);
    setReviewText('');
    setName('');
    setEmail('');
    setSaveInfo(false);

    // Optional: Add submission logic here (e.g., API call)
  }}
>
  Submit
</button>

    </div>
    <h2 className='text-yellow-500 fs-1 fw-bold text-center mt-4 mb-4'>Explore Our Top One's</h2>
  <Lastpartbody/>
   <Footer/>
        </>
    );
};

export default ProductDetail;
