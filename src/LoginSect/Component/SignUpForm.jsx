import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUsrAcc } from '../../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function SignUpForm(props) {

    let {form , setForm} = props

    let usrAcountData = useSelector((arr) => arr.userAccount)
    let dispatch = useDispatch()
    let navigate = useNavigate()


    let initialstate = {
      userName : '',
      userGmail : '',
      userPassword : '',
      userCheckOut : [],
      isLogIn : false
      }
      const [userData , setUserData] = useState(initialstate)
      const [empty , setEmpty] = useState('')
      let SignUpRef = useRef()
      let LogInRef = useRef()

      useEffect(() => {

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

  
      const openUsrAccount = (e) => {
        e.preventDefault()
        if(userData.userGmail.length <= 0){
          setEmpty('Email is required')
        }else if (!userData.userGmail.includes('@gmail.com') ){
          setEmpty("Email Must Include @gmail.com")
        }else if(userData.userName.length <= 0){
          setEmpty('UserName is required')
        }else if(userData.userPassword.length <= 0){
          setEmpty('Password is required')
        }else if(userData.userPassword.length < 8){
          setEmpty('Password length should be greater than 8 charachtor')
        }else{   
            setEmpty("")
            let usrExist = usrAcountData.find( (usr) => usr.userGmail === userData.userGmail)
            // console.log('this is find Data',usrExist)
            if(usrExist === undefined){
              // console.log('now if condition is running',usrExist)
              dispatch(createUsrAcc(userData))
              navigate('/')
            }else{
              setEmpty('Email is already use')
            }
            // console.log(usrAcountData)
        
        }
        // console.log('------End of Function-------')
      }

      const handleChange = (event) => {
        if(event.target.name === 'userName'){
          setUserData({...userData, userName : event.target.value})
        }else if(event.target.name === 'userEmail'){
          setUserData({...userData , userGmail : event.target.value })
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
    <label htmlFor="name"> UserName </label>
    <input type="text" id = 'name' name = 'userName' onChange={handleChange}/>

    <label htmlFor="email"> Email </label>
    <input type="text" name = 'userEmail' id='email' onChange={handleChange}/>

    <label htmlFor="password"> Password</label>
    <input type="password" name = 'password'id = 'password' onChange={handleChange}/>

    {empty.length <= 0 ? null :  <p className='loginpage-error'>{empty}</p>}
    <div className='btn'>
        <button onClick={openUsrAccount}>SignUp</button>
        {/* <a href="#" >Forget Password</a> */}
    </div>
    </form>
</div>
  )
}

export default SignUpForm
