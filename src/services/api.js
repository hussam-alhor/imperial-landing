import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getRooms = async () => {
  const response = await api.get('/rooms');
  return response.data; // هنا سنرجع البيانات مباشرة
};