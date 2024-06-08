//Profile.js
import React,{useContext} from 'react'
import { UsersContext } from './UserContext'


const Profile = () => {
  const {user} = useContext(UsersContext);
  const {setUser} = useContext(UsersContext);

  function lout() {
    setUser({});
  }

  
  console.log("user: ", user);
  return (
    <div className='Profile'>
      <p>Profile</p>
      <p>Full Name: {user.fullname} </p>
      <p>Email: {user.email} </p>
      <p>Password: {user.password} </p>

      <button type='button' onClick={lout} >Logout</button>
    
    </div>
  )
}

export default Profile