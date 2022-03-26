import axios from 'axios';

export const joinUser = async (
  userId,
  password,
  password2,
  name,
  location,
  email,
) => {
  await axios.post('http://localhost:9000/join', {
    userId,
    password,
    password2,
    name,
    location,
    email,
  });
};

export const loginUser = async (userId, password) => {
  await axios.post('http://localhost:9000/login', { userId, password });
};
