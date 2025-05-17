import React, { useContext, useState } from 'react'
import logo from './Newlogo.png'
import AppContext from '../Context/AppContext'
import { useNavigate } from "react-router-dom";

const Head = () => {
  const {cart , products, filtereddata , setFiltereddata} = useContext(AppContext);
  const [searchTerm , setSearchTerm] = useState("");
  const navigate = useNavigate();
  const submithandler = (e) =>{
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  }

 
 
   const filterByCat = (cat) =>{
    setFiltereddata(products.filter((data) => data.category.toLowerCase() === cat.toLowerCase()))
    navigate(`/category/${cat}`);
   }

  return (
   
    <>
     
  <nav className="navbar bg-body-primary py-2">
  <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
    {/* Logo */}
    <a className="ms-3">
      <img src={logo} alt="Logo" style={{ height: "60px", width: "80px" }} />
    </a>

    {/* Search Bar */}
    <form
      onSubmit={submithandler}
      className="d-flex flex-grow-1 mx-3 mt-2 mt-lg-0"
      style={{ maxWidth: "600px" }}
      role="search"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="Search for products..."
        aria-label="Search"
        style={{ height: "45px", fontSize: "14px" }}
      />
      <button
        className="btn btn-outline-success fw-bold"
        type="submit"
        style={{ height: "45px" }}
      >
        Search
      </button>
    </form>

    {/* Cart & Account */}
    <div className="d-flex align-items-center gap-3 me-3 mt-2 mt-lg-0">
      {/* Cart */}
      <button
        type="button"
        className="btn position-relative"
        onClick={() => navigate("/cart")}
      >
        <svg
          className="text-success"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.1}
          stroke="currentColor"
          style={{ width: "24px", height: "24px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {cart?.items?.length}
        </span>
      </button>

      {/* Account */}
      <button
        type="button"
        className="btn btn-success"
        onClick={() => navigate("/userprofile")}
      >
        <svg
          className="text-white me-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "30px", height: "30px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      
      </button>
    </div>
  </div>
</nav>



{/* Nav 2 */}

<hr />
<ul className="nav nav-pills nav-justified d-none d-lg-flex ">
  <li className="nav-item">
    
  <a
  className="nav-link active bg-success ms-3 fs-5 d-flex align-items-center justify-content-center text-white rounded"
  aria-current="page"
  onClick={() => navigate('/allproducts')}
  style={{ width: "250px", height: "50px" }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="me-2"
    style={{ width: "24px", height: "24px",marginLeft:"-10px" }}
  >
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
      clipRule="evenodd"
    />
  </svg>
  Browse All Categories
</a>

  </li>

  <li className="nav-item ms-4 ">
   
    <div style={{ display: "flex", alignItems: "center" , gap:"0px" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-success">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
</svg>
  <span>   <a className="nav-link text-dark mr-5"  onClick={()=> filterByCat("Hot Deals")} >Hot Deals</a> </span>

</div>
  </li>

  <li className="nav-item">
    <a className="nav-link text-dark" ></a>
  </li>
  <li className="nav-item">
        <button
          className={`nav-link btn btn-link ${location.pathname === '/' ? 'text-success fw-bold' : 'text-dark'}`}
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </li>

  <li className="nav-item">
        <button
          className={`nav-link btn btn-link ${location.pathname === '/about' ? 'text-success fw-bold' : 'text-dark'}`}
          onClick={() => navigate('/about')}
        >
        About
        </button>
      </li>
 
  <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-dark"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
           
            <li><a className="dropdown-item"  onClick={() => navigate('/allproducts')} >All Products</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Rice & Grains")} >Rice & Grains</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Flours & Grains")}>Flours & Grains</a></li>
        
            <li><a className="dropdown-item"onClick={()=> filterByCat("Cooking Oils")} >Cooking Oils</a></li>
            <li><a className="dropdown-item"onClick={()=> filterByCat("Spices & Condiments")}>Spices & Condiments</a></li>
            <li><a className="dropdown-item"onClick={()=> filterByCat("Personal Care")} >Personal Care</a></li>
            <li><a className="dropdown-item"onClick={()=> filterByCat("Instant Foods")} >Instant Foods</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Dairy & Beverages")} >Dairy & Beverages</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Fresh from Nature")} >Fresh from Nature</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Cake & Milk")} >Cake & Milk</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Sweet Tooth")} >Sweet Tooth</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Baking Materials")} >Baking Materials</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Meats")} >Meats</a></li>
            <li><a className="dropdown-item" onClick={()=> filterByCat("Pet Foods")} >Pet Foods</a></li>
            
          </ul>
        </li>

        <li className="nav-item ">
          <a  className={`nav-link btn btn-link ${location.pathname === '/blog' ? 'text-success fw-bold' : 'text-dark'}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false"
           onClick={ () => navigate('/blog')}
          >
            Blog
          </a>
          
        </li>
        
        <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle text-dark cursor-pointer" // Pointer for "Pages"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Pages
  </a>
  <ul className="dropdown-menu">
    <li>
      <a
        className="dropdown-item cursor-pointer" // Pointer on hover
        onClick={() => navigate('/contact')}
      >
        Contact Us
      </a>
    </li>
    <li>
      <a
        className="dropdown-item cursor-pointer"
        onClick={() => navigate('/blog')}
      >
        Blogs
      </a>
    </li>
    <li>
      <a
        className="dropdown-item cursor-pointer"
        onClick={() => navigate('/about')}
      >
        About Us
      </a>
    </li>
  </ul>
</li>


        <li className="nav-item ">
    <a  className={`nav-link btn btn-link ${location.pathname === '/contact' ? 'text-success fw-bold' : 'text-dark'}`} onClick={() => navigate('/contact')} >Contact Us</a>
  </li>  

</ul>

<hr />
    </>
  )
}

export default Head