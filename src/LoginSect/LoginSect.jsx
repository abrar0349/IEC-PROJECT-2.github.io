import React, { useEffect, useState } from 'react';
import './loginsec.css'
import LoginForm from './Component/LoginForm';
import EmailSubSect from '../Component/EmialSubSect';
import SignUpForm from './Component/SignUpForm';

function LoginSect() {

  let [changeForm , setChangeForm] = useState(true)


 useEffect(() => {
  console.log(changeForm)
 },[changeForm])

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
