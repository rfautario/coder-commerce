import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {
    const [cart, setCart] = useState(defaultCart);
    const [cartSize, setCartSize] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    // Nuestro almacen de estado de compra
    // Funciona como nuestra propia API

    function addItem(item) {
        // Agrega el item y actualiza el estado
        //console.log('Trataste de agregar el item:', item.item.id);
        console.log('Llega a addItem: ', item);
        
        // Analizar cart y decidir si existe
        const existe = cart.find(i => i.item.id === item.item.id); // buscar si existe

        if (!existe && item){
            // agregar
            console.log('Entra a agregar');
            setCart([...cart, item]);
            setCartSize(cartSize + item.quantity);
            setSubtotal(subtotal + item.item.price * item.quantity);
        }else{
            // actualizar
            console.log('Entra a actualizar');
            const index = cart.findIndex(i => i.item.id === item.item.id);
            
            //Seteo la nueva cantidad agregada del item
            setCartSize(cartSize - cart[index].quantity + Math.min(cart[index].item.stock, cart[index].quantity + item.quantity));
            
            //Modifico la cantidad que había en el carrito con lo agregado
            cart[index] =  { item: item.item, quantity: Math.min(cart[index].item.stock, cart[index].quantity + item.quantity) };
            setCart( cart );

            setSubtotal(subtotal - (cart[index].quantity * cart[index].item.price) + Math.min(cart[index].item.stock, cart[index].quantity + item.quantity) * item.item.price);
        }
    }

    function removeItem(itemId) {
        // Remueve un item por id y actualiza el estado
        console.log('Trataste de remover el item:', itemId);
        var removable = cart.find(i => i.item.id === itemId);

        setCartSize(cartSize - parseInt(removable.quantity));
        setCart(cart.filter( i => i.item.id !== itemId));
        setSubtotal(subtotal - (removable.quantity * removable.item.price));
        // Antes de terminar cada operación, actualizar el estado

        console.log('Así queda cart ', cart);
    }

    function clear() {
        setCart([]);
        setCartSize(0);
        setSubtotal(0);
    }

    return <CartContext.Provider value={{ 
            cart,
            addItem,
            removeItem,
            clear,
            cartSize,
            subtotal
        }}>
        { children }
    </CartContext.Provider>
}