import React, { useContext,useState } from 'react'
import AppContext from '../Context/AppContext'

const Adminaddproducts = () => {
    const [title , setTitle] =useState("");
    const [desc , setDesc] = useState("");
    const [cat , setCat] = useState("");
    const [price , setPrice] =useState("");
    const [qty , setQty] = useState("");
    const [imgsrc , setImgsrc] = useState("");


    const {adminadd} = useContext(AppContext);
    const f1 = (a)=>{
        console.log("Start function");
        a.preventDefault();
       

        adminadd(title,desc,cat,price,qty,imgsrc)
        .then((response)=>{
            console.log("Product Added Successfully",response);
            setTitle("")
            setCat("")
            setDesc("")
            setQty("")
            setImgsrc("")
            setPrice("")
            
        })
        .catch((error)=>{
            console.error("Product add error",error)
        });
    }
  return (
    <>
   
   <div className="w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-4xl p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
        <form onSubmit={f1} className="flex flex-col space-y-4">
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Product Name" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <textarea 
            name="description" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
            placeholder="Description" 
            className="w-full p-2 bg-gray-700 text-white rounded h-24" 
            required
          ></textarea>
          <input 
            name="category" 
            value={cat} 
            onChange={(e) => setCat(e.target.value)} 
             placeholder="Category"
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required
         />
          <input 
            type="text" 
            name="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Price" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <input 
            type="text" 
            name="qty" 
            value={qty} 
            onChange={(e) => setQty(e.target.value)} 
            placeholder="Quantity" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <input 
            type="text" 
            name="imgsrc" 
            value={imgsrc} 
            onChange={(e) => setImgsrc(e.target.value)} 
            placeholder="Image URL" 
            className="w-full p-2 bg-gray-700 text-white rounded" 
            required 
          />
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded text-lg font-bold">
            ADD PRODUCT NOW
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Adminaddproducts

{/* <div className="max-w-md mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={f1} className="space-y-4" >
        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded"  required />
        <textarea name="description" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border rounded"  required></textarea>
        <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" className="w-full p-2 border rounded"  required />
        <input type="text" name="category" value={cat} onChange={(e)=>setCat(e.target.value)} placeholder="Category" className="w-full p-2 border rounded"  required />
        <input type="text" name="qty" value={qty} onChange={(e)=>setQty(e.target.value)} placeholder="Quantity" className="w-full p-2 border rounded"  required />
        <input type="text" name="imgsrc" value={imgsrc} onChange={(e)=>setImgsrc(e.target.value)} placeholder="Image URL" className="w-full p-2 border rounded"  required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Product</button>
      </form>
    </div> */}