import axios from 'axios';

export const joinUser = async (
  userId,
  password,
  password2,
  name,
  email,
  location,
) => {
  await axios.post('http://localhost:9000/join', {
    userId,
    password,
    password2,
    name,
    email,
    location,
  });
};
