import React from 'react';
import '../Css-files/homesect2.css'
import CardForSect2 from './CartForSect2'
import { useSelector } from 'react-redux';



function Homesect2part1() {

  let productCollectionData = useSelector((arr) => arr.Card2)
  return (
    <div className='Home-sect-2'>
    { productCollectionData.map((obj1) => { return(
        <CardForSect2 obj = {obj1} key = {obj1.cardId} />
        )})
      }

    </div>
  )
}

export default Homesect2part1
