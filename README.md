# FILTRAR TEXTO - APIREST

[![N|Solid](https://laravelvuespa.com/preview.png)](https://laravel.com)
Esta aplicacion fue realizada en Laravel como framework de Backend con persistencia de datos en MySQL y Frontend Vue.js

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>



## Caracteristicas

- Registro y Logeo de usuarios (JWT)
- Carga de BD, a traves del Diccionario.csv
- Busqueda de usuarios con similitud de nombre
- Lista de ususarios

## Tecnologias

* [Laravel + Vue.js](https://bluuweb.github.io/tutorial-laravel/vue/) Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5 y PHP 7. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el "código espagueti". Fue creado en 2011 y tiene una gran influencia de frameworks como Ruby on Rails, Sinatra y ASP. NET MVC. Junto con Vue.js que es Framework Frontend qe le brinda sencillez y facilidad al desarrollador al momento de implementar la tecnologia.

* [MySQL](https://dev.mysql.com/downloads/mysql/) MySQL es el sistema de gestión de bases de datos relacional más extendido en la actualidad al estar basada en código abierto. Desarrollado originalmente por MySQL AB, fue adquirida por Sun MicroSystems en 2008 y esta su vez comprada por Oracle Corporation en 2010, la cual ya era dueña de un motor propio InnoDB para MySQL.

* [Postman](https://www.postman.com/downloads/) es una aplicación que nos permite realizar pruebas API. Es un cliente HTTP que nos da la posibilidad de testear 'HTTP requests' a través de una interfaz gráfica de usuario, por medio de la cual obtendremos diferentes tipos de respuesta que posteriormente deberán ser validados


* [Laragon](https://laragon.org/download/index.html) Es una herramienta bastante robusta que trae consigo aplicaciones utiles para el desarrollo del aplicativo, por ejemplo, Apache 2.4, Nginx, MySQL 5.7, PHP 7.4, Redis, Memcached Node.js 14, npm, git.

## NOTA

`PHP VERSION, DEBE SER >= 8.0 PARA EVITAR INCOMPATIBILIDAD CON COMPOSER`



## Instalación (Uso local)
- Primero se debe instalar [Laragon](https://laragon.org/download/index.html) en la maquina.

- Clonar proyecto
    ```bash
    git clone https://github.com/gabrielgarcia2211/stradata.git
    ```

- Despues se debe ir al directorio del proyecto
    ```bash
    cd my-project
    ```

- Luego se **Instala/Actualiza** las dependencias composer en la terminal del proyecto, con el siguiente comando:
    ```sh
    composer update
    ```
    
- Luego se debemos duplicar el archivo **.env.example** cambiamos el nombre a **.env**, y debemos configurar lo siguiente:
    ```sh
    DB_DATABASE = name_database
    ```
    ```sh
    php artisan jwt:secret
    ```

- Se corre el proyecto a traves del siguiente comando(BACKEND):
    ```sh
    php artisan serve
    ```
- Luego se **Instala/Actualiza** las dependencias npm Vue.js a traves del siguiente comando(FRONTEND):
    ```sh
    npm update -g @vue/cli
    ```
- Se corre el proyecto a traves del siguiente comando(FRONTEND):
    ```sh
    npm run watch
    ```
- Se debe verificar la implementación navegando a la dirección de su servidor en su navegador preferido.
    ```sh
    http://127.0.0.1:8080/
    ```
## NOTA

**Usuario de prueba**

| Parameter  | Type     | Description                |
| :--------  | :------- | :------------------------- |
| `email`    | `gabriel@gmail.com` | **Required**               |
| `password` | `12345678`          | **Required**               |


### Servicio Usuarios (JWT)

- Registrar usuario
  | Metodo | Ruta     |
  |--------|----------|
  | POST    | api/auth/register |

    ```sh
  {
    "name" : "gabriel quintero gaeci",
    "email" : "gabriel@gamil.com",
    "password" : 12345678
  }
  ``` 

- Iniciar sesión

  | Metodo | Ruta   |
  |--------|--------|
  | POST   | api/auth/login |
  
    ```sh
  {
    "email" : "gabriel@gamil.com",
    "password" : 12345678
  }
  ``` 
  
- Cerra sesión
  | Metodo | Ruta    |
  |--------|---------|
  | POST    | api/auth/logout |
  ```sh
  Authorization: Bearer <token>
  ``` 

- Refresh

  | Metodo | Ruta    |
  |--------|---------|
  | POST    | /refresh |
  
    ```sh
  Authorization: Bearer <token>
  ``` 
  
  
  
### Servicio Usuarios Autenticado

- Listar usuarios
  | Metodo | Ruta     |
  |--------|----------|
  | GET    | /users |

  ```sh
  Authorization: Bearer <token>
  ``` 

- Importar usuarios del CSV
  | Metodo | Ruta     |
  |--------|----------|
  | GET    | /import |

  ```sh
  Authorization: Bearer <token>
  ``` 

- Validar Similitud del Texto
  | Metodo | Ruta     |
  |--------|----------|
  | POST    | /similary |

  **JSON**
  ```sh
  Authorization: Bearer <token>
  {
    "nombre" : "gabriel garcia",
    "porcentaje" : 90
  }
  ``` 
  ## NOTA

`PUEDES CREAR UN USUARIO DE PRUEBA A TRAVES DE POSTMAN, A LA SIGUIENTE RUTA`

```http
  POST https://stradata-app.herokuapp.com/api/auth/register
```

| Parameter  | Type     | Description                |
| :--------  | :------- | :------------------------- |
| `name`     | `string` | **Required**               |
| `email`    | `string` | **Required**               |
| `password` | `string` | **Required**               |


## Autores

- [@gabrielgarcia2211](https://github.com/gabrielgarcia2211)

## Despliegue

[![debug](https://img.icons8.com/color/0/heroku.png)](https://stradata-app.herokuapp.com/)

## Contribuyentes
*¡Las contribuciones son siempre bienvenidas!*

## Licencia

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)