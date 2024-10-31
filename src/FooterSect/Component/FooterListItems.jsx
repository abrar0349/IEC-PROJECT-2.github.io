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
                    <p><a href="*">Street No. 12, Newyork 12</a></p>
                    <p><a href="*">MD - 123, USA.</a></p>
                    </div>
                </div>
                <div className='para'>
                <i className="fa-solid fa-phone"></i>
                    <div className="para1">
                    <p><a href="*">1.800.123.456789</a></p>
                    <p><a href="*">1.800.123.456789</a></p>
                    </div>
                </div>
                <div className='para'>
                    <i className="fa-solid fa-envelope"></i>
                    <div className="para1">
                    <p><a href="*">info@BoShop.com</a></p>
                    <p><a href="*">contact@BoShop.com</a></p>
                    </div>
                </div>

            </div>  
        
            <div className="seconditem">
                
                <h3 className='h3'>Links</h3>

                <div className="nesteditems">
                    <ul>
                        <li><a href="*">Products</a></li>
                        <li><a href="*">Futures</a></li>
                        <li><a href="*">Blogs</a></li>
                        <li><a href="*">Products</a></li>
                        <li><a href="*">Futures</a></li>
                        <li><a href="*">Blogs</a></li>
                    </ul>

                    <ul>
                        <li><a href="*">Find a store</a></li>
                        <li><a href="*">Privacy policy</a></li>
                        <li><a href="*">Press kits</a></li>
                        <li><a href="*">Find a store</a></li>
                        <li><a href="*">Privacy policy</a></li>
                        <li><a href="*">Press kits</a></li>
                    </ul>

                </div>

            </div> 
        
            <div className="thirditem">

                <h3 className='h3'>Account Info</h3>

                <ul>
                    <li><a href="*">Products</a></li>
                    <li><a href="*">Find a store</a></li>
                    <li><a href="*">Privacy policy</a></li>
                    <li><a href="*">Futures</a></li>
                    <li><a href="*">Blogs</a></li>
                    <li><a href="*">Press kit</a></li>
                </ul>
                
            </div>

        </div>

     </div>
  )
}

export default FooterListItems
