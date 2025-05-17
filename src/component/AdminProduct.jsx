import React,{ useContext} from 'react'
import AppContext from "../Context/AppContext";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Adminheader } from './Adminheader';


const AdminProduct = () => {
 
    const {products,} = useContext(AppContext)

    // const deleteitem = async (id)=>{
    //   console.log(id);
    //    const url="http://localhost:3000/api";
    //   const api = await axios.delete(`${url}/product/${id}`)
    //   .then((res)=>{
    //     window.location.reload()
    //   })
    //   .catch(()=>{
    //     console.log("error")
    //   })
    //   console.log(api.data)
    //   }


    const deleteitem = async (id) => {
      const isConfirmed = window.confirm("Are you sure you want to delete this product?");
      if (!isConfirmed) return; // Stop execution if user cancels

      console.log(id);
      const url = "http://localhost:3000/api";
      try {
          const api = await axios.delete(`${url}/product/${id}`);
          window.location.reload();
          console.log(api.data);
      } catch (error) {
          console.log("Error deleting product");
      }
  };

  return (
    <>
    <Adminheader/>
    {/* <h1 className='fs-2 text-center fw-bold text-light mb-0 bg-gray-700'>Products Detail </h1> */}
     <div className="w-full min-h-screen flex items-center justify-center " style={{backgroundColor:"#4E657A" , border:" 50px solid #435C70"}}>
    <div className=" p-4 rounded-md w-full max-w-4xl mx-auto overflow-x-auto">
  <table className="w-full text-white text-left border-collapse">
    <thead>
      <tr className="text-white" style={{backgroundColor:"#486177" , border:" 5px solid #435C70"}}>
        <th className="p-3">PRODUCT NAME</th>
        <th className="p-3">PRICE</th>
        <th className="p-3">QUANTITY</th>
        <th className="p-3">IMAGE LINK</th>
        <th className="p-3"></th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index} className=" text-white" style={{backgroundColor:"#4E657A" , border:"5px solid #435C70"}}>
          <td className="p-3 flex items-center space-x-2">
            {/* <span className="w-4 h-4 bg-gray-500 rounded-full inline-block"></span> */}
            <span className="font-bold">{product.title}</span>
          </td>
          <td className="p-3">{product.price}</td>
          <td className="p-3">{product.qty}</td>
          <td className="p-3 truncate max-w-[200px]">{product.imgsrc}</td> 
          <td className="p-3 text-center">
            {/* DELETE PRODUCTS */}
            <button onClick={()=>deleteitem(product._id)} className="text-white hover:text-red-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
{/* UPDATE PRODUCTS */}
           <Link to={`/editproduct/${product._id}`}>
           <button className="text-white hover:text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
           </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="mt-4 space-y-2">
      <Link to={`/adminadd`}>
    <button className="w-full bg-yellow-500 text-black p-3 rounded-md font-bold">
      ADD NEW PRODUCT
    </button>
    </Link>
    {/* <button className="w-full bg-orange-500 text-black p-3 rounded-md font-bold">
      DELETE SELECTED PRODUCTS
    </button> */}
  </div>
</div>
</div>
    </>
  )
}

export default AdminProduct