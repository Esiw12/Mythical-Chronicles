import Header from './header'
import Main from './main'
import React, { useState } from 'react';
import Footer from './footer'
import Modal from './modal'
import Vibor from './Vibor'
function App() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isViborOpen, setViborOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const openVibor = () => setViborOpen(true); 
    const closeVibor = () => setViborOpen(false); 
    return (
      <>
        <Header openModal={openModal} />
        <Main openVibor={openVibor} />
        <Footer openModal={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <Vibor isVisible={isViborOpen} onClose={closeVibor} />
      </>
    )
  }
  
  export default App
  