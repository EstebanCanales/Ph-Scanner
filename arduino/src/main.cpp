#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

// Configuración de la red WiFi
const char *ssid = "TuSSID";
const char *password = "TuPassword";

// URL del servidor donde se enviarán los datos
const char *serverName = "http://localhost:3000/api/ph";

// Pin analógico donde está conectado el sensor de pH
int sensorPin = A0;

void setup()
{
  Serial.begin(115200);

  // Conexión a la red WiFi
  WiFi.begin(ssid, password);

  // Esperar a la conexión WiFi
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }

  Serial.println("Conectado a WiFi");
}

void loop()
{
  // Leer valor del sensor de pH
  int sensorValue = analogRead(sensorPin);
  float voltage = sensorValue * (5.0 / 1024.0);
  float pHValue = 3.5 * voltage + 0.0; // Ajusta la fórmula según tu sensor

  // Verificar que estamos conectados a WiFi
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;

    // Iniciar conexión al servidor
    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    // Crear la cadena JSON
    String postData = "{\"ph\": " + String(pHValue) + "}";

    // Enviar datos al servidor
    int httpResponseCode = http.POST(postData);

    if (httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else
    {
      Serial.print("Error en la conexión: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }
  else
  {
    Serial.println("Error de conexión WiFi");
  }

  delay(60000); // Esperar 60 segundos antes de la siguiente lectura
}