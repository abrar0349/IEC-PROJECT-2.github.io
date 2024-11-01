import React, { useEffect, useRef, useState } from 'react';
import './navbar.css'

function Navbar() {
    let [display , setDisplay] = useState('none')
    let inlineStyle = {display:display}

// let navbarRef = useRef()
let btnRef = useRef()

let handlesNav = () => {
    if(inlineStyle.display == 'none'){
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

            <a href="#" className='nav-img'><img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="logo" /></a>
            <ul className='nav-list-items'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Card</a></li>
                <li><a href="#">Check Out</a></li>
            </ul>
            <i className="fa-solid fa-bars navbar-close-btn" ref={btnRef}></i>
            {/* <i class=""></i> */}

    </div>
    <div className="vertical-nav" style={inlineStyle} >
        <ul className='nav-list-items'>
        <li><a href="#">Home</a></li>
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Card</a></li>
                <li><a href="#">Check Out</a></li>
        </ul>
    </div>
  </>     
   
  )
}

export default Navbar
