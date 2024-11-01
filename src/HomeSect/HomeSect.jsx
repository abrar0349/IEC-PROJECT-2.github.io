import React, { useEffect, useRef, useState } from 'react';
import './homesect.css'
import Homesect1 from './Component/Homesect1';
import Homesect2 from './Component/Homesect2';
import Homesect2_1 from './Component/Homesect2_1';
import EmailSubSect from '../Component/EmialSubSect';
// import FormSect from '../LoginSect/Component/FormSect';
// import HomeSlider from './Component/HomeSlider';

function HomeSect() {
  let liAsBtn1 = useRef()
  let liAsBtn2 = useRef()

  let [component , setComponent] = useState(true)

  useEffect(() => {
    let btn1 = liAsBtn1.current
    let btn2 = liAsBtn2.current

    let handle1 = (e) => {
      // console.log(e.target)
      btn2.style.color = 'black'
      btn2.style.borderBottom = 'none'
      btn2.style.paddingBottom = '10px'

      btn1.style.color = 'yellow'
      btn1.style.borderBottom = '2px solid yellow'
      btn1.style.paddingBottom = '10px'

      setComponent(true)
    }

    let handle2 = (e) => {
      // console.log(e.target)
      btn1.style.borderBottom = 'none'
      btn1.style.color = 'black'
      
      btn2.style.color = 'yellow'
      btn2.style.borderBottom = '2px solid yellow'
      btn2.style.paddingBottom = '10px'
      setComponent(false)
    }
    
    btn1.addEventListener('click',handle1)
    btn2.addEventListener('click',handle2)
    
  },[])

  return (
    <div>

        <div className="Home-section1">
            <Homesect1 />
        </div>

        <div className="Home-section2">
              <h4>Best Collection Arrived</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula.
              </p>
              <ul>
                <li className='active' ref={liAsBtn1}>Best Selling</li>
                <li ref={liAsBtn2}>Hand Made Items</li>
              </ul>
             
             {component ? <Homesect2 /> : <Homesect2_1/>} 
        </div>

        <div className="Home-section3">
          <EmailSubSect />
        </div>
      
    </div>
  )
}

export default HomeSect
