//Signup.js
import React,{ useState,useContext } from 'react'
import { UsersContext } from './UserContext';

const Signup = () => {
  
  const {setUser} = useContext(UsersContext);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [message, setMessage] = useState(false);

  function Handleclick(e){
    e.preventDefault();
    if(fullname && email && password && cpassword){
      setUser({fullname,email,password,cpassword});
      setMessage(true);
      setFullname('');
      setEmail("");
      setPassword("");
      setCpassword("");
    }
  }

  return (
    <div className='frm'>
    <div className='headword'><p>Signup</p></div>    
    <form >
      <input value={fullname} onChange={e=>setFullname(e.target.value)} placeholder='Full Name'/>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email'/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password'/>
      <input value={cpassword} onChange={e=>setCpassword(e.target.value)} placeholder='Confirm Password'/>
      { 
        message ? <p style={{color:'green', margin:"1rem"}} >Sucessfully Signed Up!</p>:
         <p style={{color:'red', margin:"1rem"}} >Error: All the fields are mandatory</p>
      }
      <button type='button' onClick={Handleclick}>Signup</button>
    </form>
    </div>
  )
}

export default Signup