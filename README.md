# Bienvenidos a la tienda e-commerce de RF_3D_LAb

Esta aplicación fue desarrollada por **Rodrigo Fautario** para el curso de **React.js** de **CoderHouse**.

## Instrucciones de instalación
Se deben ejecutar los siguientes comandos para instalar el repositorio

    npm install
    
    npm start
El proyecto se iniciará en la siguiente URL [http://localhost:3000](http://localhost:3000)

**Nota:** se da por supuesto que ya se encuentra instalado Node, React.JS y se clonó el repositorio desde GitHub

## Code styling
* Todo el código en este proyecto fue desarollado usando camelCase
* Se busca respetar los principios de optimización para implementar los principios KISS, DRY y YAGNI, como mínimo

## Funcionalidades
* Menú de navegabilidad con RouterLink.
* Icono del carrito persistente en la barra del NavBar que indica la cantidad de ítems agregados al mismo mediante una burbuja en el mismo icono.
* Filtro de items por tipo de categoría el cual es accesible desde el propio menú de cabecera
* Listado de todos los items disponibles en Firebase Firestore. Los mismos indican detalles propios del producto, una imagen y el stock restante.
* Un detalle del producto al navegar el mismo junto a la posibilidad de agregar X cantidad de productos al carrito (siempre y cuando haya stock del mismo).
* Un carrito que incluye un desgloce de los productos agregados y cantidad de los mismos, como así también el cálculo del subtotal por producto y general.
* Un formulario con los datos propios de la persona para finalizar la compra.
* Notificaciones emergentes al agregar un producto y al finalizar la compra.

Se buscó brindarle al usuario una navegación fácil e intuitiva en todo el sitio.


## Dependencias
Se utilizaron las siguientes dependencias:
* bootstrap (v 4.5.3)
* firebase (v 7.2.3)
* react (v 16.13.1)
* react-bootstrap (v 1.3.0)
* react-dom (v 16.13.1)
* react-fade-in (v 1.1.1)
* react-router-dom (v 5.2.0)
* react-scripts (v 3.4.4)
* react-transition-group (v 4.4.1)
* todo el paquete de Font Awesome y derivados (v 0.1.11)


## Convenciones

#### Testing
Por favor incluir tests automatizados en cada commit

## Features especiales
- Todas las notificaciones son emergentes y se muestran a través de Toast de '*react-bootstrap*'
- Se buscó simplificar el código HTML de todo el sitio a través de '*react-bootstrap*'
- Imágenes de productos y descripciones reales


## Extra
El sitio fue inspirado en mi emprendimiento personal de impresiones 3D y venta de impresoras.
Se puede visitar en mi perfil de Instagram [@RF_3D_LAB](https://www.instagram.com/rf_3d_lab).