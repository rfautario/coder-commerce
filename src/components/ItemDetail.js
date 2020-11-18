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
    const { addItem } = useCartContext();

    function onAdd( cantidad ) {
        console.log(`Se agregaron ${cantidad} '${item.title}' al carrito`)

        // Recibir la cantidad e implementar el onAdd
        setAdded(true);
        addItem({ item: item, quantity: cantidad});
    }

    return <Row>
        <Col>
            <Card className="text-dark">
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="text-secondary">({item.categoryId})</Card.Subtitle>
                    <Card.Img variant="top" src={`../img/Product-${item.pictureUrl}-mini.jpg`} style={style}/>
                    <Card.Text style={{fontSize: 14}}>{item.description}</Card.Text>
                    <Card.Text>Precio: $ {item.price}</Card.Text>
                    <Row  className="justify-content-md-center">
                        <Col md={4}>
                        {!added && <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />}
                        {added && <Link to="/cart"><Button>Termina tu compra</Button></Link>}
                        </Col>
                        { /* <Toaster titulo={ cantidad, item[0].title } />*/ }
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
}
export default ItemDetail;