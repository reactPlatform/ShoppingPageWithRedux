import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const isCartVisible = useSelector(state => state.cart.isCartVisible);
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <div>
    { isCartVisible ? (
      <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map((item) => <CartItem item={item}></CartItem>)
        }
        
      </ul>
    </Card>
    ) : (<span style={{color:'white'}}>Cart is Empty!!</span>)
    }
    </div>
  );
};

export default Cart;