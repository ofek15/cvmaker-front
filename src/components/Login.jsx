import './Login.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();

  async function checkandlogin(usernameinsert, passwordinsert) {
    try {
      const token1 = await axios.post("https://cv-back-server-kauq.onrender.com/user/loginFunc", {
        username: usernameinsert,
        password: passwordinsert,
      });
      localStorage.setItem("Token", JSON.stringify(token1.data));
      console.log("all good");
      navigation('navbar');
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function signupandlogin(usernamefirst, passwordfirst, emailfirst) {
    console.log(usernamefirst, passwordfirst, emailfirst);
    try {
      const { data } = await axios.post(
        "https://cv-back-server-kauq.onrender.com/user/publishUser",
        { username: usernamefirst, password: passwordfirst, email: emailfirst }
      );
      console.log(data);
      const token2 = await axios.post("https://cv-back-server-kauq.onrender.com/user/loginFunc", {
        username: usernamefirst,
        password: passwordfirst,
      });
      localStorage.setItem("Token", JSON.stringify(token2.data));
      console.log("all good");
      navigation('navbar');
    } catch (err) {
      console.log(err.response.data);
    }
  }

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log("log/signup", isLoginForm);
    if (isLoginForm === true) {
      checkandlogin(username, password);
    } else {
      signupandlogin(username, password, email);
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div id='bigi'>
    <div className="login-container">
      <h2 className="login-heading">{isLoginForm ? 'Login' : 'Sign Up'}</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLoginForm && (
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        <button className="login-button" type="submit">
          {isLoginForm ? 'Log In' : 'Sign Up'}
        </button>
      </form>
      <div className="signup-link">
        <button className="signup-link-button" onClick={toggleForm}>
          {isLoginForm ? 'Create an account' : 'Back to Login'}
        </button>
      </div>
    </div>
    </div>
  );
}

export default Login;
