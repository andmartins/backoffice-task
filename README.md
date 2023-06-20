# Mi Proyecto

Este es mi proyecto de gestión de tareas.

## Requisitos previos

Asegúrate de tener Node.js instalado.

## Instalación

1. Clona el repositorio: `git clone https://github.com/seu-usuario/meu-projeto.git`
2. Accede al directorio del proyecto: `cd meu-projeto`
3. Instala las dependencias: `npm install`

## Uso

1. Inicia el servidor de desarrollo: `npm start`
2. Accede a la aplicación en el navegador: `http://localhost:3000`

## Implementación

### Azure

1. Crea una cuenta en Azure e inicia sesión en el portal de Azure.
2. Crea un nuevo recurso de Azure para alojar la aplicación web.
3. Configura las variables de entorno necesarias en Azure para la aplicación.
4. Crea una versión optimizada del proyecto: `npm run build`
5. Sube los archivos de la carpeta `build` generada a Azure.
6. Inicia la aplicación en Azure y accede a la URL proporcionada.

### AWS

1. Crea una cuenta en AWS e inicia sesión en la consola de AWS.
2. Crea un nuevo bucket S3 para alojar la aplicación web.
3. Configura las políticas de acceso para permitir el acceso público a los archivos.
4. Crea una versión optimizada del proyecto: `npm run build`
5. Sube los archivos de la carpeta `build` generada al bucket S3.
6. Configura el bucket S3 para alojar un sitio web estático y establece el archivo `index.html` como documento predeterminado.
7. Accede a la URL proporcionada por el bucket S3 para ver la aplicación.

## Funcionalidades

- Crear nueva tarea
- Listar todas las tareas
- Editar tarea existente
- Eliminar tarea

## MVP2
- Agregar search bar
- Agregar paginacion
- Agregar template dark/light
- Agregar JWT
- Agregar metodo decrypt / encrypt
- Agregar user y profile

## Contribución

¡Las contribuciones siempre son bienvenidas! No dudes en abrir problemas y solicitudes de extracción.

## Licencia

Este proyecto está bajo la licencia MIT.