import React from 'react';
import Img from './components/Img';
import Title from './components/Title';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/cartContext';

function App() {
  return (<>
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <header className="App-header">         
            <Switch>
              <Route exact path="/">
                <div className="content">
                  <Img />
                  <Title text="Bienvenidos a la tienda e-commerce de RF 3D Lab."/>
                  <div className="container">
                    <ItemListContainer />
                  </div>
                </div>
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:categoryid">
                <p>Estoy en Categoría</p>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>           
          </header>
        </div>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
