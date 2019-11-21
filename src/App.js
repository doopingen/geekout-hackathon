import React, { useEffect, useState } from 'react';
import './App.css';
import HomePane from './components/homepane';
import ThemesPane from './components/themespane';
import SettingsPane from './components/settingspane';
import TeamsPane from './components/teamspane';
import Wheel from './components/wheel';
import GameData from './data/data.json'

const gameStates = GameData.gameStates;

function App() {

  const [gameState, setGameState] = useState(0);
  const [teams, setTeams] = useState([]);
  const [rules, setRules] = useState(false);
  const [theme, setTheme] = useState(0);
  const [sound, setSound] = useState(false);
  
  let statePane = <></>;

  useEffect(() => {
  }, [gameState]);

  switch (gameState) {
    case 0: // Home/Intro screen
      statePane = <HomePane rules={rules} handleGameState={setGameState} />;
      break;
    case 1: // Theme
        statePane = <ThemesPane handleThemeUpdate={setTheme} handleGameState={setGameState} />
      break;
    case 2: // Settings
        statePane = <SettingsPane handleSound={setSound} handleGameState={setGameState} />
      break;
    case 3: // Teams
        statePane = <TeamsPane handleTeamsUpdate={setTeams} handleGameState={setGameState} />
      break;
    case 4: // Game
        statePane = <Wheel teams={teams} theme={theme} />
      break;
  }

  return (
    <div className="App">
      {statePane}
    </div>
  );
}


export default App;
