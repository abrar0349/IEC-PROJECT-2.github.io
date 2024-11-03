import React, { useState } from 'react';
import './productdetails.css'

function ProductDetailSec() {

  let [cardCount , setCardCount] = useState(1)

  function countCardNo(){
    setCardCount(cardCount+1)
  }

  let obj = {
    cardId : '123',
    cardTitle : 'Mid Rise Skinny Jeans',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    cardAmount : cardCount,
    cardSalePrice : '',
    cardOriginalPrice : '',
  }
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
                <img src={obj.cardImage1Url} alt="Loding" onClick={changeImgUrl}/>
                <img src= {obj.cardImage2Url} alt="Loding" onClick={changeImgUrl}/>
                <img src= {obj.cardImage3Url} alt="Loding" onClick={changeImgUrl}/>
            </div>

        </div>

      </div>

      <div className="child-container-2">
        <h5>{obj.cardTitle}</h5>

        <p>{obj.cardDescr1}</p>

        <p>{obj.cardDescr2}</p>

        <div className="buttons">
          <input type="number" id="quantity" name="quantity" min="1"  value={cardCount} onChange={countCardNo}/>
          <button className='like'>Like</button>
          <button className='add'>Add To Card</button>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailSec
