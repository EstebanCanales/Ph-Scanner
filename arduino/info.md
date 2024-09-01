# Proyecto PH - Arduino

Este es el código para el dispositivo Arduino que mide el pH y envía los datos al servidor.

## Estructura del Proyecto

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

### Configuración
Variables de Entorno
Asegúrate de configurar tu red WiFi y la URL del servidor en el archivo `src/main.cpp`:

```cpp
const char *ssid = "TuSSID";
const char *password = "TuPassword";
const char *serverName = "http://tu-servidor/api/ph";
```

### Instalación
1. Clona el repositorio.
2. Navega al directorio `arduino`.
3. Abre el proyecto con PlatformIO en tu IDE preferido (por ejemplo, Visual Studio Code).

### Compilación y Subida
Para compilar y subir el código al dispositivo, utiliza los comandos de PlatformIO:

```bash
pio run
pio run --target upload
```

### Ejecución
El dispositivo leerá el valor del sensor de pH y enviará los datos al servidor cada 60 segundos.

### Contribuir
Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

### Contacto
Para cualquier consulta o problema, por favor abre un issue en el repositorio o contacta al mantenedor del proyecto.

Correo: estebancomoprogramador@gmail.com

¡Gracias por usar este proyecto! Espero que te sea útil.