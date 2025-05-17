import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';

const DailyBestSells = () => {
    
const [prod , setProd]= useState([]);
const {products, addToCart} = useContext(AppContext);
//Personal Care
// useEffect(() => {
//     if (products && products.length > 0) {
//         const personalCareProducts = products.filter(
//             (product) => product.category?.toLowerCase() === 'personal care'
//         );

//         if (personalCareProducts.length > 0) {
//             console.log("Filtered Personal Care Products:", personalCareProducts);
//             setProd(personalCareProducts);
//         }
//     }
// }, [products]);

//Fresh  fruits
useEffect(() => {
  if (products && products.length > 0) {
      const freshFromNatureProducts = products.filter(
          (product) => product.category?.toLowerCase() === 'fresh from nature'
      );

      if (freshFromNatureProducts.length > 0) {
          console.log("Filtered 'Fresh from Nature' Products:", freshFromNatureProducts);
          setProd(freshFromNatureProducts);
      }
  }
}, [products]);




  return (
    <>
     <div className="d-flex justify-content-between align-items-center mb-3 ms-0 mt-5 me-5">
     <h2 className='ms-3'>Nature's Fresh</h2>
    <div className="d-flex gap-4 fs-5" >
      <a style={{textDecoration:"none" }} className='text-dark' href="#">All</a>
      <a style={{textDecoration:"none" }} className='text-dark' href="#">Deals of the day</a>
      <a style={{textDecoration:"none" }} className='text-dark' href="#">Fresh Fruits</a>
      <a style={{textDecoration:"none" }} className='text-dark' href="#">Milk & Dairies</a>
      <a style={{textDecoration:"none" }} className='text-dark' href="#">Drinks</a>
      <a style={{textDecoration:"none" }} className='text-dark' href="#">Bread & Juice</a>
    </div>
  </div>

    <div className="row">
  {/* Left Image Section */}
  <div className="col-3 ms-3">
  
    <div className="relative " style={{ height: '500px', width: '420px' }}>
      <img
        src="https://c1.wallpaperflare.com/preview/892/699/633/leaf-plant-nature-green-leaves.jpg"
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="fs-2 font-bold mb-5">Bring nature into your home</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </div>
    </div>
  </div>

  {/* Right Product Cards Section */}
  <div className="col-8 d-flex align-items-center">
    <div className="d-flex gap-1 flex-row flex-wrap ">
      {prod?.slice(0,3).map((i) => (
        <div
          key={i._id}
          className="card bg-base-100 shadow-sm  "
          style={{ width: '17rem' , height:"30rem" ,border: '0.2px solid #198754', // green border
            borderRadius: '0.1rem', marginLeft:"3.4rem"}} // fixed width to fit 3 in a row
        >
          <figure className="w-full h-40 flex items-center justify-center overflow-hidden ">
            <img src={i.imgsrc} className="w-28 h-28 object-cover" />
          </figure>
          <div className="card-body">
            <h5 className="text-gray-600 text-xs">{i.category}</h5>
            <h2 className="card-title text-xl">{i.title}</h2>
            <p>{i.description}</p>
            <div className="flex justify-between p-4 bg-gray-100">
              <div>Rs {i.price}</div>
              <div className="card-actions justify-end">
              <button onClick={()=> addToCart(i._id , i.title , i.price , 1 , i.imgsrc) }
  className="btn fw-semibold d-flex align-items-center gap-2 px-3 py-1 rounded"
   style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }} >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
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
</div>

    </>
  )
};

export default DailyBestSells;

{/* <figure className="w-full h-40 flex items-center justify-center overflow-hidden">
          <img src={i.imgsrc} className="w-28 h-28 object-cover" />
        </figure>

        <div className="card-body">
          <h5 className="text-gray-600 text-xs">{i.category}</h5>
          <h2 className="card-title text-xl">{i.title}</h2>
          <p>{i.description}</p>

          <div className="flex justify-between p-4 bg-gray-100">
            <div>{i.price}</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div> */}
