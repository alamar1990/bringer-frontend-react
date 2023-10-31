import { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const LoginContext = createContext();

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const storedemail = localStorage.getItem('email');
    const storedJwtToken = localStorage.getItem('jwtToken');
    if (storedemail) {
      setEmail(storedemail);
    }
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);

  const handleLogin = async (enteredemail, enteredPassword) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/generate-token` , {
        email: enteredemail,
        password: enteredPassword,
      });
      if (!response.data.token) throw new Error('No token returned')

      setJwtToken(response.data.token);
      localStorage.setItem('jwtToken', response.data.token);
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');      
    } catch (error) {
      console.error('Error occurred during login:', error);      
    }
  };

  return { email, password, handleLogin, jwtToken, LoginContext, setEmail, setPassword, setJwtToken };
};

export default useLogin;


