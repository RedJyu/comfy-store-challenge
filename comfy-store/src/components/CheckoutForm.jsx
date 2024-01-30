import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/Cart/cartSlice';

export const action = (store) => async () => {
  return console.log(store);
};

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gp-y-4'>
      <h4 className='font-medium text-xl capitalize'>shipping information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='adress' name='adress' type='text' />
      <div className='mt-4'>
        <SubmitBtn text='place your order' />
      </div>
    </Form>
  );
};
export default CheckoutForm;
