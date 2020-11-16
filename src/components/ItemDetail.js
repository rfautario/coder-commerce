import React, { useState } from 'react';
import { Button, Card, Col, Row, Toast } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
// import { Toaster } from './Toaster';

let style = {
    borderRadius: '50%',
    width: '100%',
    maxWidth: 180,
    height: 180
}

function ItemDetail({ item }) {
    const [added, setAdded] = useState(false);
    const { cart, addItem } = useCartContext();

    // Importar el CartContext ->
    function onAdd( cantidad ) {
        console.log(`Se agregaron ${cantidad} '${item[0].title}' al carrito`)

        // Recibir la cantidad e implementar el onAdd
        setAdded(true);
        addItem({ item: item[0], quantity: cantidad});
    }

    return <Row>
        <Col>
            <Card className="text-dark">
                <Card.Header>{item[0].title}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="text-secondary">Impresora 3D #{item[0].id}</Card.Subtitle>
                    <Card.Img variant="top" src={`../img/Product-${item[0].pictureUrl}-mini.jpg`} style={style}/>
                    <Card.Text style={{fontSize: 14}}>{item[0].description}</Card.Text>
                    <Card.Text>Precio: $ {item[0].price.toLocaleString('es')}</Card.Text>
                    <Row  className="justify-content-md-center">
                        <Col md={4}>
                        {/*!added && */ <ItemCount stock={item[0].stock} initial="1" onAdd={onAdd} />}
                        {added && <Link to="/cart"><Button>Termina tu compra</Button></Link>}
                        {console.log(cart)}
                        </Col>
                        { /* <Toaster titulo={ cantidad, item[0].title } />*/ }
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
}
export default ItemDetail;