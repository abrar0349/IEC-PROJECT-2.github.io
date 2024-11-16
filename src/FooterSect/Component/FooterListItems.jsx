import React from 'react'
import { Link } from 'react-router-dom'

function FooterListItems() {
  return (
    <div className='footer-container'>
          
          {/* <Link>f</Link> */}
        <div className='child-cont'>

            <div className="firstitem">
                <img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="loading" />

                <div className='para'>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="para1">
                    <p><Link to="#">Street No. 12, Newyork 12</Link></p>
                    <p><Link to="#">MD - 123, USA.</Link></p>
                    </div>
                </div>
                <div className='para'>
                <i className="fa-solid fa-phone"></i>
                    <div className="para1">
                    <p><Link to="#">1.800.123.456789</Link></p>
                    <p><Link to="#">1.800.123.456789</Link></p>
                    </div>
                </div>
                <div className='para'>
                    <i className="fa-solid fa-envelope"></i>
                    <div className="para1">
                    <p><Link to="#">info@BoShop.com</Link></p>
                    <p><Link to="#">contact@BoShop.com</Link></p>
                    </div>
                </div>

            </div>  
        
            <div className="seconditem">
                
                <h3 className='h3'>Links</h3>

                <div className="nesteditems">
                    <ul>
                        <li><Link to="#">Products</Link></li>
                        <li><Link to="#">Futures</Link></li>
                        <li><Link to="#">Blogs</Link></li>
                        <li><Link to="#">Products</Link></li>
                        <li><Link to="#">Futures</Link></li>
                        <li><Link to="#">Blogs</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="#">Find a store</Link></li>
                        <li><Link to="#">Privacy policy</Link></li>
                        <li><Link to="#">Press kits</Link></li>
                        <li><Link to="#">Find a store</Link></li>
                        <li><Link to="#">Privacy policy</Link></li>
                        <li><Link to="#">Press kits</Link></li>
                    </ul>

                </div>

            </div> 
        
            <div className="thirditem">

                <h3 className='h3'>Account Info</h3>

                <ul>
                    <li><Link to="#">Products</Link></li>
                    <li><Link to="#">Find a store</Link></li>
                    <li><Link to="#">Privacy policy</Link></li>
                    <li><Link to="#">Futures</Link></li>
                    <li><Link to="#">Blogs</Link></li>
                    <li><Link to="#">Press kit</Link></li>
                </ul>
                
            </div>

        </div>

     </div>
  )
}

export default FooterListItems
