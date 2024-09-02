# Proyecto de medidor de pH

Este proyecto tiene como objetivo medir el pH de una solución utilizando un sensor conectado a un dispositivo Arduino, enviar los datos a un servidor backend y mostrar los datos en una interfaz frontend.

## Estructura del Proyecto

```bash
/project-ph
 ├── /frontend
 ├── /backend
 └── /arduino
```

### Frontend

El frontend está desarrollado con React y Vite. Proporciona una interfaz de usuario para visualizar los datos de pH.

#### Estructura del Frontend

```bash
/frontend
 ├── /src
 │     ├── /components
 │     │     └── PhDataDisplay.jsx
 │     ├── /utils
 │     │     └── api.js
 │     ├── App.jsx
 │     ├── index.css
 │     ├── main.jsx
 ├── index.html
 ├── vite.config.js
 ├── eslint.config.js
 ├── package.json
 ├── .gitignore
 └── README.md
```

#### Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y corregir problemas en el código.
- `npm run preview`: Sirve la aplicación construida localmente.

#### Dependencias

- react: ^18.3.1
- react-dom: ^18.3.1
- axios: ^1.7.7

### Backend

El backend está desarrollado con Node.js y MongoDB. Proporciona una API REST para recibir y almacenar los datos de pH enviados desde el dispositivo Arduino.

#### Estructura del Backend

```bash
/backend
 ├── /models
 │     └── ph.js
 ├── /routes
 │     └── phRoutes.js
 ├── /config
 │     └── db.js
 ├── server.js
 ├── package.json
 ├── .gitignore
 └── README.md
```

#### Configuración

Crea un archivo `.env` en la raíz del directorio backend con las siguientes variables:

```
MONGO_USERNAME=tu_usuario
MONGO_PASSWORD=tu_contraseña
PORT=3000
```

#### Scripts Disponibles

- `npm start`: Inicia el servidor.

#### Endpoints

- `POST /api/ph`: Guarda un nuevo dato de pH.
- `GET /api/ph`: Obtiene todos los datos de pH.

### Arduino

El dispositivo Arduino mide el pH y envía los datos al servidor backend.

#### Estructura del Arduino

```bash
/arduino
 ├── .gitignore
 ├── .pio/
 ├── .vscode/
 │     ├── c_cpp_properties.json
 │     ├── extensions.json
 │     └── launch.json
 ├── include/
 │     └── README
 ├── lib/
 │     └── README
 ├── platformio.ini
 ├── src/
 │     └── main.cpp
 └── test/
    └── README
```

#### Configuración

Asegúrate de configurar tu red WiFi y la URL del servidor en el archivo `src/main.cpp`:

```cpp
const char *ssid = "TuSSID";
const char *password = "TuPassword";
const char *serverName = "http://tu-servidor/api/ph";
```

#### Compilación y Subida

Para compilar y subir el código al dispositivo, utiliza los comandos de PlatformIO:

- `pio run`
- `pio run --target upload`

#### Ejecución

El dispositivo leerá el valor del sensor de pH y enviará los datos al servidor cada 60 segundos.

## Contribuir

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.


## Contacto

Para cualquier consulta o problema, por favor abre un issue en el repositorio o contacta al mantenedor del proyecto.

Correo: estebancomoprogramador@gmail.com

¡Gracias por usar este proyecto! Espero que te sea útil.
