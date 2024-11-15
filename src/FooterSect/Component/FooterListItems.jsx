import React from 'react'

function FooterListItems() {
  return (
    <div className='footer-container'>
          
        <div className='child-cont'>

            <div className="firstitem">
                <img src="https://demos.webicode.com/html/Bo-shop-html/images/logo-foot.png" alt="" />

                <div className='para'>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="para1">
                    <p><a to="#">Street No. 12, Newyork 12</a></p>
                    <p><a to="#">MD - 123, USA.</a></p>
                    </div>
                </div>
                <div className='para'>
                <i className="fa-solid fa-phone"></i>
                    <div className="para1">
                    <p><a to="#">1.800.123.456789</a></p>
                    <p><a to="#">1.800.123.456789</a></p>
                    </div>
                </div>
                <div className='para'>
                    <i className="fa-solid fa-envelope"></i>
                    <div className="para1">
                    <p><a to="#">info@BoShop.com</a></p>
                    <p><a to="#">contact@BoShop.com</a></p>
                    </div>
                </div>

            </div>  
        
            <div className="seconditem">
                
                <h3 className='h3'>Links</h3>

                <div className="nesteditems">
                    <ul>
                        <li><a to="#">Products</a></li>
                        <li><a to="#">Futures</a></li>
                        <li><a to="#">Blogs</a></li>
                        <li><a to="#">Products</a></li>
                        <li><a to="#">Futures</a></li>
                        <li><a to="#">Blogs</a></li>
                    </ul>

                    <ul>
                        <li><a to="#">Find a store</a></li>
                        <li><a to="#">Privacy policy</a></li>
                        <li><a to="#">Press kits</a></li>
                        <li><a to="#">Find a store</a></li>
                        <li><a to="#">Privacy policy</a></li>
                        <li><a to="#">Press kits</a></li>
                    </ul>

                </div>

            </div> 
        
            <div className="thirditem">

                <h3 className='h3'>Account Info</h3>

                <ul>
                    <li><a to="#">Products</a></li>
                    <li><a to="#">Find a store</a></li>
                    <li><a to="#">Privacy policy</a></li>
                    <li><a to="#">Futures</a></li>
                    <li><a to="#">Blogs</a></li>
                    <li><a to="#">Press kit</a></li>
                </ul>
                
            </div>

        </div>

     </div>
  )
}

export default FooterListItems
