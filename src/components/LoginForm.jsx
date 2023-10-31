import useLogin from '../hooks/useAuth';
import './LoginForm.css';

const LoginForm = () => {
  const { email, password, handleLogin, jwtToken, LoginContext, setEmail, setPassword } = useLogin();

  return (
    <LoginContext.Provider value={{ jwtToken }}>
      <div className="login-container">
        <div className="input-container">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              localStorage.setItem('email', e.target.value);
            }}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="button-container">
          <button onClick={() => handleLogin(email, password)}>Login</button>
        </div>
      </div>
    </LoginContext.Provider>
  );
};

export default LoginForm;
