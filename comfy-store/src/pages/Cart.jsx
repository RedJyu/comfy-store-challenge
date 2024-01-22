import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text='your cart is empty' />;
  }
  return <SectionTitle text=' Your Cart' />;
};
export default Cart;
