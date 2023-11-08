import { useContext, createContext, useEffect, useState } from 'react';
import useAuthStore from '../store/authStore'
import axios from 'axios'; 
import { useNavigate  } from "react-router-dom";

const useLogin = () => {
  const jwtToken = useAuthStore((state) => state.jwtToken)
  const setJwtToken = useAuthStore((state) => state.setJwtToken)

  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (enteredemail, enteredPassword) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/generate-token` , {
        email: enteredemail,
        password: enteredPassword,
      });
      if (!response.data.token) throw new Error('No token returned')

      setJwtToken(response.data.token);
      navigateTo('/track')            
    } catch (error) {
      console.error('Error occurred during login:', error);      
    }
  };

  return { email, password, handleLogin, jwtToken, setEmail, setPassword, setJwtToken };
};

export default useLogin;


