import './App.css';
import Navbar from './Navbar/Navbar';
import HomeSect from './HomeSect/HomeSect';
import CheckOutSect from './CheckOutSect/CheckOutSect';
import LoginSect from './LoginSect/LoginSect';
import FooterSect from './FooterSect/FooterSect';
import { Route,  Routes } from 'react-router-dom';
import ProductDetailSec from './ProductDetails/ProductDetailSec';



function App() {
  return (
     <>

        <Navbar />
        

        <Routes>
           <Route path = '' element = { <LoginSect />}/>
           <Route path = '/home' element = { <HomeSect /> }/>
           <Route path = '/product-details' element = {<ProductDetailSec />}/>
           <Route path = '/checkout' element = { <CheckOutSect /> }/>     
        </Routes> 

        <FooterSect />

        </>
  );
}

export default App;
