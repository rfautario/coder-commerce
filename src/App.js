import React from 'react';
import Img from './components/Img';
import Title from './components/Title';
import NavBar from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar />
        <Img />
        <Title text="Bienvenidos al e-commerce de RF 3D Lab."/>        
      </header>
    </div>
  );
}

export default App;
