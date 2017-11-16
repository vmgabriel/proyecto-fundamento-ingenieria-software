# Universidad Distrital Francisco José de Caldas
## Facultad Ingeniería

![alt Escudo-de-Universidad](logo/UD-logo.gif)

### Proyecto de fundamentos de ingenieria de software (FIS)

Proyecto para FutPro, una plataforma para el control basico de pagina web que pueda mostrar eventos y registro a los estudiantes

#### Integrantes
- Cristian Eduardo Rios Guarín
- Gabriel Vargas Monroy

### Dependencias
- node
- navegador web
- npm -> gestor de librerias de node, viene con la instalacion
- git
- mongoDB

### Instalacion y montaje
#### Primer Uso
para el primer uso se debe tener el git descargado
```
git clone https://gitlab.com/Nekrozz/ProyectoFIS.git
```
luego se debe instalar las dependencias del proyecto, en el directorio del proyecto

```
npm install
```

Esto tardara dependiendo de algunas cosas como el internet y el tamaño de los archivos, el
siguiente paso es cargar el mongo, EL MONGO DEBE ESTAR EJECUTANDOSE.

Luego de ello podemos cargar el servidor, desde la carpeta con este comando:
```
node app.js
```
Esto no mostrara nada a menos que haya generado un error debemos ingresar desde el
navegador a `localhost:8080` mostrando la pagina montada y lista para su uso

#### Usos Posteriores
Ya no necesitas sino cargar la base de datos y el servidor
```
node app.js
```

### Lenguaje

El proyecto prescindira de javascript como su base ademas de un completo control
con mongoDB como base de datos, como motor visual jade, como constructor base
express, con back-end base nodejs entre algunas otras herramientas

### Construccion en front-end de la pagina web

![alt logo-javascritp-css-html](logo/hcj.jpg)

### Construccion de back-end

![alt logo-node.js](logo/node.png)

### Enfoque (Framework a usar)

![alt logo-de-express](logo/express-logo.png)

### Motor Grafico (Template Engine)

![alt logo-de-jade-lang](logo/jade-logo.png)

### Base de Datos (Dirigida a Documentos -> Virtualizacion a Estructurada)

Sabiendo que es una base de datos NOSQL virtualizaremos la forma de estructurarlo

![alt logo-de-mongo-DB](logo/logo_mongo.png)
