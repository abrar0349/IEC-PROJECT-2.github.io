import React from 'react';
import '../Css-files/homesect2.css'
import CardForSect2 from '../Component/CartForSect2'
import { useSelector } from 'react-redux';

 // {
  //   cardId : '017',
  //   cardTitle :  'Angry T-Shites',
  //   cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-5-1.jpg",
  //   cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
  //   cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
  //   cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
  //   cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
  //   cardIsSale : true,
  //   // cardAmount : cardCount,
  //   cardSalePrice : '199.00',
  //   cardOriginalPrice : '299.00',
  // }


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
