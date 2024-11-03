import React from 'react'

function CartForSect2(props) {

  const handleId = (id , e) => {
    e.stopPropagation()
    console.log('Chick id of every card is should be unique',id)
  }

  const handleCard = (e) => {
    e.stopPropagation()
    console.log('I am click on div element of card')
  }

  let {obj} = props

  // console.log(obj.imgUrl)
  return (
    <div className='cardsect2' onClick={handleCard}>

        <div className="bgimg">
          <img src={obj.imgUrl} alt="card..." /> 
          {
              obj.isSale ? (<button className='sale'>Sale</button> ) : null
          } 
            <button className='addcart' onClick={(e) => {handleId(obj.cardId , e)}}>Add To Card</button>
        </div>

        <div className="cardbotmpart">
            <h3>{obj.cardTitle}</h3>
            <div className="details">
            {
              obj.isSale ? (<p className="prices"> <strike><sup>$</sup>{obj.originalPrice}</strike>  <span ><sup>$</sup>{obj.salePrice}</span></p> ) : (<p className="prices"> {obj.originalPrice} </p>)
            }
                <p>View Details</p>
                {/* <p className='prices'> <strike><sup>$</sup>299.00</strike>  <span ><sup>$</sup>199.00</span></p>
                <p>View Details</p> */}
            </div>
        </div>
    </div>
  )
}

export default CartForSect2
