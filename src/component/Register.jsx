import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'

const Register = () => {

    const [nm,setNm] = useState("")
    const [em,setEm] = useState("")
    const [pw,setPw] = useState("")
    const [cpw,setCpw] = useState("")

    // const f1 = ()=>{
    //     console.log("name",nm)
    //     console.log("email",em)
    //     console.log("password",pw)
    //     console.log("C pass",cpw)
    // }

    const {register} = useContext(AppContext);
    const f1 = (a)=>{
        // console.log("Start function");
        a.preventDefault();
        // console.log({name,email,password})

        register(nm, em, pw)
        .then((response)=>{
            // console.log("User registered successfully",response);
            // alert("user succ reg")
            setNm("")
            setEm("")
            setPw("")
            setCpw("")
        })
        .catch((error)=>{
            console.error("Registration error",error)
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
    }}>Register</h1>

    <form onSubmit={f1} className='border border-success p-3 rounded mx-auto mt-5' 
        style={{ 
            maxWidth: "600px", 
            maxHeight: "600px", 
            backgroundColor: "rgba(255, 255, 255, 0.32)", 
            position: "relative", 
            zIndex: 1 
        }}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" value={nm} onChange={(e)=>setNm(e.target.value)} className="form-control" placeholder="Enter Name"/>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"  value={em} onChange={(e)=>setEm(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password"  value={pw} onChange={(e)=>setPw(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Confirm Password</label>
            <input type="password"  value={cpw} onChange={(e)=>setCpw(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
        </div>

        <button type="submit" className="btn btn-success mt-3">Submit</button>
        <p className='mt-2'>Already have an account ? <a href="#" style={{textDecoration:"none"}}> Login</a></p>
    </form>
</div>


   </>
  )
}

export default Register


{/* <>


<div  style={{ backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png")` ,backgroundSize: "cover",
    backgroundPosition: "center",height:"690px",width:"100%"}}>
     
 <h1 className='row'></h1>
    <h1 className='text-success' style={{textAlign:"center",fontWeight:"bold",marginTop:"7rem",fontSize:"3rem"}}>Register</h1>
    <form className='border border-success p-3 rounded mx-auto mt-5' style={{maxWidth:"600px",maxHeight:"600px"}}>


    <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control"  placeholder="Enter Name"/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-success mt-3">Submit</button>
</form>
</div>
    </> */}