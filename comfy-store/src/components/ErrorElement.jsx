import { useRouteError } from 'react-router-dom';
const ErrorElement = () => {
  const error = useRouteError();
  console.error(error);

  return <h4 className='font-bold text-4xl'>OH NO!</h4>;
};
export default ErrorElement;
