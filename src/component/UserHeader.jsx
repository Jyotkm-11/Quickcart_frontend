import React, { useContext } from 'react'
import Head from './Head.jsx';
import AppContext from '../Context/AppContext.jsx';
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  const {user, logoutUser } = useContext(AppContext);

  const handleMouseOver = (e) => {
    e.currentTarget.style.opacity = '0.9';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.transform = 'scale(1)';
  };
  return (
   <>
  <Head/>
  <div className='row'>
    <div className='col-8'> </div>
    <div className='col-4'> 
        <button className='btn btn-outline-success fw-bold' 
       onClick={()=>{
        logoutUser();
        navigate("/login");
       }}
        >
          Logout
        </button>
       </div>
 
  </div>
    <div className='row '>

         <div className='col-2'> </div>
         <div className='col-8 text-center mt-4' >



         <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar"
          className=" rounded-full  m-auto " style={{height:"180px",width:"180px"}}
          />



{/* newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

            <div className='row mt-3'>
              <div className='col-2'></div>
              <div className='col-4 text-amber-400'>
              <h4><h4 className='fs-5 text-black'>Name:</h4> {user?.name || "loading..."}</h4>
              </div>
              <div className='col-4 text-amber-400'>
               <h4 > <h4 className='fs-5 text-black'>Email:</h4> {user?.email}</h4>
              </div>
              <div className='col-2'></div>
            </div>
            {/*Buttons  */}
            <div className='row mt-5'>
              <div className='col-2'></div>
              <div className='col-4'>
              <button
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
         // style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={ () =>navigate('/edituser')}
      >
       Edit Info
      </button>
              </div>
              <div className='col-4'>
              <button
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={ () =>navigate('/changepass')}
      >
        Change Password
      </button>
              </div>
              <div className='col-2'></div>
            </div>



    </div>

           
           
         <div className='col-2'> </div>
    </div>
</>
  )
}

export default UserHeader


