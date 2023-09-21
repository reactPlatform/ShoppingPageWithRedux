import classes from './CartButton.module.css';
import { cartActions } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <button className={classes.button} onClick={() => dispatch(cartActions.showCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;