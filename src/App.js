import React, { useState, useEffect } from 'react';
import Timer from './Timer'; // Import du composant Timer
import './App.css';

function App() {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const hour = new Date().getHours(); // Récupère l'heure actuelle
    if (hour >= 6 && hour < 12) {
      setBackground('lightblue'); // Matin
    } else if (hour >= 12 && hour < 18) {
      setBackground('yellow'); // Après-midi
    } else if (hour >= 18 && hour < 24) {
      setBackground('orange'); // Soir
    } else {
      setBackground('darkblue'); // Nuit
    }
  }, []);

  return (
    <div className="App" style={{ backgroundColor: background, height: '100vh' }}>
      <h1>Live Timer</h1>
      <Timer /> {/* Affichage du composant Timer */}
      <p>The background color changes depending on the current hour.</p>
    </div>
  );
}

export default App;
