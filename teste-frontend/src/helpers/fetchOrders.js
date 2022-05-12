import axios from 'axios';

const fetchOrders = async (id) => {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/orders/${id}`,
  });
  return response.data;
}

export default fetchOrders;