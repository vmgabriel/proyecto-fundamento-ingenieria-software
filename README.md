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

#### Sobre la base de datos mongo

Los datos ingresados a mongo estan en el archivo, debe cargar la consola y ejecutar uno por fundamentos

```
show databases
```
Esto vera las bases de datos activas
```
db
```
Muestra en que base de datos está
```
db.getCollectionNames()
```
Muestra las tablas en la base de datos aqui se le conocen como coleciones(COLLECTION)
```
db.sucursals.save({
  "s_nombre": 'Administrativo',
  "s_direccion": 'Calle 54A n 33-54Sur',
  "i_cantidadCategorias": 1,
  "s_ciudad": 'Bogota' });
```
Ingresa la Sucursal, tenga en cuenta que despues le toca revisarlos datos por el `_id`
un atributo generado aleatoriamente asi que el proceso de hay que hacerlo con calma, para
obtener el `_id` que requerira en el ingreso del Entrenador sera primero
```
db.sucursals.find()
```
Es como un `SELECT * FROM sucursals;`, lo que hay que copiar es el primero llamado
como antes se menciono `_id` el codigo es algo asi: `ObjectId("5a0df8f81e6f215fb00575bb")`
luego de ello se copia y se pega en la seccion del `s_sucursal` de esta linea:
```
db.entrenadors.save({
  "n_ced": 123456789,
  "s_usuario": "administrador",
  "s_nombre": "Pedro",
  "s_apellido": "Mejia Solano",
  "s_descripcion": "Administrador de la escuela hombre jovial y muy servicial",
  "s_correo": "correo@yopmail.com",
  "n_telefono": 6767852,
  "s_contraseña": "12345",
  "s_sucursal": <Aqui el ObjectId>});
```
la linea quedaria: `"s_sucursal": ObjectId("5a0df8f81e6f215fb00575bb")});`, eso se inscrito
el entrenador, luego seguimos con cursos, se tiene que hacer lo mismo de la explicacion
anterior, esta vez con la tabla entrenador
```
db.entrenadors.find()
```
Y luego de tener listo el `_id`, se procede:
```
db.cursos.save({
  "s_nombre": "Bayern Muchich jr",
  "s_categoria": "sub-15",
  "s_descripcion": "Los estudiantes de este curso son capaces de conocer la filosfia del balon, el control la posesion, contencion entre otras son conocimientos basicos del pupilo",
  "n_precio": 120000,
  "s_telefono": 6403234,
  "s_entrenador": <Aqui el ObjectId>});
```
Luego lo mismo con el acudiente, este posee muchos atributos asi que mantenga la calma
```
db.acudientes.save({
  "n_ced": 7802000,
  "s_nombre": "Paquita",
  "d_fecha_nacimiento": new Date("1975-05-18T16:00:00Z"),
  "s_apellido": "Navaja Gomez",
  "s_comentarios": "",
  "s_correo": "paquita75@correo.com",
  "s_creencia_religiosa": "catolica",
  "s_direccion": "Calle D32 45d-s3sur",
  "s_eps": "cafe salud", "
  s_nombre_empresa": "indumil",
  "n_telefono": 9399394,
  "n_telefono_empresa": 3444323,
  "s_tipo_prestacionsocial": "pre pagada",
  "s_pais": "Colombia",
  "s_tiposangre": "A+",
  "s_usuario": "paquita75",
  "s_contraseña": "7802000",
  "s_curso": <Aqui el ObjectId>)})
```

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
