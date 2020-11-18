import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../context/cartContext';
import { Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart () {
  const { cart, removeItem, clear, cartSize, subtotal } = useCartContext();

    return <Card className="text-dark" style={{minWidth: 1000 }}>
        <Card.Header>Carrito</Card.Header>
        <Card.Body>
            {cartSize === 0 && <>
                <Card.Text style={{fontSize: 14}}>Tu carrito está vacío</Card.Text>
                </>}
            {console.log('cart size: ',cartSize)}
            {cartSize > 0 && <>
                <Card.Text style={{fontSize: 20}}></Card.Text>
            <Table responsive="md">
                <thead>
                <tr>
                    <th width="50%">Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th></th>                    
                </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.item.id}>
                            <td style={{textAlign: 'left'}}>{item.item.title}</td>
                            <td>{item.quantity }</td>
                            <td>$ {item.item.price.toLocaleString('es')}</td>
                            <td>$ {(item.item.price * item.quantity).toLocaleString('es')}</td>
                            <td><Button variant="outline-danger" onClick={() => { removeItem(item.item.id) }} title="Borrar el item">
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Card.Text className="text-right mt-5 font-weight-bold">Total: $ {subtotal.toLocaleString('es')}</Card.Text>
            <Button variant="outline-danger" className="mr-5" onClick={() => { clear() }} title="Borrar el item">
                                    Vaciar el carrito <FontAwesomeIcon icon={faTimes} />
                                </Button>
            </>}
            <Link to="/">
                <Button variant="secondary">Volver a inicio</Button>
            </Link>
        </Card.Body>
    </Card>
}
export default Cart;