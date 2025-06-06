import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const Profile = () => {
    const {user } = useContext(AppContext);
  return (
    <>
    <div className='container text-center my-3'>
        <h1>Welcome ,{user?.name || "loading..."} </h1>
        <h3> {user?.email} </h3>
    </div>
    </>
  )
}

export default Profile