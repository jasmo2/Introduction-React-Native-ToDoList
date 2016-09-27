# React-Native Presentation
## My first ToDo-List  
Primero que todo [React-Native getting started](https://facebook.github.io/react-native/docs/getting-started.html#content);

Los comandos que debemos correr son:

 `npm install -g react-native-cli`

`react-native init todoList`

`cd todoList`

`npm install`

`react-native run-ios`
<hr>

## Paso 2

Por ahora estructuremos nuestro proyecto:
agremos una carpeta llamada **src** y dentro otra carpeta llamada components donde crearemos todos los componentes necesarios para la aplicación.


    |-- todoList
      |-- src
        |-- styles
        |-- components
ahora procedamos a crear nuestro primer componente:
**container.js**

de aquí reconfiguramos index.ios.js para correr la aplicación.

<hr>

## Paso 3
vamos a agregar nuestras tareas en un componente aparte.
**ToDoList** que será el encargado de listar los _ToDo's_
Como se vé el es obtiene las propiedades que el **Container** le envia por medio de sus propiedades.


<hr>

## Paso 4
Se agrega un ponente Item que será cada To-Do

vamos a usar [renderrow de RN](https://facebook.github.io/react-native/docs/listview.html#renderrow)
aquí nos indica que tenemos los siquientes metodos

 `(rowData, sectionID, rowID, highlightRow)`

También es esta sección manejaremos los metodos de presionar el _To-Do_ desde el contenedor para poder añadir nuevos _To-Do's_ en un futuro.
