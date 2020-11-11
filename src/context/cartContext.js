import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {

    return '';
    /*
    const [cart, setCart] = useState(defaultCart); // [item1, item2, item3]
    // Nuestro almacen de estado de compra
    // Funciona como nuestra propia API

    function add(item) {
        // Agrega el item y actualiza el estado
        console.log('Trataste de agregar el item:', item.id);

        // Analizar cart y decidir si existe
        const item = cart.find(); // buscar si existe

        if (item){
            // agregar
            setCart([...cart, item]);
        }else{
            // actualizar
            item = {... item, quantity: nuevaCantidad };
            setCart([...cart, item]);
        }

        // Antes de terminar cada operación, actualizar el estado
    }

    function remove(itemId) {
        // Remueve un item por id y actualiza el estado
        console.log('Trataste de remover el item:', itemId);
        setCart(cart.filter( item => item.id !== itemId));

        // Antes de terminar cada operación, actualizar el estado
    }

    return <CartContext.Provider value={{ cart, add, remove }}>
        { children }
    </CartContext.Provider>
    */
}


/*
<CartProvider defaultCart={[]}>
    <Componente />
</CartProvider>
*/