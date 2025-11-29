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

## Ejecución en Producción con PM2

Use [PM2](https://pm2.keymetrics.io/) para mantener el servidor activo como demonio y reiniciarlo automáticamente al cerrar sesión o reiniciar el sistema.

1. Instale PM2 (global o vía `npx`):
   ```sh
   npm install -g pm2
   # o
   npx pm2 --version
   ```
2. Desde la raíz del proyecto, inicie la app usando el archivo `ecosystem.config.js`, que ya carga el `.env`:
   ```sh
   pm2 start ecosystem.config.js --env production
   ```
3. Compruebe que el proceso está en ejecución:
   ```sh
   pm2 status verifactura
   ```
4. Guarde la configuración para que PM2 restaure el proceso tras un reinicio:
   ```sh
   pm2 save
   ```
5. Configure el arranque automático del servicio (el comando concreto depende del sistema operativo):

   **Windows:**
   
   En Windows, el comando `pm2 startup` puede mostrar el error "Init system not found". Para solucionarlo, use el paquete `pm2-windows-startup`:
   
   ```sh
   # Instale el paquete adicional para Windows
   npm install -g pm2-windows-startup
   
   # Configure el arranque automático
   pm2-startup install
   ```
   
   Si `pm2-windows-startup` no está disponible, puede configurar manualmente el Programador de tareas de Windows:
   1. Abra el Programador de tareas (Task Scheduler)
   2. Cree una nueva tarea básica
   3. Configure:
      - Nombre: `PM2 Auto Start`
      - Trigger: "Al iniciar sesión" o "Al iniciar el equipo"
      - Acción: Iniciar un programa
      - Programa: `pm2`
      - Argumentos: `resurrect`
      - Directorio de inicio: La ruta donde está instalado Node.js (ej: `C:\Users\Administrador\AppData\Local\nvm\v22.21.0`)

   **macOS (launchctl):**
   ```sh
   pm2 startup launchd
   ```
   Ejecute el comando que PM2 imprime para registrar el servicio.

   **Linux con systemd (distros modernas):**
   ```sh
   sudo pm2 startup systemd -u $USER --hp $HOME
   ```
   Ejecute el comando que PM2 imprime para registrar el servicio.

   Después de reiniciar el sistema, PM2 restaurará automáticamente los procesos guardados con `pm2 resurrect`.

Para reiniciar manualmente el servidor ejecutado por PM2 use `pm2 restart verifactura`, y para detenerlo `pm2 stop verifactura`.

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

### Endpoint: Anulación de Factura

- **Método:** `POST`
- **Ruta:** `/cancel-invoice`
- **Cuerpo de la solicitud (JSON):**

  ```json
  {
    "nif": "Z0706098A",
    "nombre": "MACKEWINSSON PALENCIA",
    "facturaAnulada": {
      "idEmisorFacturaAnulada": "Z0706098A",
      "numSerieFacturaAnulada": "PRUEBA-0002",
      "fechaExpedicionFacturaAnulada": "18-04-2025"
    },
    "encadenamiento": {
      "registroAnterior": {
        "idEmisorFactura": "Z0706098A",
        "numSerieFactura": "PRUEBA-0001",
        "fechaExpedicionFactura": "17-04-2025",
        "huella": "ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789"
      }
    },
    "rechazoPrevio": "N",
    "sinRegistroPrevio": "N",
    "huella": "FEDCBA9876543210FEDCBA9876543210FEDCBA9876543210FEDCBA9876543210",
    "tipoHuella": "01",
    "sistemaInformatico": {
      "nombreRazon": "MACKEWINSSON PALENCIA",
      "nif": "Z0706098A",
      "nombreSistemaInformatico": "MiSistemaVerifactu",
      "idSistemaInformatico": "01",
      "version": "1.0.3",
      "numeroInstalacion": "1",
      "tipoUsoPosibleSoloVerifactu": "N",
      "tipoUsoPosibleMultiOT": "N",
      "indicadorMultiplesOT": "N"
    }
  }
  ```
- **Error en el envío (400 Bad Request):**
  ```json
  {
    "error": "Validation Error",
    "details": [
      {
        "field": "facturaAnulada.idEmisorFacturaAnulada",
        "message": "facturaAnulada.idEmisorFacturaAnulada is required"
      }
    ]
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
