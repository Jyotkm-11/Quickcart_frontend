import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext';

const userLogin = () => {
    const [email,setEmail] =  useState("")
    const [pasw,setPasw] = useState("")


    const {login} = useContext(AppContext)
    const loginfun =(e)=>{
        console.log("Start function");
        e.preventDefault();
    
        login(email,pasw)
         .then((response)=>{
            console.log("User Login successfully",response);
            alert("user succ login")
            setEm("")
            setPas("")
        })
        .catch((error)=>{
            console.error("Login error",error)
        });
       
    }
  return (
    <>
   
    <div style={{ 
     position: "relative", 
     height: "690px", 
     width: "100%", 
     overflow: "hidden" 
 }}>
     {/* Blurred Background Image */}
     <div style={{ 
         backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png")`, 
         backgroundSize: "cover",
         backgroundPosition: "center",
         filter: "blur(6px)", 
         position: "absolute", 
         top: 0, 
         left: 0, 
         right: 0, 
         bottom: 0, 
         zIndex: -1 
     }}></div>
 
     {/* Main Content */}
     <h1 className='text-success' style={{ 
         textAlign: "center", 
         fontWeight: "bold", 
         marginTop: "7rem", 
         fontSize: "3rem" 
     }}>Login</h1>
 
     <form onSubmit={loginfun}  className='border border-success p-3 rounded mx-auto mt-5' 
         style={{ 
             maxWidth: "600px", 
             maxHeight: "600px", 
             backgroundColor: "rgba(255, 255, 255, 0.32)", 
             position: "relative", 
             zIndex: 1 
         }}>
       
         <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
         </div>
 
         <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input type="password" value={pasw} onChange={(e)=>setPasw(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
         </div>
 
         <button type="submit" className="btn btn-success mt-3">Submit</button>
         <p className='mt-2'>Don't have an account ? <a href="#" style={{textDecoration:"none"}}>Sign Up</a></p>
     </form>
 </div>
 
 
    </>
  )
}

export default userLogin