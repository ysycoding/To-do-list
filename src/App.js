import './App.css';
import React from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import styled from "styled-components"

import Footer from './component/Footer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Main from './pages/Main';

import Createlist from './listcomponent/Createlist';
import Profile from './listcomponent/Profile';
import Calandar from './listcomponent/Calendar';





const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0;
  min-height: 100vh;
  width: 100%;
  border: 1px solid black;
`;


export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  const [showSidebar, setShowSidebar] = useState(false);
  const [simple, setSimple] = useState(false); 
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };
  const handleButtonClick = () => {
    setSimple(!simple);
  };
  return (
    <BrowserRouter>
    
  <Frame>  
    <Header onSidebarToggle={handleSidebarToggle}/>
   
      <Routes>
        <Route exact path="/" element={<Main simple={simple}/>} />
     
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calandar />} />
        <Route path="/create" element={<Createlist />} />
      </Routes>
      {showSidebar && <Sidebar showSidebar={showSidebar} onSidebarToggle={handleSidebarToggle} />}
     
     
    <Footer onButtonClick={handleButtonClick}/>
  </Frame>
  </BrowserRouter>
  );
}


