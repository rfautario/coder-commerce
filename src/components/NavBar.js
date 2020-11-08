import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';

function NavBar () {
  const menus = [
    { id:'home', name: 'Home', url:''},
    { id:'impresoras', name: 'Impresoras', url:'/impresoras'},
    { id:'filamentos', name: 'Filamentos', url:'/filamentos'},
    { id:'info', name: '+ INFO', url:'/info'}
  ];

  return <>
  {/*}
  <nav className="navbar navbar-toggleable-md navbar-light bg-light fixed-top navbar-expand-sm">
    <a className="navbar-brand" href="/">
      <img src="logo192.png" width="90" height="90" className="align-top" alt="" />
    </a>

    <div className="" id="navbarSupportedContent align-top">
      <ul className="navbar-nav mr-auto">
        {
        menus.map(m => (
          <li key={m.id} className="nav-item">
            <NavLink to={m.url} className="nav-link" >{m.name}</NavLink>
          </li>
          ))
        }
      </ul>
      <form className="form-inline my-2 my-lg-0 d-inline-block">
        <input className="form-control mr-sm-2" type="text" placeholder="Buscar..." />
        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  <CartWidget />
  </nav>
      */}
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Image src="logo192.png" rounded width="90"/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        {
        menus.map(m => (
          <li key={m.id} className="nav-item">
            <NavLink to={m.url} className="nav-link" >{m.name}</NavLink>
          </li>
          ))
        }
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-info">Buscar</Button>
      </Form>
      <CartWidget />
    </Navbar>
    </>
}
export default NavBar;