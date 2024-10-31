import React from 'react';
import '../Css-files/homesect2.css'
import CardForSect2 from '../Component/CartForSect2'



function Homesect2() {
let productCollectionData = [
  {
    imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-1.jpg",
    isSale : true,
    salePrice : '199.00',
    cardTitle : 'The Child Special T-Shirt',
    originalPrice : '299.00',
  },
  {
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-2-1.jpg",
  isSale : false,
  salePrice : '199.00',
  cardTitle : 'Ladies Sandals Clean',
  originalPrice : '299.00',
},
{
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-4.jpg",
  isSale : true,
  salePrice : '199.00',
  cardTitle : 'Neck Skaff Full',
  originalPrice : '299.00',
},
{
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-5-1.jpg",
  isSale : false,
  salePrice : '199.00',
  cardTitle : 'Man Fashion Winter Blue',
  originalPrice : '299.00',
},
{
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-7.jpg",
  isSale : false,
  salePrice : '199.00',
  cardTitle : 'Angry T-Shites',
  originalPrice : '299.00',
},
{
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-8-1.jpg",
  isSale : true,
  salePrice : '199.00',
  cardTitle : 'Child Dress T-Shirts',
  originalPrice : '299.00',
},
{
  imgUrl :"https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-6-1.jpg",
  isSale : false,
  salePrice : '199.00',
  cardTitle : 'Bags For Women',
  originalPrice : '299.00',
},
{
  imgUrl : "https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-5-1.jpg",
  isSale : false,
  salePrice : '199.00',
  cardTitle : 'Excercies T-Shirts For Men',
  originalPrice : '299.00',
},]

  return (
    <div className='Home-sect-2'>
      { productCollectionData.map((obj1) => { return(
        <CardForSect2 obj = {obj1}/>
        )})
      }
    </div>
  )
}

export default Homesect2
