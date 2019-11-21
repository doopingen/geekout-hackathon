import React, { useEffect, useState } from 'react';
import './App.css';
import Wheel from './components/wheel';

function App() {

  const [colors, setColors] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setColors(['#400', '#440', '#040', '#044', '#004']);
    setCharacters(['Captain Kirk', 'Mr. Spock', 'Scotty', 'Bones', 'Uhuru'])
  }, [])


  return (
    <div className="App">
      <Wheel colors={colors} characters={characters} />
    </div>
  );
}

export default App;
