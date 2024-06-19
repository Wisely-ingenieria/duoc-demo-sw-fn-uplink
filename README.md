# Proyecto IoT con Azure Event Hub

Este proyecto es una función de Azure que se activa mediante mensajes de Event Hub y almacena los datos en una base de datos PostgreSQL.

## Requisitos previos

- Cuenta de Azure
- Visual Studio Code
- Extensión de Azure Functions para Visual Studio Code

## Descarga del Proyecto

1. Clona el repositorio del proyecto desde GitHub:
    ```bash
    git clone https://github.com/Wisely-ingenieria/duoc-demo-sw-fn-uplink.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd duoc-demo-sw-fn-uplink
    ```

## Instalación de Dependencias

1. Asegúrate de estar en el directorio del proyecto.
2. Instala las dependencias necesarias ejecutando:
    ```bash
    npm install
    ```

## Configuración de Variables de Entorno en Azure

1. Ve al portal de Azure y navega a tu Function App.
2. En el menú de la izquierda, selecciona "Configuration" (Configuración) bajo "Settings" (Configuraciones).
3. En la pestaña "Application settings" (Configuraciones de la aplicación), haz clic en "New application setting" (Nueva configuración de aplicación) y añade cada una de las siguientes variables de entorno con sus respectivos valores:
    ```plaintext
    HOST_DB=tu_host_db
    USER_DB=tu_usuario_db
    PASS_DB=tu_contraseña_db
    NAME_DB=tu_nombre_db
    PORT_DB=tu_puerto_db
    ```

## Despliegue a Azure mediante Visual Studio Code

1. Abre Visual Studio Code y carga el proyecto.
2. Asegúrate de tener instalada la extensión de Azure Functions. Si no la tienes, instálala desde el Marketplace de VS Code.
3. Inicia sesión en tu cuenta de Azure desde la extensión de Azure en VS Code.
4. En la barra lateral de Azure, haz clic derecho en tu suscripción y selecciona "Create Function App in Azure".
5. Sigue las instrucciones para crear una nueva Function App. Asegúrate de seleccionar Node.js como el runtime stack.
6. Una vez creada la Function App, haz clic derecho sobre ella y selecciona "Deploy to Function App".
7. Selecciona la carpeta del proyecto que contiene tu función y confirma el despliegue.

## Notas

- Asegúrate de que tu base de datos PostgreSQL esté accesible desde Azure.
- Revisa los logs en Azure para asegurarte de que la función se está ejecutando correctamente.
