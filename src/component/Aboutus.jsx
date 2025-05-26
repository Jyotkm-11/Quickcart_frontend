import React ,{ useEffect, useState } from 'react'
import Head from './Head'
import { FaTags, FaHandshake, FaTruck, FaUndoAlt, FaSmile, FaClock } from 'react-icons/fa';
import Lastpartbody from './Lastpartbody';
import Footer from './Footer';

const Aboutus = () => {
    

const features = [
  {
    // icon: <FaTags size={40} className="text-green-500" />,
    icon:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-1.png",
    title: 'Best Prices & Offers',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  },
  {
    icon: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-2.png",
    title: 'Wide Assortment',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  },
  {
    icon: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-3.png",
    title: 'Free Delivery',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  },
  {
    icon:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-4.png",
    title: 'Easy Returns',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  },
  {
    icon:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-5.png",
    title: '100% Satisfaction',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  },
  {
    icon: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-6.png",
    title: 'Great Daily Deal',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  }
];


    

  return (
   <>
   <Head/>
   <h3 className='fs-6 text-blue-300 ms-2'>Home <span className='text-green-600'>{">"}</span> About Us</h3> <hr />
   <div className='row  mt-5'>
    <div className='col-1'></div>
    <div className='col-5'>
        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-1.png" alt=""
        style={{height:"600px" , width:"520px" , borderRadius:"14px"}} />
    </div>
    <div className='col-5 mt-4 mr-5'>
        <h1 className='mb-2 text-slate-900 fs-3'>Welcome to Nest</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
        <p>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
        <div className='row mt-3'>
            <div className='col-4'>
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png" alt="" style={{height:"184px" , width:"160px"}} />
            </div>
            <div className='col-4'>
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png" alt=""  style={{height:"184px" , width:"160px"}} />
            </div>
            <div className='col-4'>
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png" alt=""  style={{height:"184px" , width:"160px"}}  />
            </div>
        </div>
    </div>
    <div className='col-1'></div>
   </div>

   {/*2nd part   */}
   <div className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">What We Provide?</h2>
      <div className="w-24 h-1 mx-auto my-4 bg-green-300 rounded"></div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 mt-12">
  {features.map((feature, index) => (
    <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col items-center justify-center space-y-5">
        {/* Icon/Image */}
        {typeof feature.icon === 'string' ? (
          <img src={feature.icon} alt="icon" className="w-16 h-16 object-contain" />
        ) : (
          feature.icon
        )}
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 text-center">{feature.title}</h3>
        {/* Description */}
        <p className="text-gray-500 text-base text-center">{feature.description}</p>
        {/* Read More Link */}
        <a href="#" className="text-green-500 font-semibold text-sm mt-2 hover:underline">Read More</a>
      </div>
    </div>
  ))}
</div>

     
    </div>

    {/* 3rd part */}
    <Lastpartbody/>

<Footer/>
   </>
  )
}

export default Aboutus
