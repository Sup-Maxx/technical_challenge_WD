import React from 'react';
import {Routes, Route, Link} from "react-router-dom"

import './App.css';
import PhoneList from './pages/PhoneList';
import PhoneCard from './components/PhoneCard';
import DisplayPhone from './pages/DisplayPhone';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api/phones" element={<PhoneList/>}/>
        <Route path="phones/:phoneId" element={<PhoneCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
