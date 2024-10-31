import React from 'react'

function CheckForm() {
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
                <input type="text" name = 'firstName' id = 'firstname'/>
              </div>
              <div className="input1">
                <label htmlFor="lastname">*Last Name:</label>
                <input type="text" name = 'lastName' id = 'lastname'/>
              </div>
             </div>

             <div className="input">
              <div className="input1">
                <label htmlFor="comp">*Company Name:</label>
                <input type="text" name = 'firstName' id = 'comp'/>
              </div>
            <div className="input1">
                <label htmlFor="adr">*Address:</label>
                <input type="text" name = 'lastName' id = 'adr'/>
            </div>
             </div>

             <div className="input">
              <div className="input1">
                <label htmlFor="city">*City / Town:</label>
                <input type="text" name = 'firstName' id = 'city'/>
              </div>
              <div className="input1">
                <label htmlFor="country">*Country:</label>
                <input type="text" name = 'lastName' id = 'country'/>
              </div>
             </div>

             <div className="input">
              <div className="input1">
                <label htmlFor="emial">*Email Address:</label>
                <input type="text" name = 'firstName' id = 'email'/>
              </div>
              <div className="input1">
                <label htmlFor="phone">*Phone Number:</label>
                <input type="text" name = 'lastName' id = 'phone'/>
              </div>
             </div>

             <input type="submit" value='Continue' />
        
           </form>

        </div>

        <div className="form-part-2">
        <div className="heading">
            <h3 className='form-h3'>Your Order</h3>
        </div>

        <div className="box">

            <div className="price">
            <h4>Rise Skinny Jeans</h4>
            <h4>$598</h4>
            </div>
            <div className="price">
            <h4>Shipping</h4>
            <h4>$598</h4>
            </div>
            <div className="price">
            <h4>VAT</h4>
            <h4>$598</h4>
            </div>
            <div className="price">
            <h4>TOTAL COST</h4>
            <h4>$598</h4>
            </div>

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
            {/* <div className="check">
                <input type="radio" id='check2'/>
                <label htmlFor="check2">CASH ON DELIVERY</label>
            </div> */}
            </div>

            <input type="submit" value='PLACE ORDER'/>
                
        </div>

        </div>
    </div>
  )
}

export default CheckForm
