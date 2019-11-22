import React, { useEffect, useState } from 'react';
import './App.css';
import HomePane from './components/homepane';
import RulesPane from './components/rulespane';
import ThemesPane from './components/themespane';
import SettingsPane from './components/settingspane';
import TeamsPane from './components/teamspane';
import GamePane from './components/GamePane';
import GameData from './data/data.json'

const gameStates = GameData.gameStates;
const languages = ['English', 'Klingon', 'Esperanto', 'Marain'];
const themes = GameData.franchises.map((franchise) => {
  return franchise.name;
})
const trekTheme = GameData.franchises[0]
const wordData = GameData.gameWords



function App() {

  const [gameState, setGameState] = useState(0);
  const [teamNames, setTeamNames] = useState(['','','']);
  const [teamScores, setTeamScores] = useState([0,0,0]);
  const [teamsCount, setTeamsCount] = useState(2);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [soundEffects, setSoundEffects] = useState(false);
  const [language, setLanguage] = useState('English');
  const [timeLimit, setTimeLimit] = useState(60);
  const [rounds, setRounds] = useState(5);
  const [words, setWords] = useState({wordData})
  const [colors, setColors] = useState()
  const [wheelcss, setWheelCss] = useState('wheel')
  
  let statePane = <></>;

  useEffect(() => {
    setColors(['#400', '#440', '#040', '#044', '#004']);
  }, [gameState]);

  const handleGameStateStart = () => {
    setGameState(5);
  }

  const handleGameStateTheme = () => {
    setGameState(3);
  }

  const incTeams = (index) => {
    //console.log(`index: ${e.target.value}`);
    console.log(index)
  }

  const decTeams = (index) => {
    //console.log(`index: ${e.target.value}`);
    console.log(index)
  }

  const handleHomeChange = (e) => {
    switch (e.currentTarget.id) {
      case "buttonRules":
        setGameState(1);
        break;
      case "buttonSettings":
        setGameState(3);
        break;
      case "buttonStart":
        setGameState(5);
        break;
      case "navNext":
        setGameState(1);
        break;
    }
  }

  const handleRulesChange = (e) => {
    switch (e.currentTarget.id) {
      case "navPrev":
        setGameState(0);
        break;
      case "navNext":
        setGameState(2);
        break;
    }
  }

  const handleSettingsChange = (e) => {
    switch (e.currentTarget.id) {
      case "navPrev":
        setGameState(1);
        break;
      case "navNext":
        setGameState(3);
        break;
      case "settingsSoundEffects":
        setSoundEffects(!soundEffects);
        break;
      case "settingsLanguage":
        let index = languages.indexOf(language);
        if (index > -1) {
          index++;
          if (index >= languages.length) {
            index = 0;
          }
        } else {
          index = 0;
        }
        setLanguage(languages[index]);
        break;
      case "settingsTeamsCount":
        if (teamsCount === 3) {
          setTeamsCount(1);
        } else {
          setTeamsCount(teamsCount + 1);
        }
        break;
      case "settingsTimeLimit":
        switch (timeLimit) {
          case 60:
            setTimeLimit(90);
            break;
          case 90:
            setTimeLimit(120);
            break;
          case 120:
            setTimeLimit(60);
            break;
        }
        break;
      case "settingsRounds":
        switch (rounds) {
          case 5:
            setRounds(10);
            break;
          case 10:
            setRounds(15);
            break;
          case 15:
            setRounds(5);
            break;
        }
        break;
    }
  }

  const handleThemeChange = (e) => {
    console.log(e.currentTarget.id)
    switch(e.currentTarget.id) {
      case "navNext":
        setGameState(4);
        break;
      case "navPrev":
        setGameState(2);
        break;
      default: // hopefully a numbered ID
        setSelectedTheme(e.currentTarget.id);
        break;
    }
  }

  const handleTeamsChange = (e) => {
    console.log(e.currentTarget.id);
    console.log(e.target.id);
    console.log(e.target.value);
    switch (e.currentTarget.id) {
      case 'navNext':
        setGameState(5);
        break;
      case 'navPrev':
        setGameState(3);
        break;
      case 'input1':
      case 'input2':
      case 'input3':
        let t = [...teamNames];
        let id = Number(e.currentTarget.id.substr(5, 1)) - 1;
        t[id] = e.target.value;
        setTeamNames(t);
        break;        
    }
  }

  switch (gameState) {
    case 0: // Home/Intro screen
      statePane = <HomePane handleChange={handleHomeChange} />;
      break;
    case 1: // Rules
      statePane = <RulesPane handleChange={handleRulesChange} />;
      break;
    case 2: // Settings
      statePane = <SettingsPane
                    soundEffects={soundEffects}
                    language={language}
                    teams={teamsCount}
                    timeLimit={timeLimit}
                    rounds={rounds}
                    handleChange={handleSettingsChange}
      />
      break;
    case 3: // Theme
        statePane = <ThemesPane
                      selectedTheme={selectedTheme}
                      themes={themes}
                      handleChange={handleThemeChange} />
      break;
    case 4: // Teams
      statePane = <TeamsPane
        teamsCount={teamsCount}
        teams={teamNames}
        handleChange={handleTeamsChange}
      />
      break;
    case 5: // Game
        statePane = <GamePane
        teamsCount={teamsCount}
        teamNames={teamNames}
        teamScores={teamScores}
        colors={colors}
        words={words}
        trekData={trekData}
        setTeams={setTeams}
        handleTeamsUp={incTeams}
        handleTeamsDown={decTeams}
        handleGameStateTheme={handleGameStateTheme}
        handleGameStateStart={handleGameStateStart}
        wheelcss={wheelcss}
        setWheelCss={setWheelCss}
        gameData={GameData[selectedTheme]}
/>
      break;
  }

  return (
    <div className="App">
      {statePane}
    </div>
  );
}

export default App;
