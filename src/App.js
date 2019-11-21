import React, { useEffect, useState } from 'react';
import './App.css';
import Wheel from './components/wheel';
import Data from './data/data.json'


function App() {

  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(['#400', '#440', '#040', '#044', '#004']);
  }, [])

  return (
    <div className="App">
    
    </div>
  );
}


export default App;
