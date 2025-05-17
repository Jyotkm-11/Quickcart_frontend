import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from 'axios'
import {toast , Bounce , Flip , Slide} from 'react-toastify';
import { useAsyncError } from "react-router-dom";
axios.defaults.withCredentials = true;

const AppState = (props) =>{
    const url="https://quickcart-kc9y.onrender.com/api"
    const [token , setToken] = useState("");
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [cart , setCart] = useState([]);
    const [reload , setReload] = useState(false);
    const [userAddress, setUserAddress] = useState("");
    const [orderData , setOrderData] = useState([]);
    const [allEnquiry , setAllEnquiry] = useState([]);

   const [filtereddata , setFiltereddata] = useState([]);

    
     


//Register
const register = async (name,email, password) =>{
    const api = await axios.post(`${url}/user/register`,{name,email,password},
        {
            headers:{
          'Content-Type':'Application/json',
            },
            withCredentials:true,
        }
    );
    toast.success('🦄 User Registered Successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });

    console.log("User Register ", api)
}

// Login
const userlogin = async (email, password) =>{
    // console.log("appstate page",email, password)
    const api2 = await axios.post(`${url}/user/login`,{email,password},
        {
            headers:{
          'Content-Type':'Application/json',
            },
            withCredentials:true,
        }
    );
     console.log(api2.data)
     
        // toast.success('🦄 Login Successfully!', {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: false,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     transition: Bounce,
        //     });
        if (api2.data.msg === "Invalid credentials") {
            toast.error('❌ Wrong password!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            return; // stop further execution
          }
      
          toast.success('🦄 Login Successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
      

    

    // console.log("login succ ", api2)
    setToken(api2.data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", api2.data.token);

}



//Admin Login
const adminlogin = async (username , password) =>{
    const api = await axios.post(`${url}/admin/login`,{username,password},
        {
            headers:{
          'Content-Type':'Application/json',
            },
            withCredentials:true,
        }
    );
    if(api.data.success == true){
        toast.success('🦄 Login Successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    else{
        toast.warn('OOPS! Not Valid Admin', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });

    }
        setToken("")
        localStorage.removeItem("token")
    setIsAuthenticated(true);
    localStorage.setItem("Role", "Admin");
}

//Show products
const [products , setProducts] = useState([]);
useEffect(()=>{

     const fetchProduct = async ()=>{
        const api = await axios.get(`${url}/product/getallproducts` , {
            headers:{
                "Content-Type":"Application/json",
            },
            withCredentials:true,
        });
       
         setProducts(api.data.products);
     };
     fetchProduct();
     useCart();
     getAddress();
     allOrders();
     fetchAllEnquiry();
     
          } , [token , reload]);

// All users
const [users , setUsers] = useState([]);
useEffect(()=>{
    const fetchUser = async ()=>{
        const api = await axios.get(`${url}/user/all`,
            {
                headers:{
                    "Content-Type":"Application/json",
                },
                withCredentials:true,
            }
           
        );
        console.log("usersss dataaaa ========", api.data)
        setUsers(api.data)
    };
    fetchUser();
},[])

//Admin add product

const adminadd = async (title,desc,cat,price,qty,imgsrc) =>{
    const api = await axios.post(`${url}/product/addproduct` , {title,desc,cat,price,qty,imgsrc},
        {
            headers:{
                'Content-Type':'Application/json',                
            },
            withCredentials:true,
        }
    );
    console.log("Product added" , api)
}

// profile

 useEffect(()=>{
    let Istoken = localStorage.getItem("token");
    if(Istoken){
        setToken(Istoken);
        setIsAuthenticated(true);
        

    }
    console.log(token)
   userProfile();
 } , [])

const [ user , setUser] = useState("")
const userProfile = async()=>{
    let Itoken = localStorage.getItem("token");
    const api = await axios.get(`${url}/user/profile`,{
        headers:{
            "Content-Type":"Application/json",
            Auth:`Bearer ${Itoken}`,
        },
        withCredentials:true,
    });
    console.log("userprofile", api.data)
    setUser(api.data.user);
};

//add to cart
// const addToCart = async (productId,title,price,qty,imgsrc) =>{
//     console.log("product id" , productId);
//     const api = await axios.post(`${url}/cart/addcart`, {productId , title , price , qty , imgsrc},
//         {
//             headers:{
//                 "Content-Type" : "Application/json",
//                 Auth:token,
//             },
//             withCredentials:true,
//         }

//     );
//     console.log("my cart",api)
// }

const addToCart = async (productId, title, price, qty, imgsrc) => {
    try {
        console.log("product id", productId);
       
        const api = await axios.post(`${url}/cart/addcart`, 
            { productId, title, price, qty, imgsrc },
            {
                headers: {
                    "Content-Type": "application/json",
                    Auth: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        toast('🦄Product added!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
        setReload(!reload);
    } catch (error) {
        console.error("Error adding to cart:", error.response?.data || error.message);
    }
};
 
// user cart
const useCart = async ()=>{
    const api = await axios.get(`${url}/cart/getcart` , {
        headers:{
            "Content-Type":"Application/json",
            Auth:`Bearer ${token}`,
        },
        withCredentials:true,
    });


    console.log("user cart",api.data.cart_data)
    setCart(api.data.cart_data);

}



const removeFromCart = async (productId) => {
    try {
        console.log("token",token);
        console.log("Deleting product with ID:", productId);
        const api = await axios.delete(`${url}/cart/delete/${productId}`, {
            headers: {
                "Content-Type": "application/json",
                Auth: `Bearer ${token}`,
            },
            withCredentials: true,
        });
       
        setReload(!reload);
        // If you need to update the cart state directly:
        console.log(api.data)
       setCart(api.data);
        

    } catch (error) {
        console.error("Error removing item from cart:", error);
    }
};

const decreaseQty = async (productId, qty) =>{
    const api = await axios.post(`${url}/cart/decrease` , {productId, qty},
        {
      headers:{
        "Content-Type":"Application/json",
        Auth:`Bearer ${token}`,
      },
      withCredentials:true,
    }
    );
    setReload(!reload);
}


//add contact

const addContact = async (name , email , phoneNumber , message , subject) =>{
   
        const api = await axios.post(`${url}/contact/add` , {name , email , phoneNumber , message , subject},
            {
                headers:{
                    "Content-Type":"Application/json",

                },
                withCredentials:true,
            }
        );
        return api.data;
    
  }

//clear cart
 const clearCart = async()=>{
    const api = await axios.delete(`${url}/cart/clear`, 
        {
            headers:{
                "Content-Type":"Application/json",
                Auth :`Bearer ${token}`,
            },
            withCredentials:true,
        }
    );
    setReload(!reload);
 }

 //increase qty

 const incQty = (productId, title, price, qty, imgsrc) => {
    const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
  
    if (existingItemIndex !== -1) {
      // Just increase quantity — DO NOT touch price
      cart.items[existingItemIndex].qty += qty;
    } else {
      cart.items.push({ productId, title, price, qty, imgsrc });
    }
  
    setCart({ ...cart }); // Update state if needed
  };
  //shipping address
  const shippingAddress = async (fullName , address , city , state , pincode , country , phoneNumber) =>{
      const api = await axios.post(`${url}/address/addaddress` , {fullName , address , city , state , pincode , country , phoneNumber},
        {
            headers:{
                "Content-Type":"Application/json",
                Auth:`Bearer ${token}`,
            },
            withCredentials:true,
        }
      );
      toast.success('🦄Address saved', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
      setReload(!reload);
  }
  const getAddress = async ()=>{
    const api = await axios.get(`${url}/address/getaddress`,
        {
            headers:{
                "Content-Type":"Application/json",
                Auth:`Bearer ${token}`,
            },
            withCredentials:true,
        }
    );
    setUserAddress(api.data.userAddress)
  }
  
// logout user
const logoutUser = ()=>{
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("token");
    toast.warn('User Logout', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });
        
}
//Admin logout
const logoutAdmin = ()=>{
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("Role");
    console.log("admin logout")
    toast.warn('Admin Logout', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });
        
}
//change password
const UserChangepassword = async(oldPassword , newPassword) =>{
     const api = await axios.put(`${url}/user/changepass`, {oldPassword , newPassword} ,
        {
            headers:{
                "Content-Type":"Application/json",
                Auth:`Bearer ${token}`,
            },
            withCredentials:true,
        }
     );
     console.log(api.data);
    
}
//Payment 
// const savePaymentDetails = async (paymentData) => {
//     console.log("app state page", paymentData)
//     try {
//         const response = await axios.post(`${url}/payment/pay`, paymentData, {
//             headers: {
//                 'Content-Type': 'application/json',  
//             },  
//         })
//         console.log("======response data=======", response.data)
//         if (response.data.success) {
//             console.log("payment details saved:", response.data.payment);
//             return { success: true };   
//         }
//         else {
//             console.log("Failed to save Payment Details:", response.data.message);
//             return { success: false, mssage: response.data.message };   
//         }
//     }
//     catch (error) {
//         console.log("Error saving payment Details:", error);
//         return{success:false,message:"error saving payment details"}   
//     }
// }


const savePaymentDetails = async (paymentData) => {
    console.log("App State Page - Payment Data:", paymentData);
  
    try {
      const response = await axios.post("http://localhost:3000/api/payment/pay", paymentData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("====== Response Data ======", response.data);
  
      if (response.data.success) {
        console.log("Payment details saved:", response.data.payment);
        return { success: true };
      } else {
        console.error("Failed to save payment details:", response.data.message);
        return {
          success: false,
          message: response.data.message || "Unknown error occurred",
        };
      }
    } catch (error) {
      console.error("Error saving payment details:", error.message || error);
      return {
        success: false,
        message: "Error saving payment details",
      };
    }
  };
  
  //Get all orders
  const allOrders = async()=>{
    const api = await axios.get(`${url}/payment/allpayments`, {
        headers:{
            "Content-Type":"Application/json",
            Auth:`Bearer ${token}`,
        },
        withCredentials:true,
    });
    console.log("fetch users orders", api.data

    );
    setOrderData(api.data);
  }
 
  // enquiry ---> contact show to admin
  const fetchAllEnquiry = async ()=>{
    const api = await axios.get(`${url}/contact/get` ,{
        headers:{
            "Content-Type":"Application/json",
        },
        withCredentials:true,
    });
    console.log(api.data);
    setAllEnquiry(api.data);
  }

  //Edit Profile
  const userEditprofile = async (data) => {
    console.log("appstate", data)
    try {
      const token = localStorage.getItem("token");
  
      const res = await axios.put(`${url}/user/edit`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Auth: `Bearer ${token}`,
          },
        }
      );
      console.log("res",res.data)
      return res.data;
    } catch (err) {
      console.error("Error updating profile:", err);
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };
  






  return(
       <AppContext.Provider value={{register, userlogin , products , adminadd , user , token , setIsAuthenticated , isAuthenticated 
         , addToCart , cart , removeFromCart , decreaseQty , clearCart, incQty, shippingAddress, userAddress , users,adminlogin,
         logoutAdmin,logoutUser,UserChangepassword,savePaymentDetails ,addContact , orderData , allEnquiry ,userEditprofile,filtereddata , setFiltereddata
          }}>
        {props.children}
       </AppContext.Provider>
    );
};



export default AppState;
