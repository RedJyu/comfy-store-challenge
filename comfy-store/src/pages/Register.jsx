import { FormInput, SubmitBtn } from '../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('registration complete');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || 'please check credentials';
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4 mb-4'>
          <SubmitBtn text='Register' />
        </div>
        <p className='text-center'>
          Already member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
