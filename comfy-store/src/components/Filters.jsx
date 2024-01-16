import FormInput from './FormInput';
import FormRange from './FormRange';
import FormSelect from './FormSelect';
import { Form, useLoaderData, Link } from 'react-router-dom';

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search */}
      <FormInput
        type='search'
        label='search'
        name='search'
        size='input-sm'
      ></FormInput>
      {/* categories */}

      <FormSelect
        label='category'
        name='category'
        list={meta.categories}
        size='select-sm'
      />
      {/* companies */}
      <FormSelect
        label='company'
        name='company'
        list={meta.companies}
        size='select-sm'
      />
      {/* order */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
      />
      {/* price range */}
      <FormRange name='price' label='select price' size='range-sm' />

      {/* buttons */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
