import React, { useContext, useRef } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { PiShoppingCartLight } from "react-icons/pi";
import CartContext from '../context/CartContext';
import AuthContext from '../context/AuthContext';
import { FaBasketShopping } from "react-icons/fa6";
const Navbar = () => {

    let ctx1 = useContext(AuthContext)
  let navigate = useNavigate()
  let ctx = useContext(CartContext)
  // console.log(ctx.cartItem.length)
  
  const handleInputChange =(e)=>{
    console.log(e.target.value)
    ctx.setNavsearch(e.target.value)
  }

  const handleLogin = ()=>{
    console.log("hello")
    navigate('/login')
  }

  const handleSignup = () =>{
    navigate('/signup')
  }

  const handleLogout = () =>{
    localStorage.removeItem('login')
    ctx1.setAuthvalue(false)
    navigate('/login')
  }
  return (
    <div>
   <nav className="navbar navbar-expand-lg " style={{background:'skyblue'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><FaBasketShopping fill='green' size={'30px'}/> Shop Kro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex m-auto" role="search">
        <input onChange={handleInputChange} className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <button onClick={handleLogin} className='btn btn-primary 'style={{marginRight:'10px',fontWeight:'bold'}}>Login</button>
      <button onClick={handleLogout} className='btn btn-primary'style={{fontWeight:'bold'}}>Logout</button>
      <button onClick={handleSignup} className='btn btn-success ms-2'style={{fontWeight:'bold'}}>Signup</button>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"style={{fontWeight:'bold',color:'black'}}>Home</Link>
        </li>
        <li className="nav-item" style={{fontWeight:'bold'}}>
          <Link className="nav-link" to="/cart"><PiShoppingCartLight size={'30px'} style={{fontWeight:'bold'}} />{ctx.cartItem.length} </Link>
        </li>
  
       
      
      </ul>
   
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
