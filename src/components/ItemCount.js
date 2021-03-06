import React, { useState, useEffect } from 'react';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(parseInt(initial));
    const [mensaje, setMensaje] = useState();

    useEffect(() => {
        // eslint-disable-next-line
        if (cantidad == stock){
            setMensaje(`Se alcanzó la cantidad máxima del stock (${stock})`);
            setCantidad(stock);
        }else{
            setMensaje(''); 
        }
    }, [cantidad, stock]);

    function artMinus() {
        if (cantidad > 1)
            setCantidad(cantidad - 1);
    }

    function artAdd() {
        if (cantidad < stock)
            setCantidad(cantidad + 1);
    }

    let style = {
        display: 'flex',
        align: 'center',
        marginX: 0,
        paddingX: 0
    }
    let style2 = {
        color: 'red'
    }
    let styleDiv = {
        background: 'white',
        border: 'solid 2px black',
        borderRadius: 15,
        margin: 5,
        padding: 30,
        minWidth: 150
    }

    return <div style={styleDiv}>
        <div className="input-group" style={style} >
            <div style={style} className="input-group-prepend">
                <Button onClick={artMinus} className="w-100 btn btn-secondary">
                    <FontAwesomeIcon icon={faMinus} />
                </Button>
            </div>
            <input type="text" value={cantidad} placeholder="Ingrese cantidad del artículo" className="text-center form-control" readOnly/>            
            <div style={style} className="input-group-append">
                <Button  onClick={artAdd} className="w-100 btn btn-secondary">
                    <FontAwesomeIcon icon={faPlus} />  
                </Button>
            </div>
        </div>
        <Button className="w-100 mt-1 btn btn-primary btn-block" onClick = { ( ) => onAdd(cantidad) }>
            Agregar al carrito
        </Button>
        <h5 style={style2} className="mt-1 mb-0">{mensaje}</h5>
    </div>
}
export default ItemCount;