import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {
    const [Authvalue, setAuthvalue] = useState(false);

// console.log(Authvalue)
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('login'))
        console.log(user)
        if(user===true){
            setAuthvalue(true)
        }else{
            setAuthvalue(false)
        }
    },[Authvalue])
  return (

    <AuthContext.Provider value={{setAuthvalue,Authvalue}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
