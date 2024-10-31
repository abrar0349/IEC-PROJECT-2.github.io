import React from 'react';
import '../Css-files/homesect2.css'
import CardForSect2 from '../Component/CartForSect2'

let obj1 ={
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
  isSale : true,
  salePrice : '17890.00',
  cardTitle : 'This is new card ok',
  originalPrice : '1234.00',
}

function Homesect2_1() {
  return (
    <div className='Home-sect-2'>
      <CardForSect2 obj = {obj1}/>
      <CardForSect2 obj = {obj1}/>
      <CardForSect2 obj = {obj1}/>
      <CardForSect2 obj = {obj1}/>
      <CardForSect2 obj = {obj1}/>

    </div>
  )
}

export default Homesect2_1
