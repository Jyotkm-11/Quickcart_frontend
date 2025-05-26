import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext'
import Footer from './Footer';
import Lastpartbody from './Lastpartbody';

const Relatedproduct = ({category}) => {
    const {products,} = useContext(AppContext);
    console.log("prrrooductss",products);
    const [relatedProducts , setRelatedProducts] = useState([]);

    useEffect(()=>{
        console.log("inside useEffect");

        if(products && category){
            console.log("enter if ");
            const filteredProducts = products.filter(
                (product) => product?.category?.toLowerCase() === category.toLowerCase()
            );
            console.log("data", filteredProducts);
            setRelatedProducts(filteredProducts); 
        }
    }, [category , products]);


    
  return (
    <>
    <div className="grid grid-cols-5 gap-4 p-4">
    
      {relatedProducts?.map((i) => (
        <div key={i._id} className="card bg-base-100 shadow-sm !border-slate-600">
            
          <figure className="w-full h-40 flex items-center justify-center overflow-hidden">
            <img
              src= {i.imgsrc}
              className="w-28 h-28 object-cover"
            />
          </figure>
         
          <div className="card-body">
            <h5 className="text-gray-600 text-xs"> {i.category} </h5>
            <h2 className="card-title text-xl">{i.title}</h2>
            <p> {i.description} </p>
    
            <div className="flex justify-between p-4 bg-gray-100">
              <div> {i.price}</div>
              <div className="card-actions justify-end">
              <button onClick={()=> addToCart(i._id , i.title , i.price , 1 , i.imgsrc) }
  className="btn fw-semibold d-flex align-items-center gap-2 px-3 py-1 rounded"
   style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }} >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
 Add
  </button>
              </div>
            </div>
          </div>
        </div>
      ))}
     
    </div> 
    
    <br />
    

{/* reviewwwwsss */}

{/* reviewwwwsss */}

    {/* <Lastpartbody/>
   <Footer/> */}
    </>
  )
}

export default Relatedproduct
