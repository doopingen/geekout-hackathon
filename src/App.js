import React, { useEffect, useState } from 'react';
import './App.css';
import Wheel from './components/wheel';
import TrekData from './data/trekkie.json'


function App() {

  const [colors, setColors] = useState([]);
  const [trek, setTrek] = useState({TrekData})

  useEffect(() => {
    setColors(['#400', '#440', '#040', '#044', '#004']);
  }, [])

  return (
    <div className="App">
      <Wheel data={trek} colors={colors}/>
    </div>
  );
}


export default App;
