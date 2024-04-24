import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const Login = () => {
  let ctx1 = useContext(AuthContext)
  const [error, seterror] = useState("");
let navigate = useNavigate()
  let arr = JSON.parse(localStorage.getItem('auth')) || []
  // console.log(arr)

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (e) =>{
    // console.log(e.target.value)
    setemail(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    // console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let obj = {
      email:email,
      password:password
    }
    console.log(obj)

    function checkUser(){
        for(let i = 0; i<arr.length ; i++){
          if(arr[i].email === obj.email){
            if(arr[i].password === obj.password){
              localStorage.setItem("login",true)
              ctx1.setAuthvalue(true)
              navigate('/')
              return "login successfull"
            }
            else{
              return "Wrong password"
            }
          }
        }

        return "user not found"
    }
  let ans = checkUser()

    seterror(ans)
   
  }
  return (
    <div>
      <form className='col-md-6 mt-3 m-auto'>
        <p className='text-center' style={{color:"red"}}>{error}</p>
      <h3 className='text-center'>Login Form</h3>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
 
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
  <p className='text-center'>Don't have an account? <Link to="/signup">Signup</Link></p>
</form>
    </div>
  )
}

export default Login
