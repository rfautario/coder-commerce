import React from 'react';
import Img from './components/Img';
import Title from './components/Title';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Info from './components/Info';
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
              <Route exact path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/category/:categoryid">
                <div className="content" style={{ width: '100%' }}>
                  <div className="container">
                    <ItemListContainer />
                  </div>
                </div>
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/info">
                <div className="content">
                  <Title text="+ INFO"/>
                  <div className="container">
                    <Info />
                  </div>
                </div>
              </Route>
            </Switch>           
          </header>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;