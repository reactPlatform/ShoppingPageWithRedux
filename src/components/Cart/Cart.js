import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const isCartVisible = useSelector(state => state.cart.isCartVisible);
  return (
    <div>
    { isCartVisible ? (
      <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
    ) : (<span style={{color:'white'}}>Cart is Empty!!</span>)
    }
    </div>
  );
};

export default Cart;