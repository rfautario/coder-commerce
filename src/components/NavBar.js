import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

function NavBar () {
  const menus = [
    { id:'home', name: 'Home', url:'/'},
    { id:'impresoras', name: 'Impresoras', url:'/category/impresoras'},
    { id:'filamentos', name: 'Filamentos', url:'/category/filamentos'},
    { id:'info', name: '+ INFO', url:'/info'}
  ];

  return <>
    <Navbar bg="light" >
      <Navbar.Brand href="/">
        <Image src="/logo192.png" rounded width="90"/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        {
        menus.map(m => (
          <li key={m.id} className="nav-item">
            <NavLink to={m.url} className="nav-link text-dark" >{m.name}</NavLink>
          </li>
          ))
        }
      </Nav>
      <CartWidget />
    </Navbar>
    </>
}
export default NavBar;