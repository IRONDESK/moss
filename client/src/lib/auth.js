import axios from 'axios';

export const joinUser = async (
  userId,
  password,
  password2,
  name,
  location,
  email,
) => {
  const { data } = await axios.post('/api/join', {
    userId,
    password,
    password2,
    name,
    location,
    email,
  });
};
