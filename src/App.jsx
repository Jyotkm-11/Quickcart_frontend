import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './component/Body'
import Head from './component/Head'
import Login from './component/Login'
import Register from './component/Register'
import Body from './component/Body'
import Footer from './component/Footer'
import Userlogin from './component/userLogin'
import Showproduct from './component/Showproduct'
import Productdetail from './component/Productdetail'
import Adminaddproducts from './component/Adminaddproducts'
import { Adminheader } from './component/Adminheader'
import AdminProduct from './component/AdminProduct'
import Adminedit from './component/Adminedit'
import Featuredcat from './component/Featuredcat'
import Profile from './component/Profile'
import {ToastContainer} from 'react-toastify';
import Cart from './component/Cart'
import Adminpanel from './component/Adminpanel'
import Shippingform from './component/Shippingform'
import Adminuser from './component/Adminuser'
import UserHeader from './component/UserHeader'
import AdminLogin from './component/AdminLogin'
 import UserChangepass from './component/UserChangepass'
import PaymentSuccess from './component/PaymentSuccess'
import PaymentFailed from './component/PaymentFailed'
import Aboutus from './component/Aboutus'
import Contactus from './component/Contactus'
import Adminorder from './component/Adminorder'
import Adminenquiry from './component/Adminenquiry'
import Userorder from './component/Userorder'
import Editprofile from './component/Editprofile'
import Admindash from './component/Admindash'
import SearchProduct from './component/SearchProduct'
import BlogPage from './component/BlogPage'
import WriteBlog from './component/WriteBlog'
import Categorylogic from './component/Categorylogic'
import Allproducts from './component/Allproducts'




function App() {

  return (
    <>
    {/* <BrowserRouter> */}
    <ToastContainer/>
    <Routes>
      <Route  path='/' element={<Body/>}/>
      <Route  path='/head' element={<Head/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/show' element={<Showproduct/>}/>
      <Route  path='/product/:id' element={<Productdetail/>}/>

      <Route  path='/register' element={<Register/>}/>

      <Route  path='/adminadd' element={<Adminaddproducts/>}/>
      {/* Home page of admin is Admin Header */}
      <Route  path='/mainadmin' element={<Adminheader/>}/>
      <Route  path='/adminpro' element={<AdminProduct/>}/>
      <Route  path='/editproduct/:id' element={<Adminedit/>}/>
      <Route  path='/profile' element={<Profile/>}/>
      <Route  path='/adminuser' element={<Adminuser/>}/>
      <Route  path='/adminlogin' element={<AdminLogin/>}/>
      <Route  path='/orders' element={<Adminorder/>}/>
      <Route  path='/enquiry' element={<Adminenquiry/>}/>
      <Route  path='/admindash' element={<Admindash/>}/>
      <Route  path='/writeblog' element={<WriteBlog/>}/>
      <Route  path='/category/:cat' element={<Categorylogic/>}/>



      <Route  path='/featured' element={<Featuredcat/>}/>
      <Route  path='/allproducts' element={<Allproducts/>}/>
     
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/ship' element={<Shippingform/>}/>
     
      <Route  path='/userprofile' element={<UserHeader/>}/>
    
      <Route  path='/changepass' element={<UserChangepass/>}/>
      <Route  path='/paymentsuccess' element={<PaymentSuccess/>}/>
      <Route  path='/paymentfail' element={<PaymentFailed/>}/>
      <Route  path='/about' element={<Aboutus/>}/>
      <Route  path='/contact' element={<Contactus/>}/>
     
      <Route  path='/userorder' element={<Userorder/>}/>
      <Route  path='/edituser' element={<Editprofile/>}/>
    
      <Route  path='/blog' element={<BlogPage/>}/>
      
     
      <Route  path='/product/search/:term' element={<SearchProduct/>}/>


      
    </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
