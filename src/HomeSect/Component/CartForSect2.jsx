import React from 'react'

function CartForSect2(props) {

  // console.log(props.obj.imgUrl)
  return (
    <div className='cardsect2'>

        <div className="bgimg">
          <img src={props.obj.imgUrl} alt="card..." /> 
          {
              props.obj.isSale ? (<button className='sale'>Sale</button> ) : null
            } {/* <button className='sale'>Sale</button> */}
            <button className='addcart'>Add To Card</button>
        </div>

        <div className="cardbotmpart">
            <h3>{props.obj.cardTitle}</h3>
            <div className="details">
            {
              props.obj.isSale ? (<p className="prices"> <strike><sup>$</sup>{props.obj.originalPrice}</strike>  <span ><sup>$</sup>{props.obj.salePrice}</span></p> ) : (<p className="prices"> {props.obj.originalPrice} </p>)
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
