# Proyecto PH - Frontend
# Proyecto SIPA Frontend

Este proyecto proporciona una configuración mínima para trabajar con React y Vite, incluyendo HMR (Hot Module Replacement) y algunas reglas de ESLint. El frontend se encarga de mostrar los datos de pH obtenidos desde el backend.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

```
/frontend
 ├── .gitignore
 ├── eslint.config.js
 ├── index.html
 ├── info.md
 ├── package.json
 ├── src
 │     ├── App.jsx
 │     ├── components
 │     │     └── phDisplay.jsx
 │     ├── index.css
 │     ├── main.jsx
 │     └── utils
 │           └── api.js
 ├── vite.config.js
 └── README.md
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- `npm run dev`: Inicia la aplicación en modo de desarrollo. Abre http://localhost:3000 para verlo en tu navegador.
- `npm run build`: Construye la aplicación para producción en la carpeta dist. Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.
- `npm run lint`: Ejecuta ESLint para encontrar y corregir problemas en el código.
- `npm run preview`: Sirve la aplicación construida localmente para verificar que todo funciona correctamente.

## Configuración de ESLint

Este proyecto utiliza ESLint con las siguientes configuraciones y plugins:

- @eslint/js
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh

Puedes encontrar la configuración completa en el archivo `eslint.config.js`.

## Dependencias

### Producción

- react: ^18.3.1
- react-dom: ^18.3.1
- axios: ^1.7.7

### Desarrollo

- @eslint/js: ^9.9.0
- @types/react: ^18.3.3
- @types/react-dom: ^18.3.0
- @vitejs/plugin-react-swc: ^3.5.0
- eslint: ^9.9.0
- eslint-plugin-react: ^7.35.0
- eslint-plugin-react-hooks: ^5.1.0-rc.0
- eslint-plugin-react-refresh: ^0.4.9
- globals: ^15.9.0
- vite: ^5.4.1

## Componentes Principales

### phDisplay.jsx

Este componente se encarga de mostrar los datos de pH obtenidos desde el backend.

```javascript
import React, { useEffect, useState } from "react";
import { api } from "../../utils";
import "./PhDataDisplay.css";

const PhDataDisplay = () => {
 const [phData, setPhData] = useState([]);

 useEffect(() => {
 const fetchData = async () => {
  try {
  const response = await api.get("/ph");
  setPhData(response.data);
  } catch (error) {
  console.error("Error al obtener los datos de pH:", error);
  }
 };

 fetchData();
 }, []);

 return (
 <div className="ph-container">
  <h1 className="ph-title">Datos de pH</h1>
  <ul className="ph-list">
  {phData.map((data) => (
   <li key={data._id} className="ph-list-item">
   <span className="ph-value">Valor: {data.value}</span>
   <span className="ph-timestamp">
    Fecha: {new Date(data.timestamp).toLocaleString()}
   </span>
   </li>
  ))}
  </ul>
 </div>
 );
};

export default PhDataDisplay;
```

### api.js

Este archivo configura Axios para realizar solicitudes HTTP al backend.

```javascript
import axios from "axios";

// Cambia la URL a la dirección de tu backend
const API_URL = "http://localhost:3000/api";

export const api = axios.create({
 baseURL: API_URL,
});
```

## Instalación

Para utilizar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio.
2. Navega al directorio `frontend`.
3. Instala las dependencias ejecutando el comando `npm install`.

## Ejecución

Para iniciar la aplicación en modo de desarrollo, ejecuta el comando `npm run dev`. Luego, abre http://localhost:3000 en tu navegador para ver la aplicación.

## Contribuir

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.


## Contacto

Para cualquier consulta o problema, por favor abre un issue en el repositorio o contacta al mantenedor del proyecto.

Correo: estebancomoprogramador@gmail.com

¡Gracias por usar este proyecto! Espero que te sea útil.