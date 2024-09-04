
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/app/Header'; 
import Footer from './Components/app/Footer';
import MainContent from './Components/app/MainContent'; 
import SVGComponent from './Components/app/SVGComponent'; 
import Modal from './Components/app/Modal';
import ProgressContext from '../src/Components/ProgressContext';
import User from './Components/user/user';
import LVL from './Components/lvl/lvlcompleted';
import Game from './Components/game/completedgame';
import './Style/index/main.module.css'; 
import './Style/index/header.module.css';
import './Style/index/SVGComponent.module.css';
import './Style/index/footer.module.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleModal = () => {
    console.log('toggleModal called');
    setIsModalOpen(!isModalOpen);
  };
  console.log('Modal open:', isModalOpen);
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <SVGComponent />
            <Header openModal={toggleModal} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setIsLoggedIn={setIsLoggedIn} />
            <MainContent />
            <Footer />
          </>
        } />
       
        <Route path="/profile" element={
          <>
            <User />
          </>
        } />
       <Route path="/lvl" element={
          <>  
            <LVL />
          </>
        } />
         <Route path="/game" element={
          <>  
            <Game />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;