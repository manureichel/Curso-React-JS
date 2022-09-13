# Curso React JS Coderhouse ⚛️
 
## Entrega: CartContext

Se utiliza Context API para mantener el estado de compra del usuario. Dentro de este Context, llamado `CartContext`, se tiene una lógica con funciones para agregar nuevos productos, verificar si ya existe en el carrito, eliminar todos o uno solo por Id.

Algunas de estas funciones no están aún implementadas, ya que aún no se implementó una vista del carrito antes de realizar la compra. En esta instancia se podrá eliminar uno o más productos, cambiar las cantidades, limpiar el carrito, etc.

#### Consumers:

Actualmente los componentes `Navbar` e `ItemDetail` son los consumers de la información proveniente de `CartContext`.

En navbar se utiliza la información del estado cart para renderizar la cantidad de items en el carrito en el componente `CartWidget`, mientras que en `ItemDetail` se lo utiliza para hacer uso de la función `addItem`, que recibe producto y cantidad e incorpora (si este no existe todavía) el producto en cuestión al carrito.

## Script para correr la aplicación

### `npm install`

Instala las depencias necesarias para correr la aplicación.

### `npm run start`

Inicia la aplicación en modo desarrollo.\
Abriendo [http://localhost:3000](http://localhost:3000) se puede ver la aplicación corriendo en el navegador así como la actualización de cambios que se hagan.