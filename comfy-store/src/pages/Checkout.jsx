import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';

export const loader = (store) => () => {
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems === 0) {
    return <SectionTitle text='cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='placed your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
