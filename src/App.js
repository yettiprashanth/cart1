
import './App.css';
import Home from './Home';

import {CartProvider} from 'react-use-cart'
import Cart1 from './Cart1';
;


function App() {
  return (
  
  <CartProvider>
  <Home/>
 <Cart1/>
</CartProvider>
    
  );
}

export default App;
