import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Influencers from './Components/Influencers';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import Categorylist from './Components/Categorylist';
import Cart from './Components/Cart';
import Wishlist from './Components/Whishlist'
import Register from './Components/Register';
import Payment from './Components/Payment';
import Orderhistory  from './Components/Orderhistory'
import Category from './Components/Category';
import Orderlist from './Components/Orderlist';
import Profileinfo from './Components/Profileinfo';
import Address from './Components/Address';
import Changepass from './Components/Changepass';
import Orderview from './Components/Orderview';
import Changename from './Components/Changename';
import Changemail from './Components/Changemail';
import Changephone from './Components/Changephone';
import Editadd from './Components/Editadd';
import Login from './Components/Login';
import Forgotpass from './Components/Forgotpass';
import Footer from './Components/Footer';


const Navigation = () => {
  return (
  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/categorylist' element= {<Categorylist/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileinfo" element={<Profileinfo />} />
        <Route path="/address" element={<Address />} />
        <Route path="/changepass" element={<Changepass />} />
        <Route path="/changename" element={<Changename />} />
        <Route path="/changephone" element={<Changephone />} />
        <Route path="/changemail" element={<Changemail />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/editadd" element={<Editadd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderview" element={<Orderview />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/cart"  element={<Cart/>}/>
        <Route path ="/category"  element={<Category/>}/>
        <Route path ="/register"  element={<Register/>}/>
        <Route path ="/payment"  element={<Payment/>}/>
        <Route path ="/orderhistory"  element={<Orderhistory/>}/>
        <Route path ="/wishlist"  element={<Wishlist/>}/>
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    <Footer/>
    </Router>
   
   
  );
}

export default Navigation;
