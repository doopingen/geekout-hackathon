import React, { useEffect, useState } from 'react';
import './App.css';
import HomePane from './components/homepane';
import RulesPane from './components/rulespane';
import ThemesPane from './components/themespane';
import SettingsPane from './components/settingspane';
import TeamsPane from './components/teamspane';
import Wheel from './components/wheel';
import GameData from './data/data.json'

const gameStates = GameData.gameStates;
const themes = GameData.franchises.map((franchise) => {
  return franchise.name;
})

function App() {

  const [gameState, setGameState] = useState(0);
  const [teams, setTeams] = useState([]);
  const [theme, setTheme] = useState(0);
  const [sound, setSound] = useState(false);
  
  let statePane = <></>;

  const incGameState = () => {
    setGameState(gameState + 1);
  }


  useEffect(() => {
  }, [gameState]);

  switch (gameState) {
    case 0: // Home/Intro screen
      statePane = <HomePane handleGameState={incGameState} />;
      break;
    case 1: // Rules
      statePane = <RulesPane handleGameState={incGameState} />;
      break;
    case 2: // Theme
        statePane = <ThemesPane themes={themes} handleThemeUpdate={setTheme} handleGameState={incGameState} />
      break;
    case 3: // Settings
        statePane = <SettingsPane handleSound={setSound} handleGameState={incGameState} />
      break;
    case 4: // Teams
        statePane = <TeamsPane handleTeamsUpdate={setTeams} handleGameState={incGameState} />
      break;
    case 5: // Game
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
