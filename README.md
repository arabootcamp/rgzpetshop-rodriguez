# Ecomerce Tienda de Mascotas rgzpetshop (Comisión 37075)
***
## Descripción
Aplicación de tienda para mascotas (perro y gato) con 3 categorias de productos: 
- alimento
- farmacia
- juguetes y accesorios. 

## Tecnología/Dependencias

Librerias, Framework:
- React, react-router-dom , bootstrap-react, sass, fortawesome, sweet alert 2

Consideraciones
- Por el momento y para facilidad de las entregas se utiliza https://fakestoreapi.com sin embargo más adelante se construira la api relativa al Ecomerce Tienda de Mascotas rgzpetshop

## Rutas del sitio
Las rutas para navegar sobre el sitio son:
- ‘/’ navega a <ItemListContainer />
- ‘/category/:id’  navega a <ItemListContainer /> (muestra los productos asociados a una categoria, id puede tomar los valores: electronics, jewelery, men's%20clothing y women's%20clothing)
- ‘/item/:id’ navega a <ItemDetailContainer /> (muestra el detalle de un producto, el id puede ser un número del 1 al 20 e identifica a un producto)

## Ejecutar el programa

Instale dependencias...
```sh
npm i
```
Para desplegar en desarrollo...
```sh
npm start
```

## Otros comentarios

### Desafío 9 - Cart view
Consideraciones
- Se aplica feedback tutor, el botón "agregar al carrito" ejecuta la función addItem.
- Cuando el usuario ingrese al carrito (sin haber agregado productos), se muestra un mensaje y un botón para que el usuario se pueda dirigir al catálogo (la ruta “/”).
- En ruta /cart si se hace click sobre la imagen lleva al detalle de esta.
- En ruta /cart total compra se fija con 2 decimales.

### Desafío 8 - Cart context
Consideraciones
- El producto se añade al carro cuando se da click en terminar compra, como se ejemplifico en clases.

### Desafío 7 - Sincronizar counter
Consideraciones
- En carpeta routes se creo el componente AppRouter el cual luego se importa en App.js, tal como se aconseja en "Clase complementaria de Context en Acción"
- Se saca el ItemCount de Item.

### Configurar Routing (primera entrega del proyecto)
Consideraciones
- Se respeta setear el tipo de dato en las variables de estado
- Se utiliza ternario con loading para la carga del itemDetail y otras cargas.
- Se añadio useConter en base a AfterClass Repaso Clase 4 y 5
- Se uso fetch a la api https://fakestoreapi.com/products 
- Las variables initial y stock se les asigno valor porque la api utilizada no tiene esos campos, sin embargo en la api para "Ecomerce Tienda de Mascotas rgzpetshop" cada producto tendrá presente estos campos.

### Desafío 6 - Detalle de producto
Consideraciones:
- ninguna

### Desafío 5 - Catálogo con maps y promises
Consideraciones:
- Se elimino "Camisa Tiger" del componente ItemCount
- Se uso fetch a la api https://fakestoreapi.com/products

### Desafío 4 - Contador con botón
Consideraciones:
- Props initial=1 y stock=5
- Si el count llega a 1 o 5 se envia un mensaje.
- Si count llega a 1 se deshabilita el boton "-"
- Si count llega a 5 se deshabilita el boton "+"
- Al presionar botón "Agregar carrito" se envia mensaje de producto agregado.
- Se utiliza "sweetalert2" para los mensajes o alert

### Desafío 3 - Crea tu landing
Consideraciones:
- Se aplico estructura de carpetas señalada por el profesor.
- Se utilliza modulos en los estilos según lo aprendido en clase complementaria de repaso y dudas generales.

### Desafío 2 - Menú e-commerce
Consideraciones:
- Se aplico estructura de carpetas señalada por el profesor en las clases, es decir cada componente en una carpeta y dentro de ella los archivos index.jsx y styles.css
- Se utilizo bootstrap-react y font-awesome

### Desafío 1 - Crear la app utilizando el cli
#### _Visualizar aplicación en navegador_
Para desplegar en desarrollo...
```sh
npm start
```