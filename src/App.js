import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import firebase, { FirebaseContext } from './firebase';
import Sidebar from './ui/sidebar';
import Login from './components/Login';
import Registro from './components/Registro';
import Inicio from './components/Inicio';
import Ejercicios from './components/ejercicios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <div className="flex">
        <Sidebar isLoggedIn={isLoggedIn} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/ejercicios" element={<Ejercicios />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;


