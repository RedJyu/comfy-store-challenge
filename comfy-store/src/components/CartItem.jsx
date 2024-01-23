import { formatPrice, generateAmount } from '../utils';
import { removeItem, editItem } from '../features/Cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: e.target.value }));
  };
  return (
    <article
      key={cartID}
      className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-500 pb-6 last:border-0'
    >
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
      />
      {/* item info */}
      <div className='sm:ml-16 sm:w-48'>
        <h3 className='capitalize font-medium'>{title}</h3>
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>
          {company}
        </h4>
        <p className='mt-2 capitalize text-sm flex items-center gap-x-2'>
          color :
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='am:ml-12'>
        {/* amount */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            className='mt-2 select select-base select-bordered select-xs'
            name='amount'
            id='amount'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmount(amount + 5)}
          </select>
        </div>
        {/* remove */}
        <button
          className=' mt-2 link link-primary link-hover text-sm'
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      {/* price */}
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
