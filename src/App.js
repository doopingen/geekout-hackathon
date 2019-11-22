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
  const [teams, setTeams] = useState([]);
  const [teamsCount, setTeamsCount] = useState(2);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [soundEffects, setSoundEffects] = useState(false);
  const [language, setLanguage] = useState('English');
  const [timeLimit, setTimeLimit] = useState(60);
  const [rounds, setRounds] = useState(5);
  const [teamName1, setTeamName1] = useState('')
  const [teamName2, setTeamName2] = useState('')
  const [teamName3, setTeamName3] = useState('')
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [team3Score, setTeam3Score] = useState(0)
  const [trekData, setTrekData] = useState({trekTheme})
  const [words, setWords] = useState({wordData})
  const [colors, setColors] = useState()
  
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
                      setTeamName1={setTeamName1}
                      setTeamName2={setTeamName2}
                      setTeamName3={setTeamName3}
                      teams={teams}
                      setTeams={setTeams}
                      handleTeamsUp={incTeams}
                      handleTeamsDown={decTeams}
                      handleGameStateTheme={handleGameStateTheme}
                      handleGameStateStart={handleGameStateStart}
 />
      break;
    case 5: // Game
        statePane = <GamePane
        teamName1={teamName1}
        teamName2={teamName2}
        teamName3={teamName3}
        setTeam1Score={setTeam1Score}
        setTeam2Score={setTeam2Score}
        setTeam3Score={setTeam3Score}
        team1Score={team1Score}
        team2Score={team2Score}
        team3Score={team3Score}
        colors={colors}
        teams={teams}
        words={words}
        trekData={trekData}
        setTeams={setTeams}
        handleTeamsUp={incTeams}
        handleTeamsDown={decTeams}
        handleGameStateTheme={handleGameStateTheme}
        handleGameStateStart={handleGameStateStart}
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
