import './App.css';
import Navbar from './Navbar/Navbar';
import HomeSect from './HomeSect/HomeSect';
import CheckOutSect from './CheckOutSect/CheckOutSect';
import LoginSect from './LoginSect/LoginSect';
import FooterSect from './FooterSect/FooterSect';
import { Route,  Routes } from 'react-router-dom';



function App() {
  return (
     <>
      {/* <Router> */}
        <Navbar />
        <Routes>
          {/* <Route path = '' element = {}/> */}
          <Route path = '' element = { <LoginSect />}/>
          {/* <Route path = '' element = {  }/> */}
           <Route path = '/home' element = { <HomeSect /> }/>
           <Route path = '/checkout' element = { <CheckOutSect /> }/>
          
          
         
         
        </Routes>
        <FooterSect />
        {/* </Router> */}
        </>
  );
}

export default App;
