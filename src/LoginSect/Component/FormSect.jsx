import React, { useEffect, useRef } from 'react'

function FormSect() {

    const inputRef = useRef(null)
    const parentRef = useRef(null)

    useEffect(() => {
    // console.log(inputRef.current,parentRef.current)
        let input = inputRef.current;
        const parent = parentRef.current;

        const handleFocus = () => {
            parent.style.borderColor = 'gray';
            input.style.borderColor = 'gray';   
        };


        const handleBlur = () => {
            parent.style.borderColor = 'black'; 
            input.style.borderColor = 'black'; 
        };

        input.addEventListener('focus',handleFocus)
        input.addEventListener('blur',handleBlur)
    },[])
    // console.log(inputRef.current,parentRef.current)
    

    
    // input1.addEventListener('focus',() => {
    //     parent.style.borderColor = 'gray';
    // })

    // input1.addEventListener('blur', () => {
    //     parent.style.borderColor = 'black'; // Set it back to the original color
    // });
  return (
    <div className='login-sect-1'>

        <div className="sect-1-1">
            <p>We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</p>
            <ul>
                <li><a href="*"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="*"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="*"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="*"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>

        <div className="sect-1-2">
            <h4>Subscribe Our Newsletter</h4>
            <span>Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac.</span>

            <div className="sect-1-2-1" ref={parentRef}>
                <input type="text" placeholder='Enter your email address' ref={inputRef}/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default FormSect
