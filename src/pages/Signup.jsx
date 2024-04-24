import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate = useNavigate()
  const [error, seterror] = useState("");
  let usersArr = JSON.parse(localStorage.getItem('auth')) || [];
  let nameRef= useRef()
  let emailRef = useRef()
  let passwordRef = useRef()
  let addressRef = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()

    let obj={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      address:addressRef.current.value
    }

    console.log(obj)

   

    function checkUser(){
      for(let i=0; i<usersArr.length; i++){
        if(usersArr[i].email === obj.email){
          seterror("user Already Exists")
          setTimeout(()=>{
            seterror('')
          },2000)
          return
        }
      }
      if(obj.name && obj.email && obj.password && obj.address){
        usersArr.push(obj)
        localStorage.setItem('auth',JSON.stringify(usersArr))
        navigate('/login')
      }
      else{
        seterror('Please fill all the fields')
      }

      setTimeout(()=>{
        seterror('')
      },2000)
    
    }
    checkUser()
   

  }
  return (
    <div className='p-3'>
    <form className='col-md-6 mt-3 m-auto'>
      <h3 style={{color:"red"}} className='text-center'>{error}</h3>
      <h3 className='text-center'>Sign up Form</h3>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input required ref={nameRef} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input required ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input required ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <div className="form-floating">
  <textarea required ref={addressRef} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  {/* <label for="floatingTextarea">Address</label> */}
</div>
  </div>
 
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
  <p className='text-center'>Already a user? <Link to="/login">Login</Link></p>
</form>

    </div>
  )
}

export default Signup
