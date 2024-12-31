import React, { useRef, useState } from 'react';
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAccount } from '../Slice/findUsrSlice';

function Navbar() {
    let userObj = useSelector((obj) => obj.setUsrInAccount)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const [iconBtn , setIconBtn] = useState(true)

    const userLoginFunctionality = (e) => {
        e.preventDefault()
        navigate('/login',{state: {isResgiester : false}})
        changeIcon(true)
        
    }

    const userLogoutFunctionality = (e) => {
        e.preventDefault()
        dispatch(userLogoutAccount({
            ...userObj,
            isLogIn : false}))
            changeIcon(true)
    }

    let navRef = useRef()
    let btnRef = useRef()

    let changeIcon = () => {
        navRef.current.classList.toggle('navbar-responsive')   
        setIconBtn(true)
    }
    let resNavbar = (e) => {
        e.preventDefault()
        navRef.current.classList.toggle('navbar-responsive')      
        setIconBtn(false)  
    }


  return (
  <>
    <div className='horizontal-nav'>

            <Link to="#" className='nav-img'><img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="logo" /></Link>

            <ul className='nav-list-items navbar-responsive' ref={navRef}>

                <div className='items'>
                    <li
                    onClick={(e) => {
                        changeIcon(true)
                    }}
                    ><Link to="/">Home</Link></li>

                    <li
                    onClick={(e) => {
                        changeIcon(true)
                    }}
                    ><Link to="/checkout">Check Out</Link></li>

                    <li
                    onClick={(e) => {
                        changeIcon(true)
                    }}
                    ><Link to="/login">Registeration</Link></li>

                </div>

                <div className="nav-icons">
                    { userObj.isLogIn ? <Link to="#" onClick = {userLogoutFunctionality}>LogOut</Link>  :  <Link to="#" onClick={userLoginFunctionality}>LogIn</Link> 
                    }
                </div>
            </ul>
            
     

            { iconBtn ? <i className="fa-solid fa-bars navbar-close-btn" onClick={resNavbar} ref={btnRef}></i> :
             <i className="fa-solid fa-x navbar-close-btn" onClick={changeIcon}></i>}

    </div>

  </>     
   
  )
}

export default Navbar
