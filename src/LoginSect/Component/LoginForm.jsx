import React, { useState } from 'react'

function LoginForm() {
    let initialstate = {
        username : '',
        password : ''
      }
      const [userData , setUserData] = useState(initialstate)
      // console.log(userData)
      const handleChange = (event) => {
        if(event.target.name === 'userName'){
          setUserData({...userData, username : event.target.value})
        }else{
          setUserData({...userData,password : event.target.value})
        }
      }

  return (
<div className='login-container'>

    <div className="heading">
      <h2>   <span> Login  <span className='line'> / </span>    </span> <span>Register</span></h2>
    </div>

    <form>
    <label htmlFor="User"> UserName Or Email</label>
    <input type="text" name = 'userName' onChange={handleChange}/>
    <label htmlFor="password"> Password</label>
    <input type="password" name = 'password' onChange={handleChange}/>
    <div className='btn'>
        <button>LOGIN</button>
        <a href="#" >Forget Password</a>
    </div>
    </form>
</div>
  )
}

export default LoginForm
