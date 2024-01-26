import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn('you must be logged in');
    return redirect('/login');
  }
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
