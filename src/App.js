import './App.css';
// import CheckOutSect from './CheckOutSect/CheckOutSect';
import FooterSect from './FooterSect/FooterSect';
// import LoginSect from './LoginSect/LoginSect';
import HomeSect from './HomeSect/HomeSect';
import Navbar from './Navbar/Navbar';



function App() {
  return (
      <>
      <Navbar />
        {/* <h4> App file Component</h4> */}
        {/* <CheckOutSect /> */}
        <HomeSect />
        {/* <LoginSect /> */}
        <FooterSect />
      
      </>
  );
}

export default App;
