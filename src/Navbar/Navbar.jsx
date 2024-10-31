import React, { useEffect, useRef } from 'react';
import './navbar.css'

function Navbar() {

    let barbtn = useRef()
    let vertical_nav = useRef()
    useEffect(() => {
        let btn =  barbtn.current
        console.log(btn)

        let div = vertical_nav.current

        btn.addEventListener('click',() => {
            let displayStyle = getComputedStyle(div).display; // Get the computed display style
            console.log(displayStyle === 'none'); 

            if(displayStyle === 'none'){
                div.style.display = 'flex'
            }else{
                div.style.display = 'none'
            }

    
        })
    },[])
  return (
    <div className='navbar'>
        <div className='horizontal-nav'>

            <a href="#" className='nav-img'><img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="logo" /></a>
            <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product Details</a></li>
        <li><a href="#">Card</a></li>
        <li><a href="#">Check out</a></li>
            </ul>
            <i className="fa-solid fa-bars navbar-close-btn" ref={barbtn} ></i>
            {/* <i class=""></i> */}

        </div>
        <div className='vertical-nav' ref={vertical_nav}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product Details</a></li>
            <li><a href="#">Card</a></li>
            <li><a href="#">Check out</a></li>      
        </ul>
        </div>
    </div>
  )
}

export default Navbar
