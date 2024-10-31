import React from 'react'
import FooterCardOfSlid from './FooterCardOfSlid'

function FooterSlider() {
  return (
    <div className='slider-of-footer'>
      <FooterCardOfSlid img = {'https://demos.webicode.com/html/Bo-shop-html/images/insta-post-1.jpg'}/>
      <FooterCardOfSlid img = {'https://demos.webicode.com/html/Bo-shop-html/images/insta-post-2.jpg'}/>
      <FooterCardOfSlid img = {'https://demos.webicode.com/html/Bo-shop-html/images/insta-post-6.jpg'}/>
      <FooterCardOfSlid img = {'https://demos.webicode.com/html/Bo-shop-html/images/insta-post-3.jpg'}/>
      <FooterCardOfSlid img = {'https://demos.webicode.com/html/Bo-shop-html/images/insta-post-4.jpg'}/>
      <FooterCardOfSlid img = {'https://demos.webicode.com/html/Bo-shop-html/images/insta-post-5.jpg'}/>
    </div>
  )
}

export default FooterSlider
