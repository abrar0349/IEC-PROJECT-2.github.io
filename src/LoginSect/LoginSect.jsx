import React, {  useState } from 'react';
import './loginsec.css'
import LoginForm from './Component/LoginForm';
import EmailSubSect from '../Component/EmialSubSect';
import SignUpForm from './Component/SignUpForm';
import { useLocation } from 'react-router-dom';

function LoginSect() {

  let [changeForm , setChangeForm] = useState(true)

  let state = useLocation()

  // useEffect(() => {
  //   console.log(state)
  // })

//  useEffect(() => {
//   console.log(changeForm)
//  },[changeForm])

  return (
    <>
     { changeForm ? 
        <LoginForm form = {changeForm} setForm = {setChangeForm}/> :
        <SignUpForm form = {changeForm} setForm = {setChangeForm}/> 
     }
        <EmailSubSect />

    </>
  )
}

export default LoginSect
