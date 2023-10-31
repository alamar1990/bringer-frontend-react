import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="input-container">
        <input type="text" id="username" required />
        <label htmlFor="username">Username</label>
      </div>
      <div className="input-container">
        <input type="password" id="password" required />
        <label htmlFor="password">Password</label>
      </div>
      <div className="button-container">
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
