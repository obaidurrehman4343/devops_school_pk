import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import '../styles/Auth.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authAPI.login(formData);

      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);

      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card small-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <button className="auth-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="auth-footer-text">
          Don't have an account?{' '}
          <Link to="/signup" className="auth-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;