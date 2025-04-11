import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      __typename
      ... on CurrentUser {
        id
        identifier
        roles  // Adjust this according to your Vendure schema
      }
      ... on InvalidCredentialsError {
        message
      }
    }
  }
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login, { data, error }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await login({ variables: { username, password } });
      
      // Check the result type:
      if (result.data.login.__typename === 'CurrentUser') {
        const user = result.data.login;
        console.log('Login successful', user);

        // Redirect user based on their role.
        // This example assumes that a store owner has the role "StoreOwner".
        // Adapt the condition as needed.
        if (user.roles && user.roles.includes('StoreOwner')) {
          navigate('/seller-dashboard');
        } else {
          navigate('/');
        }
      } else {
        // Handle error message from InvalidCredentialsError
        console.error('Login error:', result.data.login.message);
        alert(`Login failed: ${result.data.login.message}`);
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="Username or email"
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px', width: '100%' }}>
        Login
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
};

export default Login;
