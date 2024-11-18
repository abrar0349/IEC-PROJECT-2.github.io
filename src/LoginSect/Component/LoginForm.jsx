import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../Slice/userSlice'
import { userLoginInAccount } from '../../Slice/findUsrSlice'

function LoginForm(props) {
  let {form , setForm} = props

  let SignUpRef = useRef()
  let LogInRef = useRef()
  let navigate = useNavigate()
  
  let usrAcountData = useSelector((arr) => arr.userAccount)
  let dispatch = useDispatch()

    // let usrAcountData = [{
    //   userName : 'Abrar khan',
    //   userEmail : 'abrar0349khan@gmail.com',
    //   userPassword : 'khan1234'
    // }];
    let initialstate = {
        userEmail : '',
        userPassword : ''
      }
    useEffect(() => {

        // let changeColor = () => {
          if(form){
            SignUpRef.current.style.color = '#2D3A4B'
            LogInRef.current.style.color = 'gray'
            // console.log('Its running in if condition')
          }else{
             SignUpRef.current.style.color = 'gray'
              LogInRef.current.style.color = '#2D3A4B'
              // console.log("Running is else condition")
               
          }
    })
        
    const [userData , setUserData] = useState(initialstate)
    const [empty , setEmpty] = useState('')
      // const navigate = useNavigate()
  
      const openUsrAccount = (e) => {
        e.preventDefault()
        // if(userData.userEmail.length <= 0){
        //     setEmpty('Email is required')
        // }else if(userData.userPassword.length <= 0){
        //   setEmpty('Password is required')
        // }else if(userData.userPassword.length < 8){
        //   setEmpty('Password length should be greater than 8 charachtor')
        // }else{}
        
          let findUsrAcount = usrAcountData.find((obj) => {
            return( obj.userEmail === userData.userEmail ||obj.userName === userData.userEmail && obj.userPassword == userData.userPassword)
          })

          if(findUsrAcount !== undefined){
          // navigate('/home')
            setEmpty('')
            // let findUsrAcount = {
            //   ...findUsrAcount,
            //   isLogIn : true
            // }
            let usrLogInActive = {
              ...findUsrAcount,
              isLogIn : true
            }
            dispatch(userLoginInAccount(usrLogInActive))
            navigate('/')

            // console.log('login form',usrLogInActive)
            // console.log(userData.userEmail,userData.userPassword)
          //  let UserAccount =  dispatch(userLogin({
          //   userNameorEmail : userData.userEmail,
          //   userPassword : userData.userPassword
          //  }
          //   ))
            // console.log('userAccount in login.jsx file',UserAccount)
          }else{
            setEmpty("In Valid UserName And Password")
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
        <a href="#" >Forget Password</a>
    </div>
    </form>
  </div>
  )
}

export default LoginForm
