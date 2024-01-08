import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Header />
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
