import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useEffect } from 'react';
import { UseSelector, useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart);
  useEffect(()=>{
    fetch('https://network-backend-call-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body: JSON.stringify(cart),
    });
  },[cart]);
  return (
    <Layout>
      <Notification />
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
