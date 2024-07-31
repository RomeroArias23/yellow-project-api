# Backend de proyecto { YELLOW }

## Descripción del Proyecto
Este backend gestiona el almacenamiento y la recuperación de "cartas" no enviadas para el proyecto { YELLOW }. Este sistema permite a los usuarios escribir y buscar cartas dirigidas a sus primeros amores. El backend se conecta a una base de datos MongoDB Atlas para almacenar de forma segura estos mensajes.

## Funcionalidades

### Obtener Todas las Cartas
- **Endpoint**: `GET /letters`
- **Función**: Devuelve todas las cartas almacenadas en la base de datos.
- **Respuesta**: Array de objetos carta.

### Buscar Cartas por Destinatario
- **Endpoint**: `GET /letters/search?addressee=[nombre]`
- **Función**: Busca cartas que contengan en el destinatario el string proporcionado.
- **Parámetros**:
 - `addressee`: String necesario para realizar la búsqueda.
- **Respuesta**: Array de cartas que coinciden con la búsqueda o un mensaje de error si no se encuentran resultados.

### Publicar una Nueva Carta
- **Endpoint**: `POST /letters`
- **Función**: Permite a los usuarios enviar una nueva carta.
- **Cuerpo de la solicitud**:
 - `addressee`: El nombre del destinatario de la carta.
 - `letter`: El contenido de la carta.
- **Respuesta**: Devuelve la carta guardada o un mensaje de error en caso de fallo.

## Tecnologías Utilizadas
Este backend está desarrollado con Node.js y las siguientes librerías y tecnologías:

- **Express.js** (`express`): Framework de servidor para crear rutas y gestionar peticiones HTTP.
- **Mongoose** (`mongoose`): Librería para modelar y manejar interacciones con la base de datos MongoDB.
- **CORS** (`cors`): Middleware para habilitar políticas CORS y permitir el acceso a la API desde distintos orígenes.
- **dotenv** (`dotenv`): Utilizado para manejar variables de entorno.

## Estructura de Dependencias
Las dependencias del proyecto son gestionadas con `npm` y se definen en `package.json`. Aquí se incluyen tanto las librerías necesarias para la ejecución del servidor como aquellas para el desarrollo (`nodemon` para reiniciar el servidor automáticamente durante el desarrollo).

## Instalación y Ejecución

### Clonar el Repositorio
Para empezar a trabajar con este backend localmente, clona este repositorio utilizando:

```bash
git clone URL_DEL_REPOSITORIO
cd server`` 

### Instalar Dependencias

Instala todas las dependencias necesarias ejecutando:

bash

Copy code

`npm install` 

### Iniciar el Servidor

Para iniciar el servidor en modo desarrollo, usa:

bash

Copy code

`npm run dev` 

Para producción, simplemente ejecuta:

bash

Copy code

`npm start` 

## Contacto

Si tienes alguna pregunta sobre el backend, deseas contribuir o necesitas más información, no dudes en contactarme vía email a  arias.dromero@gmail.com.

## Licencia

Este proyecto está bajo la Licencia ISC.

----------

Para más detalles sobre el proyecto o para contribuir, por favor visita el repositorio del proyecto o contacta al autor.

markdown

Copy code

 ``### Consideraciones Finales
- Asegúrate de reemplazar `URL_DEL_REPOSITORIO` con la URL real de tu repositorio de GitHub o el servicio de control de versiones que estés utilizando.
- Este README proporciona una visión clara de las funcionalidades del backend, cómo iniciar el servidor y cómo está organizado el proyecto, facilitando la colaboración y el entendimiento del proyecto por parte de otros desarrolladores o interesados.``
