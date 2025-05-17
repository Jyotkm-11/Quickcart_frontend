import React, { useContext, useState , useEffect } from 'react'
import AppContext from '../Context/AppContext';
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
    const [nm, setNm] = useState('');
    const [em, setEm] = useState('');

     const navigate = useNavigate();
    const {userEditprofile , user} = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userData = await user; // should return { name, email }
            setNm(userData.name || '');
            setEm(userData.email || '');
          } catch (err) {
            console.error('Error fetching user profile:', err);
          }
        };
    
        fetchData();
      }, [user]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userEditprofile({ name: nm, email: em });
          alert('Profile updated!');
        } catch (err) {
          console.error('Error updating profile:', err);
          alert('Update failed');
        }
      };
    
  
  return (
   <>
    
   <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Edit Your Profile</h3>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="newname"
            value={nm}
            onChange={(e) => setNm(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={em}
            onChange={(e) => setEm(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100"
        onClick={ () =>navigate('/userprofile')}
        >Submit</button>
       
      </form>
    </div>
   </>
  )
}

export default Editprofile