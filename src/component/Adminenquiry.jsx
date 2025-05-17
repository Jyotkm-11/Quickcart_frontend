import React, { useContext } from 'react'
import { Adminheader } from './Adminheader'
import AppContext from '../Context/AppContext'

const Adminenquiry = () => {
    const {allEnquiry} = useContext(AppContext);
  return (
    <>
    <Adminheader/>
    <div className="w-full min-h-screen flex items-center justify-center " style={{backgroundColor:"#4E657A" , border:" 50px solid #435C70"}}>
    <div className=" p-4 rounded-md w-full max-w-full mx-auto overflow-x-auto">
  <table className="w-full text-white text-left border-collapse">
    <thead>
      <tr className="text-white" style={{backgroundColor:"#486177" , border:" 5px solid #435C70"}}>
        <th className="p-3">USER NAME</th>
        <th className="p-3">Email</th>
        <th className="p-3">Subject</th>
        <th className="p-3">Phone Number</th>
        <th className="p-3">Message</th>
        
      </tr>
    </thead>
    <tbody>
    {allEnquiry.map((i) => (
  <tr key={i._id} style={{ backgroundColor: "#4E657A", border: "5px solid #435C70" }}>
    
    <td className="p-3">{i.name}</td>
    <td className="p-3">{i.email}</td>
    <td className="p-3">{i.subject}</td>
    <td className="p-3">{i.phoneNumber}</td>
    <td className="p-3">{i.message}</td>
    <td className="p-3">
     
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

export default Adminenquiry