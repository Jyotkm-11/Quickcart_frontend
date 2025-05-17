import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { Adminheader } from './Adminheader';

const Admindash = () => {
    const{users , orderData,products} = useContext(AppContext);
  return (
    <>
    <Adminheader/>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Users</h5>
              <p className="card-text fs-2">{users.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Products</h5>
              <p className="card-text fs-2">{products.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Orders</h5>
              <p className="card-text fs-2"> {orderData.length} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Admindash