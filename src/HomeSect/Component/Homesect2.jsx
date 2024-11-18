import React from 'react';
import '../Css-files/homesect2.css'
import CardForSect2 from '../Component/CartForSect2'
import { useSelector } from 'react-redux';



function Homesect2() {
  
let productCollectionData = useSelector( (arr) => arr.Card)
// console.log(productCollectionData.Card)


  return (
    <div className='Home-sect-2'>
      {productCollectionData.map((obj1) => { return(
        <CardForSect2 obj = {obj1} key = {obj1.cardId} />
        )})
      }
    </div>
    // <p>hello</p>
  )
}

export default Homesect2
