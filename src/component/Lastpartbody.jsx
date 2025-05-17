import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

const Lastpartbody = () => {
    const {products } = useContext(AppContext);
    const categories = ["Top Selling", "Trending Products", "Recently added", "Top Rated"];
  return (
    <>
    <div>
       <div className='row ms-5 mt-5 text-success'>
        <div className='col-3'><h1 className='fs-3'>Top Selling</h1></div>
        <div className='col-3'><h1 className='fs-3'>Trending Products</h1></div>
        <div className='col-3'><h1 className='fs-3 ms-3'>Recently added</h1></div>
        <div className='col-3'><h1 className='fs-3 ms-4'>Top Rated</h1></div>
       </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
  {products?.slice(0, 12).map((i) => (
    <div
      key={i.id}
      style={{height:"120px" , width:"350px"}}
      className="bg-white  overflow-hidden p-2  text-center mr-5"
    >
      <div className="flex items-center gap-4">
        <img
          src={i.imgsrc}
          alt={i.description}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex flex-col justify-between">
          <h4 className="text-sm text-gray-700 font-semibold mb-1 line-clamp-2">
            {i.description}
          </h4>
          <h5 className="text-green-600 font-bold text-md">Rs {i.price}</h5>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>

    {/*2nd part  */}

    <div className="bg-sky-100 p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between">
  {/* Left Section - Text and Subscription */}
  <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-snug">
      Stay home & get your daily <br /> needs from our shop
    </h1>
    <p className="text-lg text-gray-600">
      Start Your Daily Shopping with <span className="text-success font-semibold">Quick Cart</span>
    </p>
    <div className="flex justify-center lg:justify-center">
      <input
        type="email"
        placeholder="Your email address"
        className="px-4 py-2 rounded-l-full border border-gray-300 w-64 focus:outline-none"
      />
      <button className="bg-success text-white px-6 py-2 rounded-r-full hover:bg-success transition">
        Subscribe
      </button>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="lg:w-1/2 mt-10 lg:mt-0">
    <img
      src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/banner-9-min.png" // Replace with delivery guy image
      alt="Delivery Guy"
      className="w-90 h-90 "
    />
   
  </div>
</div>

{/* 3rd  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
  {/* Item 1 */}
  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-1.png" alt="Best prices" className="w-10 h-10 mr-4" />
    <div>
      <h4 className="font-semibold text-gray-800">Best prices & offers</h4>
      <p className="text-sm text-gray-500">Orders $50 or more</p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-2.png" alt="Free delivery" className="w-10 h-10 mr-4" />
    <div>
      <h4 className="font-semibold text-gray-800">Free delivery</h4>
      <p className="text-sm text-gray-500">24/7 amazing services</p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-3.png" alt="Great deal" className="w-10 h-10 mr-4" />
    <div>
      <h4 className="font-semibold text-gray-800">Great daily deal</h4>
      <p className="text-sm text-gray-500">When you sign up</p>
    </div>
  </div>

  {/* Item 4 */}
  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-4.png" alt="Assortment" className="w-10 h-10 mr-4" />
    <div>
      <h4 className="font-semibold text-gray-800">Wide assortment</h4>
      <p className="text-sm text-gray-500">Mega Discounts</p>
    </div>
  </div>

  {/* Item 5 */}
  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-5.png" alt="Easy returns" className="w-10 h-10 mr-4" />
    <div>
      <h4 className="font-semibold text-gray-800">Easy returns</h4>
      <p className="text-sm text-gray-500">Within 30 days</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Lastpartbody