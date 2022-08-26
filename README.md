# Curso React JS Coderhouse ⚛️
 
## Cuarta entrega: Contador con Botón

Consigna: crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems. 

Dentro del componente ItemCount se tienen los siguientes estados:

El estado count, que se inicaliza con el valor inicial que llega desde el componente ItemListContainer. Este contador es el que se actualiza al presionar los botones + y -.

``` jsx
const [count, setCount] = useState(initial);
```

El estado disableAdd, deshabilita el funcionamiento del botón de suma, y su lógica inical depende del valor inicial y stock.
``` jsx
const [disableAdd, setDisableAdd] = useState(initial < stock ? false : true);
```

El estado disableSub, deshabilita al botón de resta y depende del valor inicial.
``` jsx
const** [disableSub, setDisableSub] = useState(initial > 0 ? false : true);
```


## Script para correr la aplicación

### `npm install`

Instala las depencias necesarias para correr la aplicación.

### `npm run start`

Inicia la aplicación en modo desarrollo.\
Abriendo [http://localhost:3000](http://localhost:3000) se puede ver la aplicación corriendo en el navegador así como la actualización de cambios que se hagan.