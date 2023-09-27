import React, { useState, useEffect } from 'react';

const RandomMessage = () => {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/random_greeting');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessage(data.greeting);
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };

  useEffect(() => getMessage(), []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{message}</p>
    </div>
  );
};

export default RandomMessage;
