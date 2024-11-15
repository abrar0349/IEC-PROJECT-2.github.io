import React from 'react'
import { Link } from 'react-router-dom'

function FooterBotmPart() {
  // Link
  return (
    <div  className='footer-botm-part'>

        <div className="botom1">
        <p>© 2018 BoShop All right reserved. <Link href = '*'>webicodev</Link></p>
        </div>

        <div className="botom2">
        <Link to="#"><img src="https://demos.webicode.com/html/Bo-shop-html/images/card-icon.png" alt="botmCard.." /></Link>
        </div>

    </div>
  )
}

export default FooterBotmPart
