import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useCartContext } from '../context/cartContext';
import Toaster from './Toaster';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore }  from '../firebase';
import { Redirect } from 'react-router-dom';

function InputFieldForm({ title, children }) {
    const labelStyle = {
        fontSize: 18,
        paddingRight: 15
    }

    return (
        <Row>
            <Col md="4">
                <p style={labelStyle}>{title}</p>
            </Col>
            <Col>
                {children}
            </Col>
        </Row>
    );
}

function useTextInput(defaultValue) {
    const [val, setVal] = useState();
    console.log('renderea')

    return { 
      onChange: evt => setVal(evt.target.value),
      value: val,
      type: "text",
      className: "form-control col-md-12"
    };
}

function Cart () {
    const { cart, subtotal, clear } = useCartContext();
    const [ checkout, setChekout ] = useState();
    const nombre = useTextInput("");
    const apellido = useTextInput("");
    const telefono = useTextInput("");
    const mail = useTextInput("");
    const [ finalizar, setFinalizar ] = useState(true);
    const [ redirect, setRedirect ] = useState(false);
    const [ error, setError ] = useState(false);

    function checkMailRepetido(evt) {
        if (mail.value === evt.target.value && nombre.value && apellido.value && telefono.value && mail.value) {
            setFinalizar(false);
            setError(false);
        }else{
            setFinalizar(true);
            setError(true);
        }
    }    

    async function createOrder() {
        const newOrder = {
            buyer: { name: `${apellido.value}, ${nombre.value}`, phone: telefono.value, email: mail.value},
            item: cart.map(i => ({ id: i.item.id, title: i.item.title, price: (i.item.price * i.quantity), quantity: i.quantity } )),
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: subtotal
        }
        
        const db = getFirestore();

        const orders = db.collection('orders');

        const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', cart.map( i => i.item.id ));

        const query = await itemsToUpdate.get();
        
        try { 
            setFinalizar(true);
            const id = await orders.add(newOrder);
            setChekout(id.id);
            
            const batch = db.batch();

            query.docs.forEach((docSnapshot, idx) => {
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].quantity });
            });

            await batch.commit();
            
            //Una vez todo concluido, borro el carrito y redirijo a la home
            clear();
            setTimeout(() => {
                setRedirect(true);    
            }, 3000);            
        } catch (err) {
            console.log('Error creating order: ', err);
        }
    }   

    return <>
        <Card.Header>Complete sus datos</Card.Header>
        <Card.Body>
            <InputFieldForm title="Nombre">
                <input {...nombre} />
            </InputFieldForm>
            <InputFieldForm title="Apellido">
                <input {...apellido} />
            </InputFieldForm>
            <InputFieldForm title="Teléfono">
                <input {...telefono} />
            </InputFieldForm>
            <InputFieldForm title="Email">
                <input {...mail} />
            </InputFieldForm>
            <InputFieldForm title="Repetir Email">
                <input
                    type="text"
                    className="form-control col-md-12"
                    onChange={ checkMailRepetido }
                />
                { error && <div class="form-control-feedback" style={{ fontSize: 14, color: 'red' }} >Los mails no coinciden.</div> }
            </InputFieldForm>
            <Row>
                <Col>
                    <Button variant="primary" onClick={createOrder} className="float-right mt-1" disabled={ finalizar }>
                        Finalizar compra
                    </Button>
                </Col>
            </Row>
        </Card.Body>
        { checkout !== undefined && <Toaster titulo='Compra realizada!' texto={`Se ha creado su orden con el número # ${checkout}.\n\nGracias por tu compra!`} /> }
        { redirect && <Redirect to="/" /> }
        </>
}
export default Cart;