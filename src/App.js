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



function App() {

  const [gameState, setGameState] = useState(0);
  const [teams, setTeams] = useState([]);
  const [teamsCount, setTeamsCount] = useState(2);
  const [theme, setTheme] = useState('');
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
  const [colors, setColors] = useState()
  
  let statePane = <></>;

  useEffect(() => {
    setColors(['#400', '#440', '#040', '#044', '#004']);
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

  const setThemeStarTrek = () => {
    setTheme(0)
  }

  const setThemeStarWars = () => {
    setTheme(1)
  }

  const incTeams = (index) => {
    //console.log(`index: ${e.target.value}`);
    console.log(index)
  }

  const decTeams = (index) => {
    //console.log(`index: ${e.target.value}`);
    console.log(index)
  }

  const handleSettingsChange = (e) => {
    console.log(`event: ${e.target.id}`);
    switch (e.target.id) {
      case "settingsSoundEffects":
      case "soundValue":
      case "soundCarat":
        setSoundEffects(!soundEffects);
        break;
      case "settingsLanguage":
      case "languageValue":
      case "languageCarat":
        console.log(`language ${e.target.value}`)
        let index = languages.indexOf(language);
        if (index > -1) {
          index++;
          if (index >= languages.length) {
            index = 0;
          }
        } else {
          index = 0;
        }
        console.log(`new language: ${languages[index]}`)
        setLanguage(languages[index]);
        break;
      case "settingsTeamsCount":
      case "teamsValue":
      case "teamsCarat":
        console.log(`teams count was ${teamsCount}`)
        if (teamsCount === 3) {
          setTeamsCount(1);
        } else {
          setTeamsCount(teamsCount + 1);
        }
    }
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
                      themes={themes}
                      setThemeStarTrek={setThemeStarTrek}
                      setThemeStarWars={setThemeStarWars}
                      handleGameStateTeams={handleGameStateTeams}
                      handleGameStatePrev={decGameState}
                      handleGameStateNext={incGameState} />
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
