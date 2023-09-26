import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './redux/cartSlice';

function App() {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  let initialLoad = true;
  const getCartData = () => {
    if(initialLoad){
      fetch('https://network-backend-call-default-rtdb.firebaseio.com/cart.json')
    .then((res)=>{return res.json()}).then((result) => dispatch(cartActions.updateCartData(result)))
    }
    
  }
  useEffect(()=>{
    getCartData();
    initialLoad = false;
    dispatch(cartActions.updateNetworkStatus('sending'));
    fetch('https://network-backend-call-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body: JSON.stringify(cart),
    }).then(()=>{
      dispatch(cartActions.updateNetworkStatus('success'));
    }).catch(()=>{
      dispatch(cartActions.updateNetworkStatus('error'));
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
