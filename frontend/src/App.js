import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [Tiere, setTiere] = useState([]);
  useEffect(() => {
    async function getTiere() {
      const response = await fetch('http://localhost:5005/tiere');
      const data = await response.json();
      setTiere(data);
      console.log(data);
    }
    getTiere()   
    
  },[]);
  if (!Tiere) {
    return <p>Loading...</p>
}
  return (
    <div className="App">
      <h1>Liste aller Tiere</h1>
      <table>
        <thead>
          <tr>
            <th>Art</th>
            <th>Name</th>
            </tr>
        </thead>
        <tbody>
          {Tiere.map((tier) => (
            <tr key={tier.id}>
              <td>{tier.tierart}</td>
              <td>{tier.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
