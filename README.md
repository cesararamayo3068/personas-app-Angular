# Proyecto Personas
## Crud creado para una Personas 


Proyecto que se encarga de el manteniemiento de Personas (Alta, baja , modificacion y consulta).


## Instruciones para levantar el Backend

Para la instalacion del proyecto es necesario descargar el proyecto desde una consola que puede ser CMD MS-DOS , PowerShell o Git Bash Here
una vez clonado el repositorio debera tener instalado algun IDE como Spring Toll
Suite o Eclipse asi como IntelliJ Idea
- Dentro del Ide debera importar el proyecto yendo al menu File -Import, seleccionar la carpeta Maven y luego la opcion Existing Maven Project
una vez que el IDE termine de compilar y importar las librerias necesarias posicionarse en la carpeta raiz del proeycto (en este caso com.developer.springboot.backend.apirest)  y con boton derecho del mouse seleccionar la opcion Run As -> Spring Boot App (estas instrucciones estan basadas en el Ide Spring Tool Suite)

- Luego en el navegador ingresar a la url : http://localhost:8080/ 

## Instruciones para levantar el Frontend

Para la instalacion del proyecto es necesario descargar el proyecto desde una consola que puede ser CMD MS-DOS , PowerShell o Git Bash Here
una vez clonado el repositorio debera tener instalado algun IDE como **Visual Strudio Code**
- Dentro del Ide una vez clonado el proyecto debera importarlo para visualizar el codigo de la aplicacion creada con el framenwork de Angular , esto lo puede hacer desde el menu Archivo ->
Abrir Carpeta o desde cualquier consola nombradas anteriormente escribiendo la instrucción code . 
para levantar el servidor y ver la aplicacion en el navegador debera ejecutar el comando 
ng-serve --o y esto abrira la aplicación en el navegador que tenga como predeterminado.

si no tambien desde el navegador debera ir a la siguiente url :

http://localhost:4200

**Dato** Debera primero levantar el backend ya que si no se levanta el backend no correra la aplicación.

# Base de datos

Utilce una base de datos en memoria H2 la cual puede ingresar http://localhost:8080/h2-console/

JDBC URL : jdbc:h2:mem:test

User Name : sa 

sin contraseña

# Tecnologias BAckend

- Java 1.8 
- Spring Boot 
- Spring Data Jpa

# Tecnologias Frontend

- JavaScript 
- Html 5
- Css 3
- Bootstrap 4
- Angular 7


Creado por **Cesar Aramayo**







