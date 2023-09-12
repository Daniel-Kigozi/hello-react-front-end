import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/messages/index');
        setGreeting(response.data.greeting);
        setError(null);
      } catch (error) {
        setError('Error fetching greeting');
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <h2>Greetings:</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
