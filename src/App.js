import React from 'react';
import Img from './components/Img';
import Title from './components/Title';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar />
        <div className="content">
          <Img />
          <Title text="Bienvenidos a la tienda e-commerce de RF 3D Lab."/>
          <div className="container">
            <ItemListContainer />
            <ItemDetailContainer item={3}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
