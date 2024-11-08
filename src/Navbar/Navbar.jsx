import React, { useEffect, useRef, useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    let [display , setDisplay] = useState('none')
    let inlineStyle = {display:display};

    const [userLog , setUserLog] = useState(true)

    const userLoginFunctionality = () => {
        setUserLog(false)
    }
    const userLogoutFunctionality = () => {
        setUserLog(true)
    }

// let navbarRef = useRef()
let btnRef = useRef()

let handlesNav = () => {
    if(inlineStyle.display === 'none'){
        setDisplay('block')
        console.log('Correct')
    }else{
        setDisplay('none')
        console.log('Wrong')
    }
}

useEffect(() => {
let btn = btnRef.current;

btn.addEventListener('click',handlesNav)

return () => {
    btn.removeEventListener('click',handlesNav,true)
}

},[display])

  return (
  <>
    <div className='horizontal-nav'>

            <Link href="#" className='nav-img'><img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="logo" /></Link>
            <ul className='nav-list-items'>
                <li><Link href="#">Home</Link></li>
                {/* <li><Link href="#">Product Details</Link></li> */}
                <li><Link href="#">Card</Link></li>
                <li><Link href="#">Check Out</Link></li>
            </ul>
            <i className="fa-solid fa-bars navbar-close-btn" ref={btnRef}></i>
            {/* <i class=""></i> */}
            <div className="nav-icons">
              {userLog ?   <Link href="#" onClick={userLoginFunctionality}>LogIn</Link> : 
                <Link href="#" onClick = {userLogoutFunctionality}>LogOut</Link>}
            </div>

    </div>
    <div className="vertical-nav" style={inlineStyle} >
        <ul className='nav-list-items'>
        <li><Link href="#">Home</Link></li>
                <li><Link href="#">Product Details</Link></li>
                <li><Link href="#">Card</Link></li>
                <li><Link href="#">Check Out</Link></li>
                <div className='nav-icons'>
                    {userLog ?   <Link href="#">LogIn</Link> : 
                    <Link href="#" onClick={userLoginFunctionality}>LogOut</Link>}
                 </div>
        </ul>

    </div>
  </>     
   
  )
}

export default Navbar
