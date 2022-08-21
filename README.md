# Curso React JS Coderhouse ⚛️
 
## Tercer entrega: Landing
Para esta entrega se generan dos componentes: **CartWidget** y **ItemListContainer**.

CartWidget es un símbolo de carrito con un badge que indica el número de productos en el mismo.
A este componente se le envía desde Navbar la prop de cantidad de items, esto por el momento se encuentra hardcodeado en un valor. Es necesario también agregar una lógica para que, en caso de que los items sean 0, no se muestre el badge.
``` jsx
<CartWidget itemsOnCart={4} />
```

ItemListContainer es un componente que consiste en un Hero de Daisy UI. Se envía el mensaje principal que aparece en el mismo como prop desde App.
``` jsx
<ItemListContainer greeting={"¡Bienvenido!"} />
```
## Script para correr la aplicación

### `npm install`

Instala las depencias necesarias para correr la aplicación.

### `npm run start`

Inicia la aplicación en modo desarrollo.\
Abriendo [http://localhost:3000](http://localhost:3000) se puede ver la aplicación corriendo en el navegador así como la actualización de cambios que se hagan.