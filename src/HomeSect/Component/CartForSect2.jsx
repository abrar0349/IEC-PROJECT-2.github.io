import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartForSect2(props) {
  
  let navigate = useNavigate()

  const handleId = (id , e) => {
    e.stopPropagation()
    // console.log('Chick id of every card is should be unique',id)
  }

  const handleCard = (e) => {
    e.stopPropagation()
    let obj = props.obj
    navigate('/product-details',{state : obj})
    // console.log('I am click on div element of card',obj)
  }

  let {obj} = props

  return (
    <div className='cardsect2' onClick={handleCard} >

        <div className="bgimg">
          <img src={obj. cardImage1Url} alt="card..." /> 
          {
              obj.cardIsSale ? (<button className='sale'>Sale</button> ) : null
          } 
            <button className='addcart' onClick={(e) => {handleId(obj.cardId , e)}}>Add To Card</button>
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
