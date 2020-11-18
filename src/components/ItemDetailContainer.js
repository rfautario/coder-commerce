import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

function ItemDetailContainer({ item }) {
    const [detail, setDetail] = useState();
    const [error, setError] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        console.log('Initalized item detail container');
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const itemFiltered = itemCollection.doc(id);

        /*
        EJEMPLOS DE FILTROS
        // Filtro por precio        
        const pricedItems = itemCollection.where('price', '>', 49000);

        // Filtro por categoria
        // const catCollection = itemCollection.where('categoryId', '==', categoryId)

        // Filtro concatenado
        // const concatenado = itemCollection.where('categoryId', '==', categoryId).where('price', '>', 49000);
        */
       
       itemFiltered.get().then(doc => {
            if (doc.size === 0) {
                console.log('No results');
            }
            setDetail({ id: doc.id, ...doc.data() });
        }, rejectMessage => {
            // Los rechazos se capturan en la segunda función
            console.log(rejectMessage)
        }).catch(err => {
            setError(err);
        });
    }, [id]);
    
    return <>
    <Container>{detail && <ItemDetail item={detail} />}</Container>
    {error && <p>{error}</p>}
    </>
}
export default ItemDetailContainer;