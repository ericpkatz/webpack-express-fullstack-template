import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const App = ()=> {
  const [message, setMessage] = useState('');

  useEffect(()=> {
    axios.get('/api/message')
      .then( response => setMessage(response.data));
  }, []);

  return (
    <main>
      { message }
    </main>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
