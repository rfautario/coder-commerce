import React from 'react';
import ItemCount from './ItemCount';

function onAdd( cantidad ) {
    console.log(`Se agregaron ${cantidad} ítems al carrito`)
}

function ItemListContainer() {
    return <>
    <h3>
        Catálogo de productos
    </h3>
    <ItemCount stock="5" initial="2" onAdd={onAdd}/>
    </>
}
export default ItemListContainer;