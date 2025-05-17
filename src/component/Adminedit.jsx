import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Adminedit = () => {
    const navigate = useNavigate();
     const url="http://localhost:3000/api";
     const {id} = useParams()

     const [title , setTitle] =useState("");
        const [description , setDescription] = useState("");
        const [category , setCategory] = useState("");
        const [price , setPrice] =useState("");
        const [qty , setQty] = useState("");
        const [imgsrc , setImgsrc] = useState("");

    useEffect( ()=>{
        const fetchProduct = async ()=>{
            console.log(id)
            const old = await axios.get(`${url}/product/${id}`)
            console.log(old.data.product)
            setTitle(old.data.product.title);
            setDescription(old.data.product.description);
            setCategory(old.data.product.category);
            setPrice(old.data.product.price);
            setQty(old.data.product.qty);
            setImgsrc(old.data.product.imgsrc);
        }
       fetchProduct() 
    },[])

   const formhandler = async (e)=>{
    e.preventDefault();
    console.log("Form submitted with",{title,description,category,price,qty,imgsrc});

    try{
        const result = await axios.put(`${url}/product/${id}`,
            {title,description,category,price,qty,imgsrc}
        );
        console.log("Edit success", result);
        alert("Successfull Edit")
        navigate('/adminpro')
        window.location.reload()
    } catch(err){
        console.log("Error occured",err)
    }
   }

  return (
    <>
     <div className="w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-4xl p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>
        <form  onSubmit={formhandler} className="flex flex-col space-y-4">
          <input 
            type="text" 
            name="title" 
            value={title} 
           onChange={ (e)=>setTitle(e.target.value) }
            placeholder="Product Name" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <textarea 
            name="description" 
            value={description} 
            onChange={ (e)=>setDescription(e.target.value) }
            placeholder="Description" 
            className="w-full p-2 bg-gray-700 text-white rounded h-24" 
            required
          ></textarea>
          <input 
            name="category" 
            value={category} 
            onChange={ (e)=>setCategory(e.target.value) }
            
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required
          />

          <input 
            type="text" 
            name="price" 
            value={price} 
            onChange={ (e)=>setPrice(e.target.value) }
            placeholder="Price" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <input 
            type="text" 
            name="qty" 
            value={qty} 
            onChange={ (e)=>setQty(e.target.value) }
            placeholder="Quantity" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <input 
            type="text" 
            name="imgsrc" 
            value={imgsrc} 
            onChange={ (e)=>setImgsrc(e.target.value) }
            placeholder="Image URL" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded text-lg font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Adminedit