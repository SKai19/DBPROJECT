import React, { useState } from 'react';
import axios from 'axios';
import './loginform.css'; 

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://yourbackend.com/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to a different page or update the state
    } catch (error) {
      console.error('Login failed:', error);
      // Handle errors (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button type="submit">Login</button>
    </form>
  
  );
}

export default LoginForm;
