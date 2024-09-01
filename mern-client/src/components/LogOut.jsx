import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutImg from '../assets/logout.jpeg'
const LogOut = () => {
    const {logOut}=useContext(AuthContext)
    const location = useLocation();
    const navigate= useNavigate();

    const from =location.state?.from?.pathname || "/";

    const handleLogout=()=>{
logOut().then(() => {
    // Sign-out successful.
    alert("LogOut Successfully!!!!")
    navigate(from,{replace:true})
  }).catch((error) => {
    // An error happened.
  });
  
    }
  return (
    <div className='h-screen bg-teal-100 flex flex-col items-center justify-center'>
        <img src={LogoutImg} alt="" />
<button className='bg-red-700 mt-9 px-2 py-2 text-white text-2xl font-semibold rounded-lg ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogOut
