import React from 'react';
import Item from './Item';
import { Row, Col } from 'react-bootstrap';

function ItemList({ items }) {
    return <Row>
        <Col md={12} className="form-inline">{ items.map(i => (<Item item={i} key={i.id}/>)) }</Col>
    </Row>
}
export default ItemList;