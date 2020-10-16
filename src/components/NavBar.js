import React from 'react';

function NavBar () {
    return <nav className="navbar navbar-toggleable-md navbar-light bg-light fixed-top navbar-expand-sm">
    <a className="navbar-brand" href="/">
      <img src="logo192.png" width="90" height="90" className="align-top" alt="" />
    </a>

    <div className="" id="navbarSupportedContent align-top">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active d-inline-block">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Impresoras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Filamentos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/info">+ INFO</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0 d-inline-block">
        <input className="form-control mr-sm-2" type="text" placeholder="Buscar..." />
        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
}
export default NavBar;