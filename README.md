# Servidor Express para Verificación de NIF con Certificado Digital

Este proyecto es un servidor Express que permite la verificación de NIF a través del servicio web de la Agencia Tributaria de España. Para ello, se utiliza un certificado digital en formato PFX codificado en base64.

## Requisitos Previos
Antes de ejecutar el servidor, asegúrese de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
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
- **Error en validación (404 Not Found):**
  ```json
  {
    "success": false,
    "error": "Validation failed",
    "resultado": "NO_IDENTIFICADO",
    "message": "NIF and name combination not recognized by AEAT"
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

