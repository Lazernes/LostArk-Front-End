import axios from 'axios';

export const getMarketItems = async () => {
  const res = await axios.get('/api/market/items');
  return res.data;
};