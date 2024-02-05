import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, PaginationContainer, SectionTitle } from '../components';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn('You must be logged in');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      // for pagination
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error with your order';
      toast.error(errorMessage);
      if (error.response.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const Orders = () => {
  return <div>Orders</div>;
};
export default Orders;
