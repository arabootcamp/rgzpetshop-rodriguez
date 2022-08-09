# Ecomerce Tienda de Mascotas rgzpetshop (Comisión 37075)
***
## Descripción
Aplicación de tienda para mascotas (perro y gato) con 3 categorias de productos: 
- alimento.
- farmacia.
- juguetes y accesorios. 

## Tecnología/Dependencias
Librerias, Framework:
[react-url]: biblioteca de JavaScript para construir interfaces de usuario.
[react-router-dom-url]: permite implementar enrutamiento dinamico en la aplicación web.
[bootstrap-react-url]: framework basado en componentes para el diseño de la aplicación web.
[sass-url]: preprocesador de css que permite generar de forma automatica hojas estilo. Este preprocesador tiene la ventaja que nos permite utilizar caracteristicas que aplican a lenguajes de programación (variables, funciones, selectores anidados, herencia, etcétera).
[fortawesome-url]: repositorio de iconos.

## Rutas del sitio:
- "/": muestra el home del sitio.
- "/categories/categoryName": muestra alguna de las categorias del sitio (alimento, farmacia o juguetes y accesorios).
- "/item/productId": muestra el detalle de un producto en especifico, identificado por su "id".
- "/cart": muestra los productos que se han añadido al carro.
- "/signin": muestra formulario para logearse en la aplicación.
- "/signout": muestra formulario para registrarse en la aplicación (solo se implementó la vista, hace nada al dar click en registrarse).
- "/ordersearch": muestra un formulario para buscar una orden en especifico, mediante el id de orden.

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

### Entrega Final
Contenido [git-repo-url]:
- Fuentes aplicación

Video que muestra la navegabilidad y los flujos básicos de la aplicación [video]
Deploy app en firebase [app-react-firebase]

Consideraciones, según lo solicitado en el desafío final:
- "El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados". Hasta el desafio 11 el cart solo se mostraba si habia producto en este, pero ahora se modifico según lo indicado.

Extras implementados:
- auth/login. 
- Stock check, se valida con batch updates.
- Categorías dinámicas, se creo collection categories(id,name)
- Cart persistente, se implementó un hooks para guardar en localStorage
- Mis órdenes, en ruta "/ordersearch" y se elimino ruta "orders" creada en desadío 11

Usuario default:
- correo: test@react.com 
- contraseña: 123456

### Desafío 11 - Item collection II
Consideraciones
- Se elimina el React.StrictMode para evitar duplicados en insert a firestore.
- Se utilizo Batch Updates para el stock de productos y luego crear la orden.
- El componente Buyer muestra el formulario del comprador y una vez realizado submit en este se ejecuta la petición a firestore para actualizar los stock de productos y crear la orden.
- Por el momento la peticion a firestore se realiza por la función "savePurchaseOrder" en carpeta utils.
- Por el momento, si la orden es correcta es decir hay stock se ingresa y se indica el id de la orden generada, en caso de error se indica mensaje de error. Luego de 5 segundos se cierra la ventana modal y se limpia el carrito de compras quedando en la ruta "/cart".
- Se creo una ruta http://localhost:3000/orders para visualizar ordenes ingresadas.

### Desafío 10 - Item collection
Consideraciones
- Se añaden imagenes de los productos ubicadas en public/assets/imgs
- Se realizo cambios de nombres a la ruta de un ejercicio anterior category/:id es ahora category/:categoryName y la ruta "item/id" se cambio por "item/:productId", esto con el fin de hacerlo más descriptivo.
- Se hizo un hoock para el Firestore, en base a lo aprendido en clase complementaria de Repaso Firebase.

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

[git-repo-url]: <https://github.com/arabootcamp/rgzpetshop-rodriguez>
[video]: <https://drive.google.com/drive/folders/10XQTw_KdRE5I6KbmSKv7kCM2sqJgBHbp?usp=sharing>
[app-react-firebase]: <https://rgzpetshop.web.app>
[react-url]: <https://es.reactjs.org/>
[react-router-dom-url]: <https://reactrouter.com/>
[bootstrap-react-url]: <https://react-bootstrap.github.io/>
[sass-url]: <https://sass-lang.com/>
[fortawesome-url]: <https://fortawesome.com/>