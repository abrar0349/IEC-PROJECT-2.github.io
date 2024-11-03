import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    let initialstate = {
        userEmail : '',
        userPassword : ''
      }
      const [userData , setUserData] = useState(initialstate)
      const [empty , setEmpty] = useState('')
      const navigate = useNavigate()
  
      const openUsrAccount = (e) => {
        e.preventDefault()
        if(userData.userEmail.length <= 0){
            setEmpty('Email is required')
        }else if(!userData.userEmail.includes('@gmail.com')){
          setEmpty('Should add @gmail.com at then end')
        }else if(userData.userPassword.length <= 0){
          setEmpty('Password is required')
        }else if(userData.userPassword.length <= 8){
          setEmpty('Password length should be greater than 8 charachtor')
        }else{
          // console .log(userData)
          navigate('/home')
        }


      }

      const handleChange = (event) => {
        if(event.target.name === 'userName'){
          setUserData({...userData, userEmail : event.target.value})
        }else{
          setUserData({...userData,userPassword : event.target.value})
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
    {empty.length <= 0 ? null :  <p className='loginpage-error'>{empty}</p>}
    <div className='btn'>
        <button onClick={openUsrAccount}>LOGIN</button>
        <a href="#" >Forget Password</a>
    </div>
    </form>
</div>
  )
}

export default LoginForm
