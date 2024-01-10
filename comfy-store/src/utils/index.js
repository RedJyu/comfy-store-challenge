import axios from 'axios';

const prodUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: prodUrl,
});

export const formatPrice = (price) => {
  const moneyAmount = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format((price / 100).toFixed(2));
  return moneyAmount;
};
