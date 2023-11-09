import { useState } from 'react';
import useAuthStore from '../store/authStore'
import axios from 'axios'; 
import { useNavigate  } from "react-router-dom";

const useAuth = () => {
  const jwtToken = useAuthStore((state) => state.jwtToken)
  const setJwtToken = useAuthStore((state) => state.setJwtToken)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)

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
      setIsAuthenticated(true);
      console.log('redirecting to track');
      navigateTo('/track');            
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const handleLogout = async () => {
    if (!isAuthenticated) return
    navigateTo('/login');
    setIsAuthenticated(false);
    setJwtToken('');
    localStorage.removeItem('auth-storage');
  };

  return { email, password, handleLogin, handleLogout, jwtToken, setEmail, setPassword, setJwtToken };
};

export default useAuth;


