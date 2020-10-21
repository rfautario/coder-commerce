import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let styleCart = {
  position: 'fixed',
  right: 20
}

function CartWidget () {
    return <div className="text-dark pull-right" style={styleCart}>
    <a href="/cart" title="Ir al carrito">
      <FontAwesomeIcon icon={faShoppingCart} />
    </a>
  </div>
}
export default CartWidget;