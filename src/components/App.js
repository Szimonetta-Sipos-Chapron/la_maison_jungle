import logo from '../assets/logo.png';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  return ( 
    <div>
      <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo'/>
          <h1 className='lmj-banner-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
      <Cart cart={cart} setCart={setCart} />
      <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
  </div>
  );
}

export default App;
