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

  useEffect(() => {
  }, [gameState]);

  const handleGameStateHome = () => {
    setGameState(0);
  }

  const handleGameStateRules = () => {
    setGameState(1);
  }
  const handleGameStateSettings = () => {
    setGameState(2);
  }
  const handleGameStateStart = () => {
    setGameState(5);
  }
  const handleGameStateTeams = () => {
    setGameState(4);
  }

  const handleGameStateTheme = () => {
    setGameState(3);
  }

  const incGameState = () => {
    setGameState(gameState + 1);
  }

  const decGameState = () => {
    setGameState(gameState - 1);
  }

  const incTeams = (index) => {
    //console.log(`index: ${e.target.value}`);
    console.log(index)
  }

  const decTeams = () => {
    
  }

  switch (gameState) {
    case 0: // Home/Intro screen
      statePane = <HomePane
                    handleGameStateRules={handleGameStateRules}
                    handleGameStateSettings={handleGameStateSettings}
                    handleGameStateStart={handleGameStateStart} />;
      break;
    case 1: // Rules
      statePane = <RulesPane
                    handleGameStateHome={handleGameStateHome}
                    handleGameStateSettings={handleGameStateSettings}
                     />;
      break;
    case 2: // Settings
      statePane = <SettingsPane
                    handleSound={setSound}
                    handleGameStateRules={handleGameStateRules}
                    handleGameStateTheme={handleGameStateTheme}
                     />
      break;
    case 3: // Theme
        statePane = <ThemesPane
                      themes={themes}
                      handleThemeUpdate={setTheme}
                      handleGameStateSettings={handleGameStateSettings}
                      handleGameStateTeams={handleGameStateTeams}
 />
      break;
    case 4: // Teams
        statePane = <TeamsPane
                      handleTeamsUp={incTeams}
                      handleTeamsDown={decTeams}
                      handleGameStateTheme={handleGameStateTheme}
                      handleGameStateStart={handleGameStateStart}
 />
      break;
    case 5: // Game
      statePane = <Wheel
                    teams={teams}
                    theme={themes[theme]} />
      break;
  }

  return (
    <div className="App">
      {statePane}
    </div>
  );
}

export default App;
