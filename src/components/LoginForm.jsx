import useLogin from '../hooks/useAuth';
import './LoginForm.css';

const LoginForm = () => {
  const { email, password, handleLogin, setEmail, setPassword } = useLogin();

  return (
    <>
      <div className="login-container">
        <div className="input-container">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
    </>
  );
};

export default LoginForm;
