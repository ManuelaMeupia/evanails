import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import MenuLateral from './Components/MenuLateral';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/" element={<MenuLateral/>} />
      </Routes>
    </div>
  );
}

export default App;