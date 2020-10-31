import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';

const getItems = new Promise( (res, rej) => {
    setTimeout( () => {
        res([
            { id: 1, title: "Creality Ender 3", price: 50000, pictureUrl: '01' },
            { id: 2, title: "Hellbot Magna dual", price: 45000, pictureUrl: '02' },
            { id: 3, title: "Prusa MK3s", price: 150000, pictureUrl: '03' },
            { id: 4, title: "Artillery Genious", price: 75000, pictureUrl: '04' }
        ]);
    }, 2000);
});

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Initalized item list container');

        getItems.then(items => {
            // guardan en un estado
            setItems(items);
        }, rejectMessage => {
            // Los rechazos se capturan en la segunda función
            console.log(rejectMessage)
        }).catch(err => {
            setError(err);
        });
    }, []);

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