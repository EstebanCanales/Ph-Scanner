# PH PROJECT 

# Estructura del Proyecto

Backend: Node.js y MongoDB

Estructura de carpetas:
```bash
/backend
  ├── /models
  │     └── ph.js
  ├── /routes
  │     └── phRoutes.js
  ├── /config
  │     └── db.js
  ├── server.js
  └── package.json
```

## Configuración
Variables de Entorno
Crea un archivo .env en la raíz del directorio backend con las siguientes variables:

- MONGO_USERNAME=tu_usuario
- MONGO_PASSWORD=tu_contraseña
- PORT=3000

## Instalación
Clona el repositorio.
Navega al directorio backend.
Instala las dependencias:
```bash
npm install
```

## Ejecución
Para iniciar el servidor, ejecuta:

```bash
npm start
```

El servidor estará corriendo en http://localhost:3000.

## Endpoints
POST /api/ph
Guarda un nuevo dato de pH.

URL: /api/ph
Método: POST
Cuerpo de la solicitud:
```json
{
  "ph": <valor_de_ph>
}
```
Respuesta exitosa:
```json
{
  "message": "Dato de pH guardado"
}
```

GET /api/ph
Obtiene todos los datos de pH.

URL: /api/ph
Método: GET
Respuesta exitosa:
```json
[
  {
    "_id": "<id>",
    "value": <valor_de_ph>,
    "timestamp": "<fecha>"
  },
  ...
]
```

## Contribuir
Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Contacto
Para cualquier consulta o problema, por favor abre un issue en el repositorio o contacta al mantenedor del proyecto.

Correo: estebancomoprogramador@gmail.com

¡Gracias por usar este proyecto! Espero que te sea útil.

