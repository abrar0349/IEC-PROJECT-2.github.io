import React from 'react';
import './Checkoutsect.css'
import CheckSlider from './Component/CheckSlider';
import CheckForm from './Component/CheckForm'

function CheckOutSect() {
  return (
    <div className='check_container'>
      {/* <h1>CheckOutSect component is mount</h1> */}
      <CheckSlider />
      <CheckForm />
    </div>
  )
}

export default CheckOutSect
