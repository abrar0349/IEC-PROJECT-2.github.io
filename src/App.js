import './App.css';
import Navbar from './Navbar/Navbar';
import HomeSect from './HomeSect/HomeSect';
// import CheckOutSect from './CheckOutSect/CheckOutSect';
// import LoginSect from './LoginSect/LoginSect';
import FooterSect from './FooterSect/FooterSect';



function App() {
  return (
      <>
      <Navbar />
        <HomeSect />
        {/* <CheckOutSect /> */}
        {/* <LoginSect /> */}
        <FooterSect />
      
      </>
  );
}

export default App;
