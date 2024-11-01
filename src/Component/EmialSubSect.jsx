import React, { useEffect, useRef, useState } from 'react'

import './emailsubsect.css'

function EmailSubSect() {

    const inputRef = useRef()
    const parentRef = useRef()

    let [email , setEmail] = useState({userEmail : ''})

    useEffect(() => {
        let input = inputRef.current;
        const parent = parentRef.current;

        const handleFocus = () => {
            parent.style.borderColor = 'gray';
            input.style.borderColor = 'gray';   
            console.log('foucus function is running')
        };

        const handleBlur = () => {
            parent.style.borderColor = 'black'; 
            input.style.borderColor = 'black'; 
            console.log('blur function')
        };

        input.addEventListener('focus',handleFocus)
        input.addEventListener('blur',handleBlur)
    
    },[])

    let emailColl = (e) => {
        // console.log('email is running')
        setEmail({userEmail : e.target.value})
        console.log(email.userEmail)
    }

    const emailDataInArray = () => {
        console.log('-----------User Email----------------',email.userEmail)
    }

  return (
    <div className='login-sect-1'>

        <div className="sect-1-1">
            <p>We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</p>
            <ul>
                <li><a href="*"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="*"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="*"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="*"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>

        <div className="sect-1-2">
            <h4>Subscribe Our Newsletter</h4>
            <span>Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac.</span>

            <div className="sect-1-2-1" ref={parentRef}>
                <input type="text" placeholder='Enter your email address' ref={inputRef} onChange={emailColl}
                value={email.userEmail}/>
                <button onClick={emailDataInArray}>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default EmailSubSect
