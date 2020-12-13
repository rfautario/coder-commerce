import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import ItemList from './ItemList';

function ItemListContainer() {
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(null);
    const { categoryid } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        let itemCollectionFiltered = itemCollection;
            
        if (categoryid !== undefined) 
            itemCollectionFiltered = itemCollection.where('categoryId', '==', categoryid)

        itemCollectionFiltered.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                setError('No se encontraron resultados');
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, rejectMessage => {
            // Los rechazos se capturan en la segunda función
            console.log(rejectMessage)
        }).catch(err => {
            setError(err);
        });
    }, [categoryid]);

    return <>
    <h3>
        { (categoryid !== undefined ? categoryid.charAt(0).toUpperCase() + categoryid.slice(1) : 'Catálogo de productos') }
    </h3>
    <Container>{ items && <ItemList items={items} /> }</Container>
    { error && <p>{error}</p> }
    </>
}
export default ItemListContainer;