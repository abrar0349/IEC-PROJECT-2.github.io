import React from 'react';
import '../Css-files/homesect2.css'
import CardForSect2 from '../Component/CartForSect2'

let productCollectionData = [
  {
    cardId : '014',
    cardTitle : 'Mid Rise Skiny Jeans',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-4-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '011',
    cardTitle : 'The Child Special T-Shirt',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '012',
    cardTitle : 'Ladies Sandals Clean',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-2-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '013',
    cardTitle :  'Neck Skaff Full',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-3-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '015',
    cardTitle :  'Angry T-Shites',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-7.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '016',
    cardTitle :  'Child Dresses',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-8-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '017',
    cardTitle :  'Bags For Women',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-6-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },
  {
    cardId : '018',
    cardTitle :  'Exersice T-Shirtes For Man',
    cardImage1Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-5-1.jpg",
    cardImage2Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1-1.jpg",
    cardImage3Url : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    cardDescr1 :'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.',
    cardDescr2 : 'These words are here to provide the reader with a basic impression of  how actual text will appear in its final presentation.',
    cardIsSale : true,
    // cardAmount : cardCount,
    cardSalePrice : '199.00',
    cardOriginalPrice : '299.00',
  },]

function Homesect2_1() {
  return (
    <div className='Home-sect-2'>
    { productCollectionData.map((obj1) => { return(
        <CardForSect2 obj = {obj1} key = {obj1.cardId} />
        )})
      }

    </div>
  )
}

export default Homesect2_1
