import React, {  useRef, useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    const [userLog , setUserLog] = useState(false)
    const [iconBtn , setIconBtn] = useState(true)

    const userLoginFunctionality = () => {
        setUserLog(false)
    }
    const userLogoutFunctionality = () => {
        setUserLog(true)
    }

let navRef = useRef()
let btnRef = useRef()

// useEffect( () => {
//     navRef.current.classList.toggle('navbar-responsive')
// },[])
let changeIcon = () => {
    navRef.current.classList.toggle('navbar-responsive')   
    setIconBtn(true)
}
let resNavbar = () => {
    navRef.current.classList.toggle('navbar-responsive')      
    setIconBtn(false)  
}


  return (
  <>
    <div className='horizontal-nav'>

            <Link to="#" className='nav-img'><img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="logo" /></Link>

            <ul className='nav-list-items navbar-responsive' ref={navRef}>

                <div className='items'>
                <li><Link to="">Home</Link></li>
                <li><Link to="/checkout">Check Out</Link></li>
                <li><Link to="#">Registeration</Link></li>
                </div>

                <div className="nav-icons">
                    {userLog ?   <Link to="#" onClick={userLoginFunctionality}>LogIn</Link> : 
                    <Link to="#" onClick = {userLogoutFunctionality}>LogOut</Link>}
                </div>
            </ul>
            
     

            { iconBtn ? <i className="fa-solid fa-bars navbar-close-btn" onClick={resNavbar} ref={btnRef}></i> :
             <i class="fa-solid fa-x navbar-close-btn" onClick={changeIcon}></i>}

    </div>

  </>     
   
  )
}

export default Navbar
