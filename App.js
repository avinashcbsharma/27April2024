import React from 'react'
import {BrowserRouter as Routers , Routes,Route,Link } from 'react-router-dom';
import Profile from './Profile'
import Signup from './Signup'
import './App.css';
import UsersContextProvider from './UserContext';

const App = () => {  
  
  return (
   
    <UsersContextProvider>
      <Routers>
        <div className='nbar'>    
            <p>Header</p>
            <nav>
                <Link to ='/' className='linkStyle'>Home</Link>
                <Link to ='/Profile' className='linkStyle'>Profile</Link>
            </nav>
        </div>
        <Routes>
          <Route path='/' element = {<Signup/ >}/>
          <Route path='/Profile' element = {<Profile/ >}/>
        </Routes>  
      </Routers>
    </UsersContextProvider>
   
  )
}

export default App
