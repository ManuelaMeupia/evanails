import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from './Components/Navbar';
import MenuLateral from './Components/MenuLateral';
import Footer from './Components/Footer';


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
      <Footer/>
      
    </div>
  );
}

export default App;