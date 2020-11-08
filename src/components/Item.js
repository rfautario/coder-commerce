import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let style = {
    borderRadius: '50%',
    width: '100%',
    maxWidth: 120,
    height: 120
}

function Item({ item }) {
    return <Col md={4} className="mb-1">
        <Link to={`/item/${item.id}`} style={{textDecoration: 'none'}} title={`Ver detalle de ${item.title}`}>
            <Card className="text-dark">
                <Card.Header>
                {item.title}
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="text-secondary">Impresora 3D #{item.id}</Card.Subtitle>
                    <Card.Img variant="top" src={`../img/Product-${item.pictureUrl}-mini.jpg`} style={style}/>
                    <Card.Text>Precio: $ {item.price.toLocaleString('es')}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    </Col>
}
export default Item;