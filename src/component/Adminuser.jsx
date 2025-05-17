import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import axios from 'axios';
import { Adminheader } from './Adminheader';

const Adminuser = () => {
    const {users,} = useContext(AppContext);
  return (
   <>
   <Adminheader/>
   <div className="w-full min-h-screen flex items-center justify-center " style={{backgroundColor:"#4E657A" , border:" 50px solid #435C70"}}>
    <div className=" p-4 rounded-md w-full max-w-xl mx-auto overflow-x-auto">
  <table className="w-full text-white text-left border-collapse">
    <thead>
      <tr className="text-white" style={{backgroundColor:"#486177" , border:" 5px solid #435C70"}}>
        <th className="p-3">USER NAME</th>
        <th className="p-3">USER EMAIL</th>
        
      </tr>
    </thead>
    <tbody>
      {users.map((i) => (
        <tr key={i} className=" text-white" style={{backgroundColor:"#4E657A" , border:"5px solid #435C70"}}>
          <td className="p-3 flex items-center space-x-2">
            {/* <span className="w-4 h-4 bg-gray-500 rounded-full inline-block"></span> */}
            <span className="font-bold">{i.name.toUpperCase()}</span>
          </td>
          <td className="p-3">{i.email}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
  
</div>
</div>
   </>
  )
}

export default Adminuser