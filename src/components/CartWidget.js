import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../context/cartContext';
import { Badge } from 'react-bootstrap';

let styleCart = {
  //position: 'fixed',
  marginRight: 20,
  marginLeft:20
}

let styleBadge = {
  bottom: 10,
  position: 'relative',
  left: 2
}

function CartWidget () {
  const { cartSize } = useCartContext();

    return <div className="text-dark pull-right" style={styleCart}>
    <a href="/cart" title="Ir al carrito" style={{ color: 'black' }}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartSize > 0 && <Badge variant="primary" style={ styleBadge }>{ cartSize }</Badge>}
    </a>
  </div>
}
export default CartWidget;