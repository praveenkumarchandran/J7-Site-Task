import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Cart from './Cart';
import { CartProvider} from 'react-use-cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Banner from './Banner';
import Checkout from './Checkout';



function App() {
  return (
    <>

    <Router>
   

    
    <div>
      <nav>
        {/* <Link to="/"> Our Products</Link>
        <Link to="/cart">Cart</Link> */}
      </nav>
      <CartProvider>
      <Nav/>
        <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products"  element={<Home/>} />
        <Route path="/checkout"  element={<Checkout/>} />


        </Routes>
    
   </CartProvider>
     
    </div>
  </Router>
  
   
 
  
   </>
  );
}

export default App;
