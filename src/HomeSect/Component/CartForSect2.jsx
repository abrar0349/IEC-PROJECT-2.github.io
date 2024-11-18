import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userAddToCard } from '../../Slice/findUsrSlice'

function CartForSect2(props) {
let usrObj = useSelector( (obj) => obj.setUsrInAccount)
// console.log('This is cartForsect2 of home compoent',usrObj)
let dispatch = useDispatch()
  let navigate = useNavigate()

  const handleAddToCard = (obj , e) => {
    e.stopPropagation()
    let objForCheckOut = {
      cardName : obj.cardTitle,
      cardPrice : obj.cardSalePrice,
    }
    console.log('Chick id of every card is should be unique',objForCheckOut)
    dispatch(userAddToCard(objForCheckOut))
  }

  const handleCard = (e) => {
    e.stopPropagation()
    let obj = props.obj
    navigate('/product-details',{state : obj})
  }

  let {obj} = props

  return (
    <div className='cardsect2' onClick={handleCard} >

        <div className="bgimg">
          <img src={obj.cardImage1Url} alt="card..." /> 
          {
              obj.cardIsSale ? (<button className='sale'>Sale</button> ) : null
          } 
            <button className='addcart' onClick={(e) => {handleAddToCard(props.obj,e)}}>Add To Card</button>
        </div>

        <div className="cardbotmpart">
            <h3>{obj.cardTitle}</h3>
            <div className="details">
            {
              obj.cardIsSale ? (<p className="prices"> <strike><sup>$</sup>{obj.cardOriginalPrice}</strike>  <span ><sup>$</sup>{obj.cardSalePrice}</span></p> ) : (<p className="prices"> {obj.cardOriginalPrice} </p>)
            }
                <p>View Details</p>

            </div>
        </div>
    </div>
  )
}

export default CartForSect2
