import React from 'react';
import './footersect.css'
import FooterSlider from './Component/FooterSlider';
import FooterListItems from './Component/FooterListItems';
import FooterBotmPart from './Component/FooterBotmPart';

function FooterSect() {
  return (
    <div className='footersect'>

      <div className="footer1">
        <FooterSlider />
      </div>
      <div className="footer2">
        <FooterListItems />
      </div>
      <div className="footer3">
        <FooterBotmPart />
      </div>

    </div>
  )
}

export default FooterSect
