
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Trial from './pages/Trial';
import { useContext, useEffect, useState } from 'react';
import AuthContext from './context/AuthContext';

function App() {
 
  let ctx = useContext(AuthContext)
  console.log(ctx.Authvalue)

  // console.log(loginValue)
  // if(loginValue===true){
  //   setvalue(true)
  // }
  // console.log(value)

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
    {  ctx.Authvalue &&  <Route path='/' element={<Home/>}/>}
    {  !ctx.Authvalue &&  <Route path='/' element={<Navigate to={'/login'}/>}/>}

       
          <Route path='/cart' element={<Cart/>}/>
       {!ctx.Authvalue  && <Route path='/login' element={<Login/>}/>}
       {ctx.Authvalue  && <Route path='/login'  element={<Navigate to={'/'}/>}/>}
   
     
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
     </BrowserRouter>
     {/* <Trial/> */}
    </div>
  );
}

export default App;
