import axios from 'axios';
import store from '../store/store';

export default () => axios.create({
  baseURL: 'http://localhost:7113/api',
  headers: {
    Authorization: `Bearer ${store.state.token}`,
  },
});
