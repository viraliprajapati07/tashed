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
import New from './Components/New';


const App = () => {
  return (
  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Categorylist' element= {<Categorylist/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/Profileinfo" element={<Profileinfo />} />
        <Route path="/Address" element={<Address />} />
        <Route path="/Changepass" element={<Changepass />} />
        <Route path="/Changename" element={<Changename />} />
        <Route path="/Changephone" element={<Changephone />} />
        <Route path="/Changemail" element={<Changemail />} />
        <Route path="/Forgotpass" element={<Forgotpass />} />
        <Route path="/Editadd" element={<Editadd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Orderview" element={<Orderview />} />
        <Route path="/Orderlist" element={<Orderlist />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/Cart"  element={<Cart/>}/>
        <Route path ="/Category"  element={<Category/>}/>
        <Route path ="/Register"  element={<Register/>}/>
        <Route path ="/Payment"  element={<Payment/>}/>
        <Route path ="/Orderhistory"  element={<Orderhistory/>}/>
        <Route path ="/Wishlist"  element={<Wishlist/>}/>
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
   
   
  );
}

export default App;
