import { Hero } from '../components';
import { customFetch } from '../utils';
const url = '/products?featured=true';

export const loader = async () => {
  // must return smth!
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
