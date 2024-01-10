import { Hero } from '../components';

const url = '/products?featured=true';

export const loader = () => {
  // must return smth!
  return null;
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
