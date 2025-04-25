import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [tiere, setTiere] = useState([]);


  useEffect(() => {
    async function getTiere() {
      const response = await fetch('http://localhost:5005/tiere');
      const data = await response.json();
      setTiere(data);
      console.log(data);
    }
    getTiere()

  }, []);
  if (tiere.length === 0) {
    return <p>Loading...</p>
  }


  return (
    <div>
      <Link to={`/tiere`}> <button >Ein Tier hinzufügen</button></Link>
      <h1>Liste der Tiere</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Art</th>
          </tr>
        </thead>
        <tbody>
          {tiere.map(tier => {
            return (
              <tr key={tier.id}>
                <td>
                  <Link to={`/tiere/${tier.id}`} style={{ textDecoration: 'none' }}>
                    {tier.name}
                  </Link>
                </td>
                <td>
                  <Link to={`/tiere/${tier.id}`} style={{ textDecoration: 'none' }}>
                    {tier.tierart}
                  </Link>
                </td>
                <td> <Link to={`/tierdelete/${tier.id}`}> <button >Löschen</button></Link></td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;
