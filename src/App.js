import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// components
import MainMenu from './components/MainMenu';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="" element={<MainMenu />}></Route>
        </Routes>
      </>

    </BrowserRouter>
  );
}

export default App;
