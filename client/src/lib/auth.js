import axios from 'axios';
import { useState } from 'react';

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
