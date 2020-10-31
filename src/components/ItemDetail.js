import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';

let style = {
    borderRadius: '50%',
    width: '100%',
    maxWidth: 180,
    height: 180
}

function onAdd( cantidad ) {
    console.log(`Se agregaron ${cantidad} ítems al carrito`)
}

function ItemDetail({ item }) {
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
                        <ItemCount stock="5" initial="2" onAdd={onAdd} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
}
export default ItemDetail;