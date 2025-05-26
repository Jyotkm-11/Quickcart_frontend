import React from 'react'
import Footer from './Footer'
import Showproduct from './Showproduct'
import logo from './Newlogo.png'
import Head from './Head'
import Featuredcat from './Featuredcat'
import DailyBestSells from './DailyBestSells'
import Dealsofday from './Dealsofday'
import Lastpartbody from './Lastpartbody'


const Body = () => {
  return (
    <>
    
    <Head/>

{/* 2nd part */}

<div className='row mt-5 ms-3 me-3' style={{ backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png")` ,backgroundSize: "cover",
    backgroundPosition: "center",height: "500px",  width: "100%",borderRadius:"30px"}}>
      <div className='col-1'></div>
     <div className='col-6' style={{width:"550px",marginTop:"100px"}}>
       <h4  className='text-cyan-950' style={{fontSize: "60px", fontWeight: "bold" }}>Fresh Vegetables And Big discounts</h4>
        <p  className='fs-2 text-stone-500 mt-3'>Save upto 50% off on your first order</p>

        <div className="d-flex mt-4" style={{ maxWidth: "450px" , height:"60px" }}>
            <input
              type="email"
              className="form-control rounded-start-pill px-4"
              placeholder="Your email address"
            />
            <button className="btn btn-success rounded-end-pill px-4">Subscribe</button>
          </div>

        {/* <input type="text" placeholder='Write your email' style={{marginTop:"25px", padding:"22px 85px ",borderRadius:"20px"}} />
        <button className='btn btn-success' style={{padding:"22px 10px " , borderTopRightRadius:"20px",borderBottomRightRadius:"20px", marginLeft:"-20px", marginTop:"-4px"}}>Subscribe</button> */}
     </div>
     <div className='col-4'></div>
    </div>

{/* /3rd part */}


{/* <div id="carouselExample" className="carousel carousel-dark slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src= "https://www.shutterstock.com/image-photo/groceries-shopping-flat-lay-fruits-260nw-2125529039.jpg" className="d-block w-100 " alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<Featuredcat/>

<Showproduct/>



<Dealsofday/>
<Lastpartbody/>

<Footer/>
    </>
  )
}

export default Body


 
