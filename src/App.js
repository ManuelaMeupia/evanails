import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from './Components/Navbar';
import MenuLateral from './Components/MenuLateral';


function App() {
  return (
    <div className="App">
       <Navbar />
      <main>
        <MenuLateral />
      </main>
      
      <Routes>
        <Route path="/accueil" element={<MenuLateral/>} />
      </Routes>
      
    </div>
  );
}

export default App;