import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import ItemList from './ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const { categoryid } = useParams();

    useEffect(() => {
        console.log('Initalized item list container');
        const db = getFirestore();
        const itemCollection = db.collection('items');
        let itemCollectionFiltered = itemCollection;
            
        if (categoryid !== undefined) 
            itemCollectionFiltered = itemCollection.where('categoryId', '==', categoryid)

        itemCollectionFiltered.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
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
        Catálogo de productos
    </h3>
    <Container>{items && <ItemList items={items} />}</Container>
    { /*<ItemCount stock="5" initial="2" onAdd={onAdd} />*/}
    {error && <p>{error}</p>}
    </>
}
export default ItemListContainer;