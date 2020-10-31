import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

function getItems (id){
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res([
                { id: 1, title: "Creality Ender 3 v2", price: 50000, pictureUrl: '01', description: 'La impresora 3d Creality Ender 3 v2, llega totalmente renovada, en cuanto a electrónica, chasis y muchas mejoras.\nEs la evolución de años de experiencia y de escuchar a la comunidad que es la que ha hecho la que la Ender 3 V2 sea una gran impresora.\nNo hay que hacer prácticamente nada más que montar, imprimir y disfrutar creando.' },
                { id: 2, title: "Hellbot Magna I", price: 45000, pictureUrl: '02', description: 'Tecnología de impresión: FDM\nVolumen de impresióN: 220x220x260\nResolución de capa: 100-400 micrones\nDiámetro de filamento: 1,75mm\nNozzle (PICO EXTRUSOR): 0,4mm\nelocidad máxima de impresión: 180 mm/s\nVarillas (x – y – z): De acero resistentes al desgaste tipo acme\nMotores: Nema 17\nSoftware: Propio del fabricante, Repetier-Host, Cura, SimpliFy3D\nFormato de archivos: STL\nPresición de impresión: +/- 0,1mm\nConectividad: SD\nTemp. máx. de cama: 100º\nTemp. máx. de extrusor: 250º\nPeso neto: 8,5 Kg' },
                { id: 3, title: "Prusa i3 MK3s", price: 150000, pictureUrl: '03', description: 'La Prusa i3 es una impresora 3D de fabricación por deposición de filamento fundido (FFF por sus siglas en inglés) de código abierto. Forma parte del proyecto RepRap y es la impresora 3D más utilizada en el mundo. La Prusa i3 fue diseñado por Josef Průša en 2012 con la Prusa i3 MK2 lanzada en 2016 y la MK2S presentada en 2017.​ Su última versión, la Prusa i3 MK3 fue presentada en septiembre 2017 con mejoras significativas sobre los modelos previos.\nEl bajo costo y la facilidad de construcción y modificación de la Prusa i3 la han convertido en una popular herramienta en educación tanto para aficionados como para profesionales. Debido a que la impresora es de código abierto, ha habido muchas variantes producidas por compañías y particulares en todo el mundo, y como muchas otras impresoras RepRap, la Prusa i3 es capaz de imprimir algunas de sus partes.\nCuenta con cama caliente desmontable, lo que permite intercambiarla por otras. Se pueden elegir hasta tres tipos distintos de bases para esta cama caliente.' },
                { id: 4, title: "Artillery Genious", price: 75000, pictureUrl: '04', description: 'Artillery Genius es una impresora 3D cartesiana todo en uno con controladores paso a paso ultra silenciosos, extrusora de accionamiento directo, doble eje Z, cama de vitrocerámica calentada por CA (superficie muy plana), pantalla táctil TFT y sensor de parada de proximidad magnética para proporcionar una larga vida útil y una impresión 3D precisa y silenciosa.' }
            ].filter(
                i => i.id === id
            ));
        }, 2000);
    });
}

function ItemDetailContainer({ item }) {
    const [detail, setDetail] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Initalized item detail container');

        getItems(item).then(detail => {
            // guardan en un estado
            setDetail(detail);
        }, rejectMessage => {
            // Los rechazos se capturan en la segunda función
            console.log(rejectMessage)
        }).catch(err => {
            setError(err);
        });
    }, [item]);
    
    return <>
    <h3>
        Detail
    </h3>
    <Container>{detail && <ItemDetail item={detail} />}</Container>
    {error && <p>{error}</p>}
    </>
}
export default ItemDetailContainer;