import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRemoverToCard } from '../../Slice/findUsrSlice'

function CheckForm() {

  let usrObj = useSelector( (obj) => obj.setUsrInAccount)
  let dispatch = useDispatch()

  // let totalPrice;
  let totalPrice = usrObj.userCheckOut.reduce( (prev, newPrice) => {
    console.log(newPrice.productAmount)
    let totalPrice = parseFloat(newPrice.cardPrice) * Number(newPrice.productAmount)
    return(prev +  totalPrice)
  },0)

  let initialies  = {
    usrFirstName : '',
    usrLastName : '',
    usrcompName : '',
    usrAddr : '',
    usrCity : '',
    usrCountry : '',
    usrEmail : '',
    usrPhone : '',
  }

  let [userBillDetails , setUserBillDetials] = useState(initialies)
  let [empty , setEmpty] = useState('')

  function billInfoDataSub(e) {
    e.preventDefault()
    if(userBillDetails.usrEmail.length <= 0){
        setEmpty('Email is required')
      }else if(!userBillDetails.usrEmail.includes('@gmail.com')){
        setEmpty('Should add @gmail.com at then end')
      }else if(userBillDetails.usrPhone.length <= 0){
        setEmpty('Phone Number is required')
      }else if(userBillDetails.usrAddr.length <= 0){
        setEmpty('Please Give Us Your Address')
      }else{
        setEmpty('')
      }
  }

  let takeUsrInpt = (e) => {

    if(e.target.id === 'firstname'){
        setUserBillDetials({...userBillDetails,usrFirstName : e.target.value})
      }else if(e.target.id === 'lastname'){
        setUserBillDetials({...userBillDetails,usrLastName : e.target.value})
      }else if(e.target.id === 'comp'){
        setUserBillDetials({...userBillDetails,usrcompName : e.target.value})
      }else if(e.target.id === 'adr'){
        setUserBillDetials({...userBillDetails,usrAddr : e.target.value})
      }else if(e.target.id === 'city'){
        setUserBillDetials({...userBillDetails,usrCity : e.target.value})
      }else if(e.target.id === 'country'){
        setUserBillDetials({...userBillDetails,usrCountry : e.target.value})
      }else if(e.target.id === 'email'){
        setUserBillDetials({...userBillDetails,usrEmail : e.target.value})
      }else{
        setUserBillDetials({...userBillDetails,usrPhone : e.target.value})
      }
 
  }

  return (
    <div className='check_form-container'>
        <div className="form-part-1"> 
          <div className="heading">
            <h3 className='form-h3'>Billing Information</h3>
          </div>

    {/* <span className='yellowline'>--</span> */}

           <form>
             <div className="input">
              <div className="input1">
                <label htmlFor="firstname">*First Name:</label>
                <input type="text" id = 'firstname' value={userBillDetails.usrFirstName} onChange={takeUsrInpt}/>
              </div>
              <div className="input1">
                <label htmlFor="lastname">*Last Name:</label>
                <input type="text" id = 'lastname' onChange={takeUsrInpt}/>
              </div>
             </div>

             <div className="input">
              <div className="input1">
                <label htmlFor="comp">*Company Name:</label>
                <input type="text" id = 'comp' onChange={takeUsrInpt}/>
              </div>
              <div className="input1">
                <label htmlFor="adr">*Address:</label>
                <input type="text" id = 'adr' onChange={takeUsrInpt}/>
              </div>
             </div>

             <div className="input">
              <div className="input1">
                <label htmlFor="city">*City / Town:</label>
                <input type="text"  id = 'city' onChange={takeUsrInpt}/>
              </div>
              <div className="input1">
                <label htmlFor="country">*Country:</label>
                <input type="text"  id = 'country' onChange={takeUsrInpt}/>
              </div>
             </div>

             <div className="input">
              <div className="input1">
                <label htmlFor="emial">*Email Address:</label>
                <input type="text"  id = 'email' onChange={takeUsrInpt}/>
              </div>
              <div className="input1">
                <label htmlFor="phone">*Phone Number:</label>
                <input type="text" id = 'phone' onChange={takeUsrInpt}/>
              </div>
             </div>

             { empty.length <= 0 ? null : <p style={{color : 'red',fontWeight : 'bold'}}>{empty}</p>}

             <input type="submit" value='Continue' onClick={billInfoDataSub}/>
              
           </form>

        </div>

        <div className="form-part-2">
        <div className="heading">
            <h3 className='form-h3'>Your Order</h3>
        </div>

        <div className="box">
          {
          usrObj.isLogIn ?   usrObj.userCheckOut.length > 0 ? usrObj.userCheckOut.map( (obj,id) => {
            return(
                <div className="price" key={id}>
                <h4>{obj.cardName}</h4>
                <h4>${parseFloat(obj.cardPrice * obj.productAmount)}</h4>
                <i class="fa-solid fa-trash" onClick={() => dispatch(userRemoverToCard(id))}></i>
                </div>
            )
          }) : null : null
          }
            {usrObj.isLogIn ? totalPrice > 0 ? <div className="price">
            <h4>TOTAL COST</h4>
            <h4>${totalPrice}</h4>
            </div>: null : null}

            <div className="checkboxs">
            <div className="check">
                <input type="radio" id='check1'/>
                <label htmlFor="check1">DIRECT BANK TRANSFER</label>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam atque est incidunt, error iste praesentium Saepe.</p>

            <div className="check">
                <input type="radio" id='check2'/>
                <label htmlFor="check2">CASH ON DELIVERY</label>
            </div>
            <div className="check">
                <input type="radio" id='check3'/>
                <label htmlFor="check3">PAYPAL</label>
            </div>

            </div>

            <input type="submit" value='PLACE ORDER'/>
                
        </div>

        </div>
    </div>
  )
}

export default CheckForm