import classes from './CartButton.module.css';
import { cartActions } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={() => dispatch(cartActions.showCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;