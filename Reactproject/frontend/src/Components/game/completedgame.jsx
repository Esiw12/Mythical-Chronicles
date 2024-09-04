import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameHeader from './gameheader';
import GameFooter from './gamefooter';
import GameMain from './gamemain'; 
import ProgressContext from '../ProgressContext';
import SVGComponent from './gamesvg'
const Game = () => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
    return (
      <ProgressContext.Provider value={{ completionPercentage, setCompletionPercentage }}>
      <div>
        <SVGComponent/>
        <GameHeader /> 
        <GameMain/>
        <GameFooter /> 
      </div>
    </ProgressContext.Provider>
    );
  };
  
  export default Game; 