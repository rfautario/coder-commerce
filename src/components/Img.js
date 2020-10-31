import React from 'react';
import logo from '../logo.png';

let style = {
    width: 150,
    height: 150
}

function Img() {
    return <img src={logo} className="App-logo" alt="logo" style={style}/>
}
export default Img;