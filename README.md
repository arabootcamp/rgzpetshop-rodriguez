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

### Desafío 7
Consideraciones
- Se respeta setear el tipo de dato en las variables de estado
- Se utiliza ternario con loading para la carga del itemDetail y otras cargas.
- Se añadio useConter en base a AfterClass Repaso Clase 4 y 5
- Se uso fetch a la api https://fakestoreapi.com/products 

### Desafío 6
Consideraciones:
- ninguna

### Desafío 5
Consideraciones:
- Se elimino "Camisa Tiger" del componente ItemCount
- Se uso fetch a la api https://fakestoreapi.com/products

### Desafío 4
Consideraciones:
- Props initial=1 y stock=5
- Si el count llega a 1 o 5 se envia un mensaje.
- Si count llega a 1 se deshabilita el boton "-"
- Si count llega a 5 se deshabilita el boton "+"
- Al presionar botón "Agregar carrito" se envia mensaje de producto agregado.
- Se utiliza "sweetalert2" para los mensajes o alert

### Desafío 3
Consideraciones:
- Se aplico estructura de carpetas señalada por el profesor.
- Se utilliza modulos en los estilos según lo aprendido en clase complementaria de repaso y dudas generales.

### Desafío 2
Consideraciones:
- Se aplico estructura de carpetas señalada por el profesor en las clases, es decir cada componente en una carpeta y dentro de ella los archivos index.jsx y styles.css
- Se utilizo bootstrap-react y font-awesome

### Desafío 1
#### _Visualizar aplicación en navegador_
Para desplegar en desarrollo...
```sh
npm start
```