import React, {  useState } from 'react';
import './productdetails.css'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productIncreament, userAddToCard } from '../Slice/findUsrSlice';



function ProductDetailSec() {
  let location = useLocation()
  // let usrObj = useSelector((obj) => obj.setUsrInAccount)
  let dispatch = useDispatch()
  const [cardCount , setCardCount] = useState(1)

  let obj = location.state
  
  // let [cardCount , setCardCount] = useState(1)
  const addIntoCard = () => {
    // e.stopPropagation()
    let objForCheckOut = {
      cardName : obj.cardTitle,
      cardId : obj.cardId,
      cardPrice : obj.cardSalePrice,
      productAmount : cardCount
    }
    // console.log('Chick id of every card is should be unique',objForCheckOut)
    dispatch(userAddToCard(objForCheckOut))
  }

  function countCardNo(e){
    // e.target.value += 1
    setCardCount((prevCount) => prevCount + 1);
    // let no = usrObj.productAmount += 1
    dispatch(productIncreament({count : e.target.value , condition1 : obj.cardId}))
    // console.log()
  }

  let [imageChanger , setImageChanger] = useState(obj.cardImage1Url)
  function changeImgUrl(e){
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
          <input type="number" id="quantity" name="quantity" min="1"  value = {cardCount} onChange={countCardNo}/>
          <button className='like'>Like</button>
          <button className='add' onClick={(e) => {addIntoCard(e)}} >Add To Card</button>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailSec
