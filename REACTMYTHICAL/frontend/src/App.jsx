import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/about/Completedabout';
import Forum from './Components/forum/Completedforum';
import Contact from './Components/Contact/CompletedContact';
import Igra from './Components/Igra/Completed.igra';
import Team from './Components/Team/CompletedTeam';
import Login from './Components/Login/Completedlogin';
import Reg from './Components/Reg/Completedreg';
import Library from './Components/Library/CompletedLibrary';
import Stream from './Components/stream/completedstream';
import Profile from './Components/userprofile/Profile';
import StreamUser from './Components/Streamuser/STREAM.USER';
import StreamViewer from './Components/Streamuser/StreamViewer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Igra />} />
          <Route path="/team" element={<Team />} />
          <Route path="/streamuser" element={<StreamUser />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/view" element={<StreamViewer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
