import React, { useState } from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../context/cartContext';
import { Card, Button, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore }  from '../firebase';

function Cart () {
    const { cart, removeItem, clear, cartSize, subtotal } = useCartContext();
    const [ checkout, setChekout ] = useState();

    async function createOrder() {
        const newOrder = {
            buyer: { name: 'Rodrigo', phone: '+5491161181207', email: 'asd@asd.com'},
            item: 
                cart.map(i => ({ id: i.item.id, title: i.item.title, price: (i.item.price * i.quantity), quantity: i.quantity } ))
            ,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: subtotal
        }
        console.log('newOrder ',newOrder);

        const db = getFirestore();

        /*
        const items = await db.collection('items').get();
        
        const itemQueryByManyId = await db.collection("items")
        .where(firebase.firestore.FieldPath.documentId(),
        'in', cart.map( c => c.item.id) )
        .get();

        debugger;

        items.docs.map(d => ({ ...d.data(), id: d.id })).map(({ id, title, price, stock }) => ({ id, title, price, stock } ) );
        */

        const orders = db.collection('orders');

        const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', cart.map( i => i.item.id ));

        const query = await itemsToUpdate.get();

        try { 
            const id = await orders.add(newOrder);
            console.log('Order created with id: ', id);

            const batch = db.batch();

            query.docs.forEach((docSnapshot, idx) => {
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].quantity });
            });

            await batch.commit();
            clear();

        } catch (err) {
            console.log('Error creating order: ', err);
        }
    }

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
            <Button variant="outline-danger" className="mr-5" onClick={() => { clear() }} title="Vaciar el carrito">
                                    Vaciar el carrito <FontAwesomeIcon icon={faTimes} />
                                </Button>
            </>}
            <Link to="/">
                <Button variant="secondary">Volver a inicio</Button>
            </Link>
            {cartSize > 0 &&
                <Row>
                <Col>
                    <Button variant="primary" onClick={createOrder} className="float-right">Crear Orden</Button>
                </Col>
            </Row>}
            
        </Card.Body>
    </Card>
}
export default Cart;