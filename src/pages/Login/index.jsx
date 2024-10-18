import { useState } from 'react';
import Cookies from 'js-cookie';
import {Navigate, useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    navigate('/');
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  const jwtToken = Cookies.get('jwt_token');
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-form-container">
      <h1 className='logo-name'>BookUsNow</h1>
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">
          <label htmlFor="username" className='input-label'>USERNAME</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={onChangeUsername}
            placeholder="Username"
            className='username-input-filed'
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className='input-label'>PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
            className='password-input-filed'
          />
        </div>
        {showSubmitError && <p className="error-message">{errorMsg}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="login-link">
        If you have an account? <a href="/signup">Signup here</a>
      </p>
      <h3>UserName: rahul</h3>
      <h3>Password: rahul@2021</h3>
    </div>
  );
};

export default Login;