import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let styleCart = {
  //position: 'fixed',
  marginRight: 20,
  marginLeft:20
}

function CartWidget () {
    return <div className="text-dark pull-right" style={styleCart}>
    <a href="/cart" title="Ir al carrito" style={{ color: 'white' }}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </a>
  </div>
}
export default CartWidget;