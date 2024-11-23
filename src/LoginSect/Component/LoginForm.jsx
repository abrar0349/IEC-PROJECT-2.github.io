import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLoginInAccount } from '../../Slice/findUsrSlice'

function LoginForm(props) {
  let {form , setForm} = props

  let SignUpRef = useRef()
  let LogInRef = useRef()
  let navigate = useNavigate()
  
  let usrAcountData = useSelector((arr) => arr.userAccount)

  let dispatch = useDispatch()

    let initialstate = {
        userEmail : '',
        userPassword : ''
      }
    useEffect(() => {

          if(form){
            SignUpRef.current.style.color = '#2D3A4B'
            LogInRef.current.style.color = 'gray'
          }else{
             SignUpRef.current.style.color = 'gray'
              LogInRef.current.style.color = '#2D3A4B'
          }
    })
        
    const [userData , setUserData] = useState(initialstate)
    const [empty , setEmpty] = useState('')
  
      const openUsrAccount = (e) => {
        e.preventDefault()

          let findUsrAcount = usrAcountData.find( (obj) => {
            return( (obj.userEmail === userData.userEmail || obj.userName === userData.userEmail) && obj.userPassword === userData.userPassword )
          }) 

          if(findUsrAcount !== undefined){
        
            setEmpty('')
            
            let usrLogInActive = {
              ...findUsrAcount,
              isLogIn : true
            }
            dispatch(userLoginInAccount(usrLogInActive))
            navigate('/')

          }else{

            setEmpty("In Valid UserName and Password")
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
       <h2>   <span ref = {LogInRef} onClick={() => setForm(true)}> Login  <span className='line'> / </span>  </span>   <span ref={SignUpRef} onClick={() => setForm(false)}>Register</span></h2>
    </div>

    <form>
      <label htmlFor="User"> UserName Or Email</label>
      <input type="text" name = 'userName' onChange={handleChange}/>
      <label htmlFor="password"> Password</label>
      <input type="password" name = 'password' onChange={handleChange}/>

      {empty.length <= 0 ? null :  <p className='loginpage-error'>{empty}</p>}

      <div className='btn'>
          <button onClick={openUsrAccount}>LOGIN</button>
          <Link to ="#" >Forget Password</Link>     
      </div>
    </form>

  </div>
  )
}

export default LoginForm
