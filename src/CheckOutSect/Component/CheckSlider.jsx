import React from 'react'
import { useSelector } from 'react-redux'

function CheckSlider() {
  let usrObj = useSelector((obj) => obj.setUsrInAccount)
  console.log('this is checkout file',usrObj)
  return (
    <div className='check_slider_container'>
        
      <h3 className='form-h3'>CheckOut your Order</h3>

      <ul className='form-imgitems'>
         <li className='itm'>Home</li>
         <li>/</li>
         <li className='itm'>Shop</li>
         <li>/</li>
         <li className='itm'>CHECKOUT</li>
      </ul>

    </div>
  )
}

export default CheckSlider
