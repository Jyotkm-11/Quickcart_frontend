import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { useNavigate } from "react-router-dom";
import Head from './Head'


const Cart = () => {
    const {cart,removeFromCart,decreaseQty, addToCart , clearCart , incQty} = useContext(AppContext);
    const categories = [
        { name: "Breakfast", path: "/category/breakfast" },
        { name: "Dairy Free", path: "/category/dairy-free" },
        { name: "Dessert", path: "/category/dessert" },
        { name: "Gluten Free", path: "/category/gluten-free" },
        { name: "Salad", path: "/category/salad" },
        { name: "Uncategorized", path: "/category/uncategorized" },
      ];

 const navigate = useNavigate();
    const [price , setPrice] = useState(0);

    // useEffect(()=>{
     
    //   let price = 0;
    //   if(cart?.items){
    //     for(let i=0 ;i<cart.items?.length ; i++){
         
    //       price += cart.items[i].price;
    //     }
    //   }
    //   setPrice(price);
      
    // },[cart]);

    useEffect(() => {
      let totalPrice = 0;
      if (cart?.items) {
        for (let i = 0; i < cart.items.length; i++) {
          totalPrice += cart.items[i].price * cart.items[i].qty; // ✅ Fix here
        }
      }
      setPrice(totalPrice);
    }, [cart]);
    

  return (
   
 <>
  <Head/>
   <div className='row' style={{backgroundImage:`url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/banner-10-min.png)` , height:"240px", width:"100%"}}>
   <div className='col-md-1'></div>
   <div className='col-md-2 mt-5 '>
         <h1 className=' mt-2' style={{fontSize:"3rem" , color:"#253D4E"}}>Shop Cart</h1>
         <div className="flex items-center gap-2 text-green-600 mb-6 mt-3">
        <span className="flex items-center gap-1">
          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

          Home
        </span>
        <span>›</span>
        <span className='text-gray-600'>Shop Cart</span>
      </div>
   </div>
   <div className='col-md-1'></div>
   <div className='col-md-8 mt-5 '>
   <div className="flex flex-wrap gap-4 mt-5 ml-3 ">
  {categories.map((cat, idx) => (
    <Link
      key={idx}
      to={cat.path}
      className=" no-underline bg-white text-green-600 font-medium px-4 py-2 rounded-full shadow-md hover:bg-green-50 cursor-pointer transition-all">
    
      {cat.name}
    </Link>
  ))}
</div>

   </div>
   
   </div>

{/* 2nd part start */}

<div className="p-6 max-w-6xl mx-auto">
  {/* Table headers */}
  <div className="grid grid-cols-4 bg-gray-100 p-4 rounded-t-lg font-semibold text-center">
    <span>Product</span>
    <span>Price</span>
    <span>Quantity</span>
    <span>Subtotal</span>
  </div>

  {/* Product rows */}
  {cart?.items?.map((i) => (
    <div key={i._id} className="grid grid-cols-4 items-center text-center border-b p-4">
      <div className="flex items-center justify-center gap-4">
        <button className="text-red-500 text-xl" onClick={()=>{
          if (confirm("Are you surely want to remove product")){
            removeFromCart(i?.productId);
          }
        }}>
          Remove{" "}
          ✕ </button>
        <img src={i?.imgsrc || ".."} alt="Product" className="w-12 h-12 rounded-full" />
        <span className="text-green-700 font-medium">{i.title}</span>
      </div>
      {/* <span>Rs {i.price}</span> */}
      {/* original price  */}
      <span>Rs {i.price}</span>

      <div className="flex items-center border border-gray-300 rounded w-24 mx-auto px-2 py-1 justify-between">
  <button
    onClick={()=> decreaseQty(i?.productId , 1)}
    className="text-xl font-bold text-gray-600 hover:text-red-500"
  >
    -
  </button>
  {i?.qty}
  <button
   onClick={()=> addToCart(
    i?.productId,
    i?.title,
    i?.price ,
    1,
    i?.imgsrc
   ) }
    className="text-xl font-bold text-gray-600 hover:text-green-500"
  >
    +
  </button>
</div>

     {/* Subtotal = unit price * quantity */}
     <span>Rs {i.price}</span>
      {/* <span>Rs {i.price}</span> */}
    </div>
  ))}

  {/* Coupon + Buttons */}
  <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
    
    <div className="flex gap-7">
      <button className="bg-green-300 text-white px-4 py-2 rounded font-semibold hover:bg-green-400"
       onClick={() => navigate('/')}
      >
        Update cart
      </button>
      <button 
      onClick={ ()=>{
        if(confirm("Are you sure to clear your cart?")){
          clearCart()
        }
      } }
       className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700">
        Empty Cart
      </button>
    </div>
  </div>

  {/* Cart Totals */}
  <div className="mt-5 max-w-md ml-auto border rounded-lg p-6 shadow">
    <h2 className="text-2xl font-semibold mb-4">Cart totals</h2>
    <div className="grid grid-cols-2 gap-4 border-b pb-2">
      <span className="font-medium">Subtotal</span>
      <span className="text-green-600 font-semibold">
        Rs {price}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4 border-b py-2">
      <span className="font-medium">Shipping</span>
      <div className="text-left space-y-1">
        <p>Flat rate</p>
        <p>Shipping to <span className="font-medium">CA.</span></p>
        <p className="text-green-600 font-semibold flex items-center gap-1 cursor-pointer">
          Change address <span>🚚</span>
        </p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 py-2">
      <span className="font-medium text-lg">Total</span>
      <span className="text-green-600 font-bold text-lg">
       {price}
      </span>
    </div>
    <button className="mt-4 w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
      onClick={() => navigate('/ship')}
     >
      Proceed to checkout
    </button>
  </div>
</div>

{/* 2nd part end */}

 </>
  )
}

export default Cart


