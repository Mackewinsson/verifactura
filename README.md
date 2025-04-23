# Servidor Express para Verificación de NIF con Certificado Digital

Este proyecto es un servidor Express que permite la verificación de NIF a través del servicio web de la Agencia Tributaria de España. Para ello, se utiliza un certificado digital en formato PFX codificado en base64.

## Requisitos Previos

Antes de ejecutar el servidor, asegúrese de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 12 lts)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Certificado digital en formato `.pfx`

## Instalación

1. **Clonar el repositorio**

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

## Configuración del Entorno

El servidor requiere algunas variables de entorno definidas en un archivo `.env` en la raíz del proyecto. Cree el archivo `.env` y agregue las siguientes variables:

```env
PFX_BASE64=<CERTIFICADO_PFX_EN_BASE64>
PFX_PASSPHRASE=<CONTRASEÑA_DEL_CERTIFICADO>
PORT=3000  # Puerto en el que se ejecuta el servidor
```

### Convertir el Certificado `.pfx` a Base64

Si tiene un certificado `.pfx`, puede convertirlo a Base64 con el siguiente comando en Linux/macOS:

```sh
base64 certificado.pfx > certificado_base64.txt
```

Luego, copie el contenido del archivo `certificado_base64.txt` en la variable `PFX_BASE64` dentro del archivo `.env`.

## Ejecución del Servidor

Ejecute el siguiente comando para iniciar el servidor:

```sh
npm start
```

O bien, si está utilizando `nodemon` para desarrollo:

```sh
npm run dev
```

## Uso de la API

### Endpoint: Verificación de NIF

- **Método:** `POST`
- **Ruta:** `/verify-nif`
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "nif": "12345678A",
    "nombre": "JUAN PEREZ"
  }
  ```
- **Respuesta exitosa (200 OK):**

  ```json
  {
    "success": true,
    "nif": "12345678A",
    "nombre": "JUAN PEREZ",
    "resultado": "IDENTIFICADO"
  }
  ```

  > Nota: El campo `nombre` en la respuesta siempre viene con espacios en blanco eliminados (trimmed).

- **Error en validación (404 Not Found):**
  ```json
  {
    "success": false,
    "error": "Validation failed",
    "resultado": "NO_IDENTIFICADO",
    "message": "NIF and name combination not recognized by AEAT"
  }
  ```
- **Error en la solicitud (400 Bad Request):**
  ```json
  {
    "error": "NIF and Nombre are required"
  }
  ```
- **Error en el servidor (500 Internal Server Error):**
  ```json
  {
    "error": "XML Parsing Error",
    "message": "Failed to parse AEAT response"
  }
  ```
  o
  ```json
  {
    "error": "AEAT Service Error",
    "details": "Error details from AEAT service"
  }
  ```

### Endpoint: Envío de Factura

- **Método:** `POST`
- **Ruta:** `/send-invoice`
- **Cuerpo de la solicitud (JSON):**

  ```json
  {
    "nif": "Z0706098A",
    "nombre": "MACKEWINSSON PALENCIA",
    "numSerie": "PRUEBA-0002",
    "fecha": "18-04-2025",
    "tipoFactura": "F1",
    "descripcion": "Venta de servicios tecnológicos",
    "destNombre": "CLIENTE SL",
    "destNif": "Z0706098A",
    "cuotaTotal": 21.4,
    "total": 131.4,
    "primerRegistro": "S",
    "nombreSistema": "VeriFacturaLite",
    "huellaAnterior": "",
    "detalles": [
      {
        "clave": "01",
        "calif": "S1",
        "tipo": 4,
        "base": 10,
        "cuota": 0.4
      },
      {
        "clave": "01",
        "calif": "S1",
        "tipo": 21,
        "base": 100,
        "cuota": 21
      }
    ]
  }
  ```

  **Campos requeridos:**

  - `nif`: NIF del emisor
  - `nombre`: Nombre o razón social del emisor
  - `numSerie`: Número de serie de la factura
  - `fecha`: Fecha de expedición (formato DD-MM-YYYY)
  - `detalles`: Array de detalles de la factura

  **Campos opcionales:**

  - `tipoFactura`: Tipo de factura (por defecto: "F1")
  - `descripcion`: Descripción de la operación
  - `destNombre`: Nombre del destinatario (por defecto: igual que emisor)
  - `destNif`: NIF del destinatario (por defecto: igual que emisor)
  - `primerRegistro`: Indica si es el primer registro (por defecto: "S")
  - `nombreSistema`: Nombre del sistema informático (por defecto: "MiSistemaVerifactu")
  - `huellaAnterior`: Huella de la factura anterior (para encadenamiento)

  **Estructura de detalles:**

  - `clave`: Clave del régimen
  - `calif`: Calificación de la operación
  - `tipo`: Tipo impositivo (porcentaje)
  - `base`: Base imponible
  - `cuota`: Cuota repercutida

- **Respuesta exitosa (200 OK):**
  ```json
  {
    "success": true,
    "aeatResponse": {
      // Respuesta detallada de la AEAT
    }
  }
  ```
- **Error en el envío (400 Bad Request):**
  ```json
  {
    "error": "Missing required invoice fields"
  }
  ```
- **Error en el servidor (500 Internal Server Error):**
  ```json
  {
    "error": "Failed to send invoice",
    "details": "Error message from AEAT service"
  }
  ```

## Solución de Problemas

1. **Error de conexión con AEAT**

   - Verifique que el certificado digital sea válido.
   - Asegúrese de que `PFX_BASE64` y `PFX_PASSPHRASE` estén correctamente configurados en el archivo `.env`.
   - Compruebe su conexión a Internet y que la URL de la API de AEAT esté disponible.

2. **Error al analizar la respuesta XML**
   - Asegúrese de que la API de AEAT esté respondiendo correctamente.
   - Revise los logs del servidor para detectar posibles errores en la estructura del XML recibido.

## Licencia

Este proyecto está licenciado bajo la MIT License. Puede modificar y distribuir el código según sus necesidades.
