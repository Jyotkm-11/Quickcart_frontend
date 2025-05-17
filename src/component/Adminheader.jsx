import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { useNavigate } from "react-router-dom";


export const Adminheader = () => {
  const navigate = useNavigate();
  const {logoutAdmin} = useContext(AppContext)
  return (
   <>
  
  <nav className="text-white flex items-center justify-between p-4" style={{backgroundColor:"#567086"}}>
      <div className="fs-3  fw-bold mb-2 ms-5">PRODUCT ADMIN</div>
      <div className="flex space-x-6">
        <ul className='flex space-x-10 fs-5 '>

      

<li className="nav-item me-3 ">
        <NavLink to="/admindash" 
         className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-2  fw-bold ${isActive ? "text-warning" : "text-light"}`
        }>
 <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
</svg>

  <span><a className="nav-link active  fw-bold" aria-current="page" href="#"> DashBoard </a></span>
</div>
</NavLink>
</li>


        <li className="nav-item me-3 ">
        <NavLink to="/orders" 
         className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-2  fw-bold ${isActive ? "text-warning" : "text-light"}`
        }>
 <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
</svg>

  <span><a className="nav-link active  fw-bold" aria-current="page" href="#"> Orders </a></span>
</div>
</NavLink>
</li>
        <li className="nav-item me-3 ">
        <NavLink to="/enquiry" 
         className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-2  fw-bold ${isActive ? "text-warning" : "text-light"}`
        }>
 <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

  <span><a className="nav-link active  fw-bold" aria-current="page" href="#"> Enquiry </a></span>
</div>
</NavLink>
</li>


        <li className="nav-item me-3 ">
        <NavLink to="/adminpro" 
        className={({ isActive }) =>
      `nav-link d-flex align-items-center gap-2  fw-bold ${isActive ? "text-warning" : "text-light"}`
    }>
 <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

  <span><a className="nav-link active" aria-current="page" href="#">Products </a></span>
</div>
</NavLink>
</li>



<li className="nav-item me-3">
  <NavLink to="/adminuser"  className={({ isActive }) =>
      `nav-link d-flex align-items-center gap-2 fw-bold ${isActive ? "text-warning" : "text-light"}`
    
}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
    <span>Users</span>
  </NavLink>
</li>



<li className="nav-item me-3">
  <NavLink to="/writeblog"  className={({ isActive }) =>
      `nav-link d-flex align-items-center gap-2 fw-bold ${isActive ? "text-warning" : "text-light"}`
    
}>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
    <span>Blogs</span>
  </NavLink>
</li>



    

        </ul>
      </div>
     <div className="text-xl mb-3">
      <a  href="#" className=" nav-link " 
       onClick={()=>{
        logoutAdmin();
        navigate("/adminlogin");
       }}
      >Logout</a>
      </div> 
    </nav>
  
   </>
  )
}
