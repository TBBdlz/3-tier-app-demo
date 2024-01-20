import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [fastAPIData, setFastAPIData] = useState({ message: '', time: '' });
  const [expressData, setExpressData] = useState({ message: '', time: '' });

  useEffect(() => {
    // Fetch data from Express API
    fetch('http://127.0.0.1:3000/api/data')
      .then(response => response.json())
      .then(data => setExpressData(data));

    fetch('http://127.0.0.1:5000/api/data')
      .then(response => response.json())
      .then(data => setFastAPIData(data));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="api-responses">
        <p>Flask API says: {fastAPIData.message}</p>
        <p>Flask Time: {fastAPIData.time}</p>
        <p>Express API says: {expressData.message}</p>
        <p>Express Time: {expressData.time}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
