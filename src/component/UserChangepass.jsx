import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext';

const UserChangepass = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmpass , setConfirmpass] = useState('');
   
    const {UserChangepassword,} = useContext(AppContext);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    console.log({oldPassword , newPassword , confirmpass});

    if(newPassword === confirmpass){
      try{
        const res = await UserChangepassword(oldPassword, newPassword);
        console.log("response",res);
        //toast;
        setOldPassword("");
        setNewPassword("");
        setConfirmpass("");
      }
      catch(err){
        console.log("eroor",err)
      }
    } else{
      console.log("Pass and confirm pass don't match");
    }
    
  }
  return (
    <>
   <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Change Password</h3>
      <form onSubmit={handleChangePassword}>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="form-label">Old Password</label>
          <input
            type="password"
            className="form-control"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmpass}
            onChange={(e) => setConfirmpass(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Change Password</button>
       
      </form>
    </div>
    </>
  )
}

export default UserChangepass