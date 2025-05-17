import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { Adminheader } from './Adminheader';

const Adminorder = () => {
    const{orderData } = useContext(AppContext);
  return (
    <>
    <Adminheader/>
     <div className="w-full min-h-screen flex items-center justify-center " style={{backgroundColor:"#4E657A" , border:" 50px solid #435C70"}}>
    <div className=" p-4 rounded-md w-full max-w-full mx-auto overflow-x-auto">
  <table className="w-full text-white text-left border-collapse">
    <thead>
      <tr className="text-white" style={{backgroundColor:"#486177" , border:" 5px solid #435C70"}}>
        <th className="p-3">USER NAME</th>
        <th className="p-3">Order Date</th>
        <th className="p-3">Amount Paid</th>
        <th className="p-3">Order Id</th>
        <th className="p-3">Pay Status</th>
        <th className="p-3">Order Details</th>
        
      </tr>
    </thead>
    <tbody>
    {orderData.map((i) => (
  <tr key={i._id} style={{ backgroundColor: "#4E657A", border: "5px solid #435C70" }}>
    <td className="p-3 font-bold">{i.userAddress?.name || "N/A"}</td>
    <td className="p-3">{i.orderDate}</td>
    <td className="p-3">{i.amount}</td>
    <td className="p-3">{i.orderId}</td>
    <td className="p-3">{i.payStatus}</td>
    <td className="p-3">
      {Array.isArray(i.cartItems) ? (
        i.cartItems.map((item, idx) => (
          <div key={idx}>
            {item.title} — {item.qty} x ₹{item.price}
          </div>
        ))
      ) : (
        <div>No items</div>
      )}
    </td>
  </tr>
))}

    </tbody>
  </table>
  
</div>
</div>
    </>
  )
}

export default Adminorder

