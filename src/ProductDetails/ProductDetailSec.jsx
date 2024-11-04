import React, { useState } from 'react';
import './productdetails.css'
import { useLocation } from 'react-router-dom';

function ProductDetailSec() {
  let location = useLocation()
  console.log(location.state)
  
  // let [cardCount , setCardCount] = useState(1)

  function countCardNo(){
    // setCardCount(cardCount+1)
  }
let obj = location.state

  let [imageChanger , setImageChanger] = useState(obj.cardImage1Url)
  function changeImgUrl(e){
    // console.log(e.target.src)
     setImageChanger(e.target.src)
  }
  return (
    <div className='products-details-container'>

      <div className="child-container-1">
        <div className="images">

            <img src= {imageChanger} alt="Loding" className='mainimage'/>

            <div className="buttons">
                <img src= {obj.cardImage2Url} alt="Loding" onClick={changeImgUrl}/>
                <img src={obj.cardImage1Url} alt="Loding" onClick={changeImgUrl}/>
                <img src= {obj.cardImage3Url} alt="Loding" onClick={changeImgUrl}/>
            </div>

        </div>

      </div>

      <div className="child-container-2">
        <h5>{obj.cardTitle}</h5>

        <p>{obj.cardDescr1}</p>

        <p>{obj.cardDescr2}</p>

        <div className="buttons">
          <input type="number" id="quantity" name="quantity" min="1"  onChange={countCardNo}/>
          <button className='like'>Like</button>
          <button className='add'>Add To Card</button>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailSec
