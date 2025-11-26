|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|<p>**Sistemas Informáticos de Facturación**  </p><p>- **Remisión voluntaria** </p><p>- **Remisión bajo requerimiento de la AEAT** </p>|
| - |
|**Autor:** AEAT |**Fecha:**  28/07/2025 |**Versión:**  1.0.3 |

**Revisiones**



|**Edic.** |**Rev.** |**Fecha** |**Descripción** |**A(\*)** |**Páginas** |
| - | - | - | - | - | - |
|0 |0\.1.0 |26/07/2023 |Versión inicial **BORRADOR** ||28 |
|0 |0\.2.0 |21/12/2023 |Modificación de esquemas y definición operaciones ||55 |
|0 |0\.3.0 |20/05/2024 |Modificación de esquemas y definición operaciones ||61 |
|0 |0\.3.1 |29/05/2024 |Tratamiento de cadenas de texto, punto 6.6 |A |62 |
|0 |0\.3.2 |04/07/2024 |Aclaraciones en descripción operativa |R |62 |
|0 |0\.4.0 |25/09/2024 |Actualizacion de los esquemas XSD |R |62 |
|0 |0\.4.1 |18/10/2024 |Actualizacion de el esquema de respuesta XSD |R |62 |
|0 |0\.4.2 |28/10/2024 |Actualizacion de los esquemas XSD |R |62 |
|0 |1\.0.0 |20/02/2025 |<p>Remisión bajo requerimiento </p><p>Consulta de información presentada </p><p>Matizaciones operativa Requerimiento </p><p>Nombre  emisor  en  consulta  por  destinatario (opcional)  </p><p>Mostrar  Sistema  Informático  de  Facturación (opcional) </p><p>Consulta ampliada por identificador RefExterna </p>|R |96 |
|0 |1\.0.1 |23/04/2025 |Publicación de URLs de producción |R |100 |
||1\.0.2 |16/07/2025 |Cambio en consulta de SIF |R |100 |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



||1\.0.3 |28/07/2025 |Errata  en  tamaño  campo IdPeticionRegistroDuplicado   |R |100 |
| :- | - | - | :- | - | - |

**(\*) Acción:  A = Añadir;  R = Reemplazar** 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

**Índice ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.002.png)**

1. [**INTRODUCCIÓN.  7**](#_page6_x82.00_y141.92)
1. [**CONTROL DE VERSIONES.  8**](#_page7_x82.00_y141.92)

[**2.1. Versión 0.1.0  8**](#_page7_x82.00_y192.92)

[**2.1. Versión 0.2.0  8**](#_page7_x82.00_y263.92)

[**2.1. Versión 0.3.0  8**](#_page7_x82.00_y371.92)

[**2.1. Versión 0.4.0  8**](#_page7_x82.00_y519.92)

[**2.1. Versión 0.4.1  9**](#_page8_x82.00_y141.92)

[**2.1. Versión 0.4.2  9**](#_page8_x82.00_y196.92)

[**2.1. Versión 1.0.0  9**](#_page8_x82.00_y285.92)

3. [**ESQUEMA GENERAL DE FUNCIONAMIENTO.  9**](#_page8_x82.00_y702.92)

[**Descripción de los valores posibles de la respuesta global (o “estados globales”) de una remisión.  11** ](#_page10_x82.00_y495.92)[Tipos de Errores definidos.  12** ](#_page11_x82.00_y488.92)[Tratamiento de los errores (no admisibles y admisibles).  12**](#_page11_x82.00_y695.92)

4. [**ESTÁNDARES Y REQUISITOS.  13**](#_page12_x82.00_y340.92)
1. [**Introducción.  13**](#_page12_x82.00_y388.92)
1. [**Estándares utilizados.  13**](#_page12_x82.00_y631.92)
1. [**Medio de envío.  14**](#_page13_x82.00_y370.92)
5. [**CONSIDERACIONES DE DISEÑO.  14**](#_page13_x82.00_y519.92)

[**5.1. Comunicación de incidencias en el procesado de peticiones.  14**](#_page13_x82.00_y548.92)

6. [**DISEÑO.  16**](#_page15_x82.00_y141.92)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



1. [**Estructura de los mensajes.  16**](#_page15_x82.00_y192.92)
1. [**Tipos de mensajes.  16**](#_page15_x82.00_y358.92)
1. [Definición del mensaje de remisión.  16](#_page15_x82.00_y405.92)
1. [Alta/Anulación de registros de facturación.  17](#_page16_x153.00_y167.92)
1. [Consulta de registros de facturación presentados (servicio solo disponible en remisión voluntaria «VERI*FACTU»).  22](#_page21_x82.00_y167.92)
1. [Definición de los mensajes de respuesta.  24](#_page23_x82.00_y165.92)
1. [Respuesta Alta/Anulación de registros de facturación.  24](#_page23_x82.00_y331.92)
1. [Respuesta de la Consulta de registros de facturación presentados.  26](#_page25_x82.00_y161.92)
3. [**Especificación funcional del mensaje de remisión.  29**](#_page28_x143.00_y141.32)
3. [**Especificación funcional de la consulta, por emisor y destinatario, de los registos de facturación presentados (servicio solo disponible en remisión voluntaria «VERI*FACTU»).  30**](#_page29_x68.00_y141.32)
   1. [Consulta de los registos de facturación presentados  30](#_page29_x68.00_y433.32)
   1. [Respuesta de la consulta de los registos de facturación presentados  34](#_page33_x68.00_y141.32)
   1. [Consulta paginada  36](#_page35_x68.00_y221.32)
   1. [Respuesta de alta y anulación de registros de facturación.  37](#_page36_x68.00_y163.32)
      1. [Mecanismo de control de flujo.  40](#_page39_x68.00_y163.32)
5. [**Valores permitidos en campos de tipo lista.  41**](#_page40_x68.00_y163.32)

[6.5.1. Alta, anulación y consulta de registros de facturación.  41](#_page40_x68.00_y215.32)

1. [Consulta de registros de facturación.  41](#_page40_x68.00_y308.32)
1. [Respuesta de alta y anulación de registros de facturación.  42](#_page41_x68.00_y334.32)
6. [**Remisión voluntaria y bajo requerimiento.  44**](#_page43_x68.00_y297.32)
6. [**Tratamiento de cadenas de texto en campos XML  46**](#_page45_x68.00_y163.32)
6. [**Valores permitidos en campos numéricos.  46**](#_page45_x68.00_y313.32)
6. [**Aclaración sobre escapado de caracteres especiales.  47**](#_page46_x68.00_y163.32)
7. [**ANEXO I: DEFINICIÓN DE SERVICIOS Y ESQUEMAS (ENTORNO DE PRUEBAS).  48**](#_page47_x68.00_y163.32)
1. [**Definición de servicios.  48**](#_page47_x68.00_y264.32)
1. [**Esquemas de Entrada  48**](#_page47_x68.00_y367.32)
1. [**Esquemas de Salida.  49**](#_page48_x68.00_y303.32)
8. [**ANEXO I: DEFINICIÓN DE SERVICIOS Y ESQUEMAS (ENTORNO DE PRODUCCIÓN).  50**](#_page49_x68.00_y163.32)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



1. [**Definición de servicios.  50**](#_page49_x68.00_y264.32)
1. [**Esquemas de Entrada  50**](#_page49_x68.00_y367.32)
1. [**Esquemas de Salida.  51**](#_page50_x68.00_y283.32)
9. [**ANEXO II: OPERATIVA DE REMISIÓN VOLUNTARIA «VERI*FACTU»  52**](#_page51_x68.00_y163.32)
1. [**Operativa: Alta de un registro de facturación.  52**](#_page51_x68.00_y254.32)
1. [Alta inicial (“normal”) del registro de facturación.  52](#_page51_x68.00_y320.32)
   1. [Ejemplo mensaje XML de alta inicial (“normal”) del registro de facturación.  53](#_page52_x68.00_y183.32)
1. [Subsanación del registro de facturación.  56](#_page55_x68.00_y163.32)
   1. [Ejemplo mensaje XML de subsanación del registro de facturación.  57](#_page56_x68.00_y236.32)
1. [Alta, tras un rechazo previo del registro de facturación de alta inicial (y que, por tanto, no existe aún en la AEAT).  60](#_page59_x68.00_y227.32)
   1. [Ejemplo mensaje XML de alta, tras un rechazo previo del registro de facturación de alta inicial (y que, por tanto, no existe aún en la AEAT).  61](#_page60_x68.00_y241.32)
2. [**Operativa: Anulación de un registro de facturación.  64**](#_page63_x68.00_y284.32)
1. [Anulación del registro de facturación.  64](#_page63_x68.00_y326.32)
   1. [Ejemplo mensaje XML de anulación del registro de facturación.  65](#_page64_x68.00_y438.32)
1. [Anulación, tras un rechazo previo del registro de facturación de anulación.  67](#_page66_x68.00_y444.32)
   1. [Ejemplo mensaje XML de anulación, tras un rechazo previo del registro de facturación de anulación.  68](#_page67_x68.00_y422.32)
1. [Anulación cuando el registro de facturación que se quiere anular NO está registrado en la AEAT.  71](#_page70_x104.00_y183.32)

[9.2.3.1. Ejemplo mensaje XML de anulación cuando el registro de facturación que se quiere anular NO está registrado en la AEAT.  72](#_page71_x68.00_y163.32)

3. [**Operativa habitual de remisión agrupada de registros de facturación.  74**](#_page73_x68.00_y202.32)

[9.3.1. Ejemplo de mensaje XML que incluye tres registros de facturación (dos registros de facturación de alta y uno de anulación).  74](#_page73_x68.00_y244.32)

10. [**ANEXO III: OPERATIVA DE REMISIÓN DE REGISTROS DE FACTURACIÓN PARA RESPONDER A UN REQUERIMIENTO DE LA AEAT «NO VERI*FACTU».  80**](#_page79_x68.00_y278.32)
1. [**Operativa: Alta de un registro de facturación.  81**](#_page80_x68.00_y339.32)
1. [Alta inicial (“normal”) del registro de facturación.  81](#_page80_x68.00_y405.32)
   1. [Ejemplo mensaje XML de alta inicial (“normal”) del registro de facturación.  82](#_page81_x68.00_y310.32)
1. [Subsanación del registro de facturación.  85](#_page84_x68.00_y328.32)
   1. [Ejemplo mensaje XML de subsanación del registro de facturación.  86](#_page85_x68.00_y320.32)
2. [**Operativa: Anulación de un registro de facturación.  89**](#_page88_x68.00_y344.32)

[10.2.1. Anulación del registro de facturación.  89](#_page88_x68.00_y386.32)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

[10.2.1.1. Ejemplo mensaje XML de anulación del registro de facturación.  90](#_page89_x68.00_y394.32)

11. [**ANEXO IV: OPERATIVA DE CONSULTA DE INFORMACIÓN PRESENTADA (SERVICIO SOLO DISPONIBLE EN REMISIÓN VOLUNTARIA «VERI*FACTU»)  92**](#_page91_x68.00_y425.32)

[**11.1. Operativa: Consulta del emisor de los registros de facturación para obtener los registros presentados.  93**](#_page92_x68.00_y222.32)

1. [Consulta de registros de facturación presentados previamente ordenados por fecha de presentación  93](#_page92_x68.00_y280.32)
   1. [Ejemplo mensaje XML de consulta de registros de facturación presentados previamente. Consulta del emisor del registro de facturación.  93](#_page92_x68.00_y371.32)
   1. [Ejemplo mensaje XML de consulta de registros de facturación presentados previamente filtrando por ejercicio, periodo y NIF de la contraparte. Consulta del emisor del registro de facturación.  97](#_page96_x68.00_y209.32)
   1. [Ejemplo mensaje XML de consulta de registros de facturación presentados previamente filtrando por ejercicio, periodo y un rago de fecha de expedición. Consulta del emisor del registro de facturación.  98](#_page97_x68.00_y248.32)
1. [Consulta del destinatario (cliente) de los registros de facturación para obtener los registros presentados por su proveedor.  99](#_page98_x68.00_y356.32)

[11.1.2.1. Ejemplo mensaje XML de consulta paginada de registros de facturación presentados previamente. Consulta del destinatario del registro de facturación.  100](#_page99_x68.00_y163.32)



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

1. **Introducción.<a name="_page6_x82.00_y141.92"></a>** 

El reglamento aprobado por el Real Decreto 1007/2023, de 5 de diciembre, establece en su artículo 15 que los obligados tributarios que utilicen sistemas informáticos para el cumplimiento de la obligación de facturación podrán remitir voluntariamente a la Agencia Estatal de Administración Tributaria (AEAT o Agencia Tributaria), de forma automática  y  segura  por  medios  electrónicos,  todos  los  registros  de  facturación generados  por  esos  sistemas  informáticos  de  acuerdo  con  unas  especificaciones técnicas  que  se  recogen  en  la  Orden  Ministerial  HAC7/1177/2024,  por  la  que  se regulan los Sistemas Informáticos de Facturación y VERI\*FACTU. Esta orden, en su disposición  adicional  única,  habilita  a  la  AEAT  para  que  publique  en  su  sede electrónica cuantos detalles sean necesarios para completar dichas especificaciones. 

Este  documento  detalla  los  requisitos  técnicos  necesarios  para  la remisión  de  los registros de facturación generados por los sistemas informáticos a la Agencia Estatal de Administración Tributaria. 

Para el desarrollo del proyecto se ha considerado importante definirlo bajo estándares que faciliten su desarrollo y que permitan una alta funcionalidad, para ello se utilizarán servicios web que permitirán un envío de los registros de facturación en tiempo real. 

Este  documento  recoge  tanto  los  servicios  web  destinados  al  envío  voluntario  de registros de facturación (sistemas que emiten facturas verificables) como a la remisión de registros de facturación para responder a un requerimiento. 

Existe  un  único  formato  de  registro  de  facturación  para  remisión  voluntaria  por sistemas y para contestar a un requerimiento. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

2. **Control<a name="_page7_x82.00_y141.92"></a> de versiones.** 
1. ***Versión<a name="_page7_x82.00_y192.92"></a> 0.1.0*** 

Creación del documento. 

2. ***Versión<a name="_page7_x82.00_y263.92"></a> 0.2.0*** 

Modificación de esquemas de entrada. Definición de la operativa «VERI\*FACTU». 

3. ***Versión<a name="_page7_x82.00_y371.92"></a> 0.3.0*** 

Modificación de esquemas de entrada. 

Modificación de la operativa «VERI\*FACTU». 

Unificación de esquemas para remisión voluntaria y por requerimiento. 

Posibilidad de remisión de registros de **alta** y de **anulación** dentro de un mismo envío. 

4. ***Versión<a name="_page7_x82.00_y519.92"></a> 0.4.0*** 

Modificación del esquema de respuesta para añadir información de la factura registrada previamente en el sistema en el caso de que se rechace el registro por duplicado 

Se añade el campo <Representante> en la cabecera para los casos de Colaboración social transitiva, donde existe un obligado, que tiene un asesor fiscal (representante) que a su vez utiliza una plataforma en la nube (que utiliza su propio certificado para la remisión). De esta forma queda constancia de la relación obligado-asesor, si no, sólo quedaría la de obligado-plataforma tecnológica 

Sólo cuando el motivo de la remisión sea para dar respuesta a un requerimiento. Se añade el campo opcional <FinRequerimiento> en la cabecera para especificar que se ha finalizado la remisión de registros de facturación tras un requerimiento.  

Se añade el campo <Impuesto> para contemplar cuatro tipos de impuestos: IVA, IPSI, IGIC y Otros.  Esto implicará que "IPSI" y "Otros" no tengan una serie de validaciones extendidas 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

5. ***Versión<a name="_page8_x82.00_y141.92"></a> 0.4.1*** 

Modificación  del  esquema  de  respuesta  añadiendo  el  nodo  <Operacion>  con información del tipo de operación realizada en el registro de facturación. 

6. ***Versión<a name="_page8_x82.00_y196.92"></a> 0.4.2*** 

Modificación del namespace de las etiquetas <Cabecera>, <RegistroAlta> y <RegistroAnulacion> 

Modificación del esquema de respuesta en el formato del campo <TimestampPresentacion> añadiendo el huso horario de los servidores de la AEAT. 

7. ***Versión<a name="_page8_x82.00_y285.92"></a> 1.0.0*** 

Remisión de registros de facturación bajo requerimiento de la AEAT. 

Consulta de la información presentada por el emisor de la factura. La consulta la puede realizar tanto el emisor del registro de facturación como el destinatario (servicio solo disponible en remisión voluntaria «VERI\*FACTU»). 

Se modifica la explicación de la operativa de las operaciones de alta por subsanación y anulación en remisión por requerimiento para un mejor entendimiento.  

Se  añade  la  posibilidad  de  consultar  el  nombre  del  emisor  cuando  se  consulta  por destinatario, aunque puede empeorar el rendimiento de la consulta.  

Se añade la posibilidad de obtener en la respuesta el Sistema Informático de Facturación (SIF) del registro de facturación, únicamente cuando se realiza la consulta por obligado a emisión. Esta posibilidad puede empeorar el rendimiento de la consulta.  

Se añade la posibilidad de filtrar por el campo “Referencia externa”  (“RefExterna”) en las consultas de registro informático.  

8. ***Versión 1.0.2*** 

Se añade la posibilidad de consultar por Sistema Informático de Facturación (SIF) sin necesidad de cumplimentar todos los campos que identifican a un SIF.  

3. **Esquema<a name="_page8_x82.00_y702.92"></a> general de funcionamiento.** 

Los sistemas realizarán la remisión de registros de facturación  por vía telemática, concretamente mediante Servicios Web SOAP basados en el intercambio de mensajes 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

XML. Todos los mensajes enviados se responden de forma síncrona y los sistemas deberán procesar adecuadamente los mensajes de respuesta a los envíos realizados. 

Se define un solo tipo de mensaje que puede contener registros de facturación tanto de alta como de anulación. Una vez enviado el mensaje XML, la AEAT procederá a realizar  automáticamente un proceso de validación, tanto a nivel de formato XML, como de reglas de negocio. 

Si  el  mensaje  no  supera  alguna  de  las  validaciones  a  nivel  de  formato  XML,  se devolverá un mensaje de tipo «SoapFault», en el que se especificará el error concreto. 

Si el mensaje supera las validaciones a nivel de formato XML, se procederá a realizar las validaciones de negocio, devolviéndose un mensaje de respuesta con el resultado de la validación y de su aceptación o no por la AEAT. 

El número máximo de registros por envío es de 1.000. 

La  unidad  de  información,  representada  por  un  registro  de  facturación,  podrá  ser aceptada, rechazada o aceptada con errores, consecuencia de las validaciones que se realizan en el momento de la remisión.  

Si los registros contuvieran errores, sólo se aceptarán aquellos registros para los que no exista motivo de rechazo. En caso de rechazo, los obligados tributarios deberán realizar las subsanaciones necesarias y proceder a una nueva remisión en la que incluirán los registros que en su momento fueron rechazados.  

El mensaje XML de respuesta enviado por la AEAT contendrá la relación de registros aceptados y  rechazados  junto  con  la  expresión  del  motivo  por  el  que  hayan  sido rechazados. En la respuesta también se informará del código seguro de verificación (CSV) que servirá para dejar constancia de la remisión, excepto en el caso de que se rechacen todos los registros enviados. 

A su vez, en la respuesta también se incluye un resultado global de la remisión, que puede ser aceptada (si no existen errores en ningún registro), aceptada parcialmente (cuando  existen  registros  aceptados  y  rechazados,  o  cuando  existen  registros aceptados con errores admisibles) y rechazada (cuando todos los registros han sido rechazados).  

La etiqueta *<IDFactura>* contiene los campos que identifican de manera única a un registro de facturación que son:  

*<NIF> + <NumSerieFactura> + <FechaExpedicionFactura>*. 

El formato del mensaje XML es el mismo tanto para una remisión voluntaria como para la remisión a raíz de un requerimiento de la AEAT. Tener un esquema XSD único de 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

validación,  facilitará  la  migración  de  sistemas  que  inicialmente  emiten  facturas  no verificables, a sistemas que emiten facturas verificables. 

Aunque  el  esquema  XSD  es  común,  existirán  URLs  diferentes  para  la  remisión voluntaria y la remisión por requerimiento, pudiendo tener los servicios “ubicados” en dichas URLs ciertas diferencias en las validaciones de negocio. 

Los envíos a través de los servicios web devolverán un mensaje de respuesta en el que se indicará tanto el resultado de la validación global del envío, como el resultado específico de la validación de cada registro. 

Para calificar el resultado global del envío se devolverá uno de los siguientes valores como respuesta: 

- Correcto (Aceptación completa) 
- ParcialmenteCorrecto (Aceptación parcial) 
- Incorrecto (Rechazo completo)  

Para calificar el resultado de cada registro de facturación incluido en la remisión se podrá devolver uno de los siguientes valores como respuesta: 

- Correcto (Aceptado) 
- AceptadoConErrores (Aceptado con errores) 
- Incorrecto (Rechazado) 

<a name="_page10_x82.00_y495.92"></a>**Descripción  de  los  valores  posibles  de  la  respuesta  global  (o  “estados globales”) de una remisión.**

*Aceptación completa* 

Una remisión cuyo resultado sea la aceptación completa de la misma, indicará que todos los registros incluidos en la misma han pasado tanto las validaciones sintácticas, como las de negocio y que por tanto han sido registradas de manera satisfactoria por la Agencia. 

*Aceptación Parcial* 

Una remisión con aceptación parcial indicará que en ella existen registros aceptados y rechazados o existen registros aceptados con errores admisibles, es decir, no todos los registros han sido aceptados correctamente y que, por tanto, los no aceptados -es decir, los rechazados- o bien los aceptados con errores admisibles no han pasado algún tipo de validación de las establecidas. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

En el caso de la remisión voluntaria, será necesario efectuar una nueva remisión (previa subsanación, si procede, de los registros de facturación necesarios) que permita la aceptación de todos los registros erróneos. 

En el caso de la remisión bajo requerimiento de la AEAT, no debe subsanar los errores relacionados con las validaciones de negocio de los registros enviados, ya que estos registros deben ser los que se han conservado en el sistema del obligado tributario en el momento de su generación. 

*Rechazo completo* 

Una remisión con un rechazo completo de la misma puede deberse a dos casuísticas: 

1. O bien la estructura definida en la remisión no es conforme al esquema definido (no cumple las validaciones estructurales), o bien, existen errores sintácticos en la cabecera y por ello toda la remisión ha de ser rechazada. 

La  respuesta  se  devolverá  un  mensaje  de  tipo  «SoapFault»,  en  el  que  se 

especifica el error concreto. 

2. Todos los registros incluidos en la remisión incumplen las validaciones sintácticas 

o de negocio asociadas y por tanto todos ellos han sido rechazados. En este caso se devuelven los códigos de error por los que han sido rechadados cada uno de los registros. 

<a name="_page11_x82.00_y488.92"></a>**Tipos de Errores definidos.** 

Errores “No admisibles”: Estos errores provocan el rechazo del registro de facturación y  son  aquellos  errores  que  en  ningún  caso  podrán  ser  admitidos  por  la  Agencia Tributaria. Se corresponden con los errores provocados al no superar las validaciones sintácticas del envío y a errores de negocio (según se definen en el documento de validaciones). 

Errores “Admisibles”: Son aquellos errores que no provocan el rechazo del registro de facturación. Estos registros serán admitidos por la Agencia Tributaria. Y la respuesta dada para este tipo de errores será especificada como “Aceptado con errores”, para dejar constancia al presentador de que se ha producido un error, pero no ha impedido su registro por la Agencia Tributaria.  

<a name="_page11_x82.00_y695.92"></a>**Tratamiento de los errores (no admisibles y admisibles).** 

En el caso de la remisión voluntaria, tanto los registros de facturación con errores no admisibles que fueron rechazados (y, por lo tanto, no registrados por los sistemas de 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

la Agencia Tributaria), como los registros de facturación con errores admisibles que sí fueron registrados por los sistemas de la Agencia Tributaria, siempre y cuando para arreglar  esa  situación  no  proceda  la  emisión  de  una  factura  rectificativa  (u  otro mecanismo contemplado en el Reglamento de Facturación) ni se anule la factura, deberán ser subsanados y remitidos de nuevo a la AEAT para poder llevar a cabo el tratamiento y validación de los mismos. 

En el caso de la remisión bajo requerimiento de la AEAT, no debe subsanar los errores relacionados con las validaciones de negocio de los registros enviados, ya que estos registros deben ser los que se han conservado en el sistema del obligado tributario en el momento de su generación. 

4. **Estándares<a name="_page12_x82.00_y340.92"></a> y requisitos.** 
1. ***Introducción.<a name="_page12_x82.00_y388.92"></a>*** 

El contenido de un mensaje es un fichero XML. La codificación a utilizar debe ser UTF- 8.  

Un documento XML debe cumplir las reglas descritas en los diferentes esquemas, los cuales  proporcionan  normas  respecto  a  formatos,  obligatoriedad,  etc.  pero,  en cualquier caso, la coherencia de los datos debe garantizarse en origen por quienes intervengan en la preparación y remisión de los datos.  

Cada esquema está organizado en “Grupos de Datos” que contienen “Elementos de Datos”.  Estos  se  han  agrupado  de  modo  que  constituyen  bloques  lógicos, manteniendo una coherencia con el ámbito de cada esquema. 

La remisión a través del servicio web podrá ser efectuada por el obligado tributario, un apoderado suyo a este trámite o un colaborador social, que deberá disponer de un certificado electrónico cualificado reconocido. Todos los NIFs se tienen que validar contra la “Base de Datos Centralizada de la AEAT”. 

2. ***Estándares<a name="_page12_x82.00_y631.92"></a> utilizados.*** 

El uso de servicios Web constituye la base de las buenas prácticas para desplegar servicios que posibiliten la interacción máquina-máquina, es decir, la automatización integral de un proceso en el que intervienen varios sistemas de información (el del ciudadano/empresa y el de la Agencia Tributaria). 

Se pretende utilizar los estándares de facto para el desarrollo de servicios Web. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

La estructura de los mensajes se basa en la creación de esquemas XML utilizando la recomendación W3C de 28-Octubre de 2004 en[ http://www.w3.org/TR/xmlschema-0 ](http://www.w3.org/TR/xmlschema-0)y referenciada por el namespace[ http://www.w3.org/2001/XMLSchema ](http://www.w3.org/2001/XMLSchema)

Con relación a SOAP se utilizará SOAP V1.1 disponible como NOTA W3C de 08- Mayo-2000 en:[ http://www.w3.org/TR/2000/NOTE-SOAP-20000508/ ](http://www.w3.org/TR/2000/NOTE-SOAP-20000508/)y referenciado por el namespace[ http://schemas.xmlsoap.org/soap/envelope/ ](http://schemas.xmlsoap.org/soap/envelope/)

En  SOAP-1.1  existen  dos  estilos  para  implementar  servicios,  modo  “rpc”  y  modo “document”. En línea con las recomendaciones actuales se utilizará siempre el modo “document” (style = ”document”) sin ningún tipo de codificación (use = ”literal”). Es decir, el mensaje de entrada y salida estará descrito íntegramente por su respectivo esquema XML. 

En la descripción de los servicios utilizaremos WSDL 1.1 disponible como NOTA W3C de  14-Marzo-2001  en:  [http://www.w3.org/TR/2001/NOTE-wsdl-20010315 ](http://www.w3.org/TR/2001/NOTE-wsdl-20010315) y referenciado por el namespace[ http://schemas.xmlsoap.org/wsdl/ ](http://schemas.xmlsoap.org/wsdl/)

3. ***Medio<a name="_page13_x82.00_y370.92"></a> de envío.*** 

**Entorno**: Internet.  

**Protocolo**: HTTPS.  

**Mensajes**: Web Service con SOAP 1.1 modo Document. 

**Certificado**: Las aplicaciones que envían información a los servicios web deberán autenticarse con certificado electrónico cualificado reconocido. 

**Codificación**: UTF-8. La entrada es un XML que se debe adecuar a la especificación del siguiente esquema de entrada XSD. 

5. **Consideraciones<a name="_page13_x82.00_y519.92"></a> de diseño.** 

<a name="_page13_x82.00_y548.92"></a>***5.1.  Comunicación de incidencias en el procesado de peticiones.*** 

En caso de incidencias al procesar el XML, serán comunicadas tal como se describen en el protocolo SOAP V1.1, es decir utilizando el elemento “Fault”. 

A modo de resumen como respuesta a una remisión se pueden producir los siguientes casos: 



|**Resultado  en el lado cliente** |**Acción** |
| - | - |
|Se recibe una respuesta con XML esperado. (Puede ser de admisión o rechazo de la remisión) |OK. Mensaje procesado |
|Se recibe un respuesta con elemento “Fault” |Reenviar mensaje |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|y “faultcode” del tipo “soapenv:Server” ||
| - | :- |
|Se recibe una respuesta con elemento “Fault” y “faultcode” del tipo “soapenv:Client” |El mensaje no está bien formado o contiene información incorrecta. Compruebe el contenido del elemento “faultstring” para solucionar el problema antes de volver a enviar el mensaje. |
|No progresa la transmisión o bien no se recibe un documento XML que responde a lo esperado |Reenviar mensaje |



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

6. **Diseño.<a name="_page15_x82.00_y141.92"></a>** 
1. ***Estructura<a name="_page15_x82.00_y192.92"></a> de los mensajes.*** 

**Mensaje de remisión.** 

Contendrá una capa “SOAP” y en el “BODY” estarán los datos de la remisión.  

**Mensaje de respuesta.** 

Contendrá una capa “SOAP” y en el “BODY” estarán los datos de la respuesta.  

2. ***Tipos<a name="_page15_x82.00_y358.92"></a> de mensajes.*** 
1. **Definición<a name="_page15_x82.00_y405.92"></a> del mensaje de remisión. Fichero XML de “Remisión”:** 
- Cabecera. 
- Lista de registros de facturación. 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

2. **Alta/Anulación<a name="_page16_x153.00_y167.92"></a> de registros de facturación.** La estructura genérica de la remisión será la siguiente: 

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.003.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

La estructura del nodo *<RegistroAlta>* es la siguiente: 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.004.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

La estructura del nodo *<RegistroAnulacion>* es la siguiente: 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.005.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

3. **Consulta<a name="_page21_x82.00_y167.92"></a> de registros de facturación presentados (servicio solo disponible en remisión voluntaria «VERI\*FACTU»).** 

La estructura genérica de la remisión será la siguiente: 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.006.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

4. **Definición<a name="_page23_x82.00_y165.92"></a> de los mensajes de respuesta. Fichero XML de “Respuesta” enviado por la AEAT.** 

Cuando el mensaje de remisión se ha recibido correctamente en la AEAT y se está en disposición de procesar la información solicitada, se responderá con el fichero XML “Respuesta” con la información que corresponda. En este caso, estará compuesto de:  

- Cabecera. 
- Lista de registros aceptados y rechazados. 
5. **Respuesta<a name="_page23_x82.00_y331.92"></a> Alta/Anulación de registros de facturación.** La estructura de la respuesta será la siguiente: 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.007.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

6. **Respuesta<a name="_page25_x82.00_y161.92"></a> de la Consulta de registros de facturación presentados.** La estructura de la respuesta será la siguiente: 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.008.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.001.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

**Fichero XML “SOAPFault”:** 

Cuando  el  mensaje  de  “Remisión”  enviado  por  la  empresa  tiene  errores  en  la validación a nivel de formato XML y/o en el contenido de los datos de la cabecera entonces se generará un mensaje de respuesta “SOAPFault” y se rechazará el envío completo. 

**Ejemplo de mensaje XML de respuesta “SOAPFault” informando de un error:** 

<?xml version="1.0" encoding="UTF-8"?> 

<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"> 

`   `<env:Body> 

`      `<env:Fault> 

`         `<faultcode>env:Client</faultcode> 

`         `<faultstring>Codigo[4104].El NIF del titular en la cabecera no está identificado.  

`   `NIF:iii. NOMBRE\_RAZON:xxx 

`        `</faultstring> 

`         `<detail> 

`            `<callstack>WSExcepcion [faultcode=null, detailMap=null, version=0,........</callstack>          </detail> 

`      `</env:Fault> 

`   `</env:Body> 

</env:Envelope>

Página: 26**/97**** ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.009.png)
|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

3. ***Especificación<a name="_page28_x143.00_y141.32"></a> funcional del mensaje de remisión.*** 

Publicado en la sede electrónica de la Agencia Estatal de Administración Tributaria en un documento independiente, ubicado en el Portal de Desarrolladores:  

[Enlace al Portal de desarrolladores de la AEAT.](https://www.agenciatributaria.es/AEAT.desarrolladores/Desarrolladores/_menu_/Documentacion/Sistemas_Informaticos_de_Facturacion_y_Sistemas_VERI_FACTU/Sistemas_Informaticos_de_Facturacion_y_Sistemas_VERI_FACTU.html) 



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

4. ***Especificación<a name="_page29_x68.00_y141.32"></a> funcional de la consulta, por emisor y destinatario, de los registos de facturación presentados (servicio solo disponible en remisión voluntaria «VERI\*FACTU»).*** 

Se pueden consultar los registros previamente presentados por el emisor de la factura en remisión voluntaria (no en caso de remisión bajo requerimiento) filtrando obligatoriamente por el ejercicio y periodo de la factura (ejercicio/periodo de la fecha de operación o en su defecto de la fecha de expedición). Además, opcionalmente, podrá filtrar por otros campos, para permitir acotar con mayor precisión la relación de facturas obtenidas. 

Se permite consultar tanto los propios registros de facturación que ha presentado el emisor (consulta realizada por el emisor de la factura) como los registros de facturación presentados por nuestro proveedor (consulta realizada por el destinatario de la factura). Si la consulta la realiza el emisor de los registros de facturación deberá filtrar en la cabecera por <ObligadoEmision> y si la consulta la realiza el destinatario deberá hacerlo por <Destinatario>. 

Las consultas de registros de facturación informados se realizan por ejercicio/periodo “de imputación”, dato obtenido a partir de la fecha de operación o en su defecto de la fecha de expedición. 

Las consultas responderán con un máximo de 10.000 registros. Si hay más datos pendientes en la respuesta, habrá que invocar al servicio de forma paginada (Ver 6.4.3 Consulta paginada) realizando nuevas consultas con la identificación del último registro obtenido, para obtener los siguientes registros ordenados por fecha de presentación. 

1. **Consulta<a name="_page29_x68.00_y433.32"></a> de los registos de facturación presentados** La estructura de la petición será la siguiente: 

Leyenda  Rojo=  Campo obligatorio ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.011.png)![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.012.png)

Negro=  Campo opcional 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



||||Campo de Selección |||
| :- | :- | :- | - | :- | :- |
||||||||


<table><tr><th colspan="1"><b>BLOQUE</b> </th><th colspan="1"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1"><b>DESCRIPCIÓN</b> </th><th colspan="1"><b>FORMATO / (LONGITUD) / LISTA</b> </th></tr>
<tr><td colspan="1" rowspan="6" valign="top"><b>Cabecera</b> </td><td colspan="1">IDVersion </td><td colspan="1"></td><td colspan="1"></td><td colspan="1">Identificación de la versión actual del esquema o estructura de información utilizada para la generación y conservación / remisión de los registros de facturación. Este campo forma parte del detalle de las circunstancias de generación de los registros de facturación. </td><td colspan="1">Alfanumérico (3) L15 </td></tr>
<tr><td colspan="1" rowspan="2">ObligadoEmision </td><td colspan="1">NombreRazon </td><td colspan="1"></td><td colspan="1">Nombre-razón social del obligado a expedir las facturas. </td><td colspan="1">Alfanumérico (120)  </td></tr>
<tr><td colspan="1" valign="top">NIF </td><td colspan="1"></td><td colspan="1" valign="top">NIF del obligado a expedir las facturas. </td><td colspan="1" valign="top">FormatoNIF (9)  </td></tr>
<tr><td colspan="1" rowspan="2">Destinatario </td><td colspan="1">NombreRazon </td><td colspan="1"></td><td colspan="1">Nombre-razón social del destinatario, es decir, el cliente de la operación. </td><td colspan="1">Alfanumérico (120)  </td></tr>
<tr><td colspan="1">NIF </td><td colspan="1"></td><td colspan="1">Identificador del NIF del destinatario, es decir, el cliente de la operación. </td><td colspan="1">FormatoNIF (9)  </td></tr>
<tr><td colspan="1">IndicadorRepresentante </td><td colspan="1"></td><td colspan="1"></td><td colspan="1">Flag opcional que tendrá valor S si quien realiza la cosulta es el representante/asesor del obligado tributario. Permite, a quien realiza la cosulta, obtener los registros de facturación en los que figura como representante. Este flag solo se puede cumplimentar cuando esté informado el obligado tributario en la consulta </td><td colspan="1">Alfanumérico (1) L1C </td></tr>
<tr><td colspan="1" valign="top"><b>FiltroConsulta</b> </td><td colspan="1" valign="top">PeriodoImputacion </td><td colspan="1" valign="top">Ejercicio </td><td colspan="1"></td><td colspan="1" valign="top">Año de la fecha de la operación a consultar (obtenido del año de la fecha de operación o en su defecto de la fecha de expedición)  </td><td colspan="1" valign="top">Númerico(4), formato YYYY </td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



<table><tr><th colspan="1" rowspan="8"></th><th colspan="2"></th><th colspan="2">Periodo </th><th colspan="1"></th><th colspan="3">Mes de la fecha de la operación a consultar (obtenido del mes de la fecha de operación o en su defecto de la fecha de expedición)  </th><th colspan="1">Alfanumérico (2) L2C </th></tr>
<tr><td colspan="2">NumSerieFactura </td><td colspan="2"></td><td colspan="1"></td><td colspan="3">Nº Serie+Nº Factura que identifica al registro de facturacion. </td><td colspan="1">Alfanumérico (60)  </td></tr>
<tr><td colspan="1">NombreRazon </td><td colspan="2"></td><td colspan="3"><p>Nombre-razón social de la contraparte del NIF de la cabecera que realiza la consulta.  </p><p>Obligado emisor si la cosulta la realiza el Destinatario de los registros de facturacion. </p><p>Destinatario si la cosulta la realiza el Obligado dde los registros de facturacion.. </p></td><td colspan="1">Alfanumérico (120)  </td></tr>
<tr><td colspan="1">NIF </td><td colspan="2"></td><td colspan="3"><p>Identificador del NIF de la contraparte del NIF de la cabecera que realiza la consulta.  </p><p>Obligado emisor si la cosulta la realiza el Destinatario de los registros de facturacion. </p><p>Destinatario si la cosulta la realiza el Obligado dde los registros de facturacion.. </p></td><td colspan="1">FormatoNIF (9)  </td></tr>
<tr><td colspan="1">IDOtro </td><td colspan="2">CodigoPais </td><td colspan="3"></td><td colspan="1">Alfanumérico (2) (ISO 3166-1 alpha- 2 codes)  </td></tr>
<tr><td colspan="1"></td><td colspan="2">IDType </td><td colspan="3"><p>Clave para establecer el tipo de identificación, en el país de residencia, de la contraparte del NIF de la cabecera que realiza la consulta.  </p><p>Obligado emisor si la cosulta la realiza el Destinatario de los registros de facturacion. </p><p>Destinatario si la cosulta la realiza el Obligado dde los registros de facturacion.. </p></td><td colspan="1">Alfanumérico (2) L7 </td></tr>
<tr><td colspan="2" valign="top"></td><td colspan="2"></td><td colspan="1">ID </td><td colspan="3"><p>Número de identificación, en el país de residencia, de la contraparte del NIF de la cabecera que realiza la consulta.  Obligado emisor si la cosulta la realiza el Destinatario de los registros de facturacion. </p><p>Destinatario si la cosulta la realiza el Obligado de los registros de facturacion.. </p></td><td colspan="1">Alfanumérico (20)  </td></tr>
<tr><td colspan="2">FechaExpedicionFactura </td><td colspan="2">FechaExpedicionFactura </td><td colspan="1"></td><td colspan="3">Fecha de emisión del registro de facturacion </td><td colspan="1">Fecha (dd-mm- yyyy) </td></tr>
</table>

<table><tr><th colspan="1"></th><th colspan="1"></th><th colspan="1"></th><th colspan="1"></th><th colspan="1"></th></tr>
<tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
<tr><td colspan="1" rowspan="5"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
<tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
<tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
<tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
<tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
<tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



<table><tr><th colspan="1" rowspan="7"></th><th colspan="2" rowspan="2"></th><th colspan="2" rowspan="2">RangoFechaExpedicion </th><th colspan="1">Desde </th><th colspan="3">Fecha desde la que se consulta </th><th colspan="1">Fecha (dd-mm- yyyy) </th></tr>
<tr><td colspan="1">Hasta </td><td colspan="3">Fecha hasta la que se consulta </td><td colspan="1">Fecha (dd-mm- yyyy) </td></tr>
<tr><td colspan="2">SistemaInformatico </td><td colspan="2"></td><td colspan="1"></td><td colspan="3">Datos del sistema informático de facturación utilizado. Ver su diseño de bloque: «SistemaInformatico» en documento de diseño del alta/anulación </td><td colspan="1"></td></tr>
<tr><td colspan="2" valign="top">RefExterna </td><td colspan="2"></td><td colspan="1"></td><td colspan="3">Dato adicional de contenido libre con el objetivo de que se pueda asociar opcionalmente información interna del sistema informático de facturación al registro de facturación </td><td colspan="1" valign="top">Alfanumérico (60) </td></tr>
<tr><td colspan="1">IDEmisorFactura </td><td colspan="2"></td><td colspan="3">Número de identificación fiscal (NIF) del obligado a expedir la factura. (la ultima consultada) </td><td colspan="1">FormatoNIF (9)  </td></tr>
<tr><td colspan="2" rowspan="2" valign="top">ClavePaginacion </td><td colspan="2">NumSerieFactura </td><td colspan="1"></td><td colspan="3">Nº Serie+Nº Factura que identifica al registro de facturacion. (el ultimo consultado) </td><td colspan="1">Alfanumérico (60)  </td></tr>
<tr><td colspan="2">FechaExpedicionFactura </td><td colspan="1"></td><td colspan="3">Fecha de emisión del registro de facturacion (el ultimo consultado) </td><td colspan="1">Fecha (dd-mm- yyyy) </td></tr>
<tr><td colspan="1" rowspan="2">DatosAdicionalesRespuesta</b> </td><td colspan="2">MostrarNombreRazonEmisor </td><td colspan="2"></td><td colspan="1"></td><td colspan="3"><p>Indicador que especifica si se quiere obtener en la respuesta el campo NombreRazonEmisor en la información del registro se facturacion. Si el Valor es S aumenta el tiempo de respuesta en la cosulta por detinatario. </p><p>Si no se informa este campo se entenderá que tiene valor “N”. </p></td><td colspan="1"><p>Alfanumérico(1) </p><p>Valores posibles: “S” o “N” </p></td></tr>
<tr><td colspan="2">MostrarSistemaInformatico </td><td colspan="2"></td><td colspan="1"></td><td colspan="3">Indicador que especifica si se quiere obtener en la respuesta el bloque SistemaInformatico en la información del registro se facturacion. Si el Valor es S aumenta el tiempo de respuesta en la cosulta. Si se consulta por Destinatario el valor del campo MostrarSistemaInformatico debe ser 'N' o no estar cumplimentado </td><td colspan="1" valign="top"><p>Alfanumérico(1) </p><p>Valores posibles: “S” o “N” </p></td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

2. **Respuesta<a name="_page33_x68.00_y141.32"></a> de la consulta de los registos de facturación presentados** 



<table><tr><th colspan="1" valign="top"><b>BLOQUE</b> </th><th colspan="1" valign="top"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1" valign="top"><p><b>DATOS/</b> </p><p><b>AGRUPA CIÓN</b> </p></th><th colspan="1" valign="top"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1" valign="top"><b>DESCRIPCIÓN</b> </th><th colspan="1" valign="top"><b>FORMATO LONGITUD ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.013.png)LISTA</b> </th></tr>
<tr><td colspan="1" rowspan="6" valign="top">Cabecera </td><td colspan="1" valign="top">IDVersion </td><td colspan="1"></td><td colspan="1"></td><td colspan="1" valign="top">Identificación de la versión del esquema utilizado para el intercambio de información </td><td colspan="1" valign="top">Alfanumérico(3) L15</td></tr>
<tr><td colspan="1" rowspan="2" valign="top">ObligadoEmision </td><td colspan="1" valign="top">NombreR azon </td><td colspan="1"></td><td colspan="1" valign="top">Nombre-razón social del consultado. </td><td colspan="1" valign="top">Alfanumérico(120) </td></tr>
<tr><td colspan="1" valign="top">NIF </td><td colspan="1"></td><td colspan="1" valign="top">Nombre-razón social del obligado consultado. </td><td colspan="1" valign="top">FormatoNIF(9) </td></tr>
<tr><td colspan="1" rowspan="2" valign="top">Destinatario </td><td colspan="1" valign="top">NombreR azon </td><td colspan="1"></td><td colspan="1" valign="top">Nombre-razón social del consultado. </td><td colspan="1" valign="top">Alfanumérico(120) </td></tr>
<tr><td colspan="1" valign="top">NIF </td><td colspan="1"></td><td colspan="1" valign="top">Identificador del NIF del consultado. </td><td colspan="1" valign="top">FormatoNIF(9) </td></tr>
<tr><td colspan="1" valign="top">IndicadorRepresentante </td><td colspan="1"></td><td colspan="1"></td><td colspan="1" valign="top">Indicador que indica si actua como representante o en nombre propio </td><td colspan="1" valign="top">Alfanumérico (1) L1C </td></tr>
<tr><td colspan="1" rowspan="2" valign="top">PeriodoImputacio n </td><td colspan="1" valign="top">Ejercicio </td><td colspan="1"></td><td colspan="1"></td><td colspan="1">Ejercicio consultado </td><td colspan="1" valign="top">Númerico(4), formato YYYY </td></tr>
<tr><td colspan="1" valign="top">Periodo </td><td colspan="1"></td><td colspan="1"></td><td colspan="1">Periodo consultado </td><td colspan="1" valign="top">Alfanumérico (2) L2C </td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



<table><tr><th colspan="1" valign="top">IndicadorPaginaci on </th><th colspan="1"></th><th colspan="1"></th><th colspan="1"></th><th colspan="1"><p>Indica si hay más registros de facturación en la consulta realizada (Ver 6.4.3 Consulta paginada). </p><p>Si hay más datos pendientes, este campo tendrá valor “S” y se podrán realizar nuevas consultas indicando la identificación del último registro a partir de la cual se devolverán los siguientes registros ordenados por fecha de presentación. </p></th><th colspan="1" valign="top"><p>Alfanumérico(1) </p><p>Valores posibles: “S” o “N” </p></th></tr>
<tr><td colspan="1" valign="top">ResultadoConsult a</b> </td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1">Indica si hay registros de facturación para la consulta realizada. </td><td colspan="1" valign="top"><p>Alfanumérico(8) </p><p>Valores posibles: “ConDatos” o “SinDatos” </p></td></tr>
<tr><td colspan="1" rowspan="4" valign="top">RespuestaConsult aFactuSistemaFac turacion </td><td colspan="1" rowspan="4" valign="top"><p>Bloque que contiene todos los campos de una factura. Se obtendrán como máximo 10.000 facturas, es decir, este bloque puede repetirse </p><p>10\.000 veces como máximo. </p></td><td colspan="1">IDFactura </td><td colspan="1"></td><td colspan="1"></td><td colspan="1" valign="top">Bloque que contiene los campos que identifican al registros de facturación. </td></tr>
<tr><td colspan="1">DatosRegi stroFactur acion </td><td colspan="1"></td><td colspan="1"></td><td colspan="1" valign="top">Bloque que contiene los campos del registros de facturación registrado. </td></tr>
<tr><td colspan="1" valign="top">DatosPres entacion </td><td colspan="1"></td><td colspan="1"></td><td colspan="1" valign="top"><p>Bloque que contiene los campos con información de la presentación realizada: <NIFPresentador> <TimestampPresentacion> </p><p><IdPeticion> </p></td></tr>
<tr><td colspan="1">EstadoRe gistro </td><td colspan="1"></td><td colspan="1"></td><td colspan="1"><p>Bloque que contiene los campos del estado del registro de facturación registrado: <TimestampUltimaModificacion> <EstadoRegistro> </p><p><CodigoErrorRegistro> <DescripcionErrorRegistro> </p></td></tr>
<tr><td colspan="1" rowspan="2" valign="top">ClavePaginacion </td><td colspan="1">IDEmisorFactura </td><td colspan="1"></td><td colspan="1"></td><td colspan="1"><p>Número de identificación fiscal (NIF) del obligado a expedir la factura. (la ultima consultada) </p><p>Solo se informa si IndicadorPaginacion=S  </p></td><td colspan="1" valign="top">FormatoNIF (9) </td></tr>
<tr><td colspan="1">NumSerieFactura </td><td colspan="1"></td><td colspan="1"></td><td colspan="1"><p>Nº Serie+Nº Factura que identifica al registro de facturación. (el ultimo consultado) </p><p>Solo se informa si IndicadorPaginacion=S </p></td><td colspan="1" valign="top">Alfanumérico (60) </td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



||FechaExpedicionFactura |||<p>Fecha de emisión del registro de facturación (el ultimo consultada) </p><p>Solo se informa si IndicadorPaginacion=S </p>|Fecha (dd-mm-yyyy) |
| :- | - | :- | :- | :- | - |

3. **Consulta<a name="_page35_x68.00_y221.32"></a> paginada** 

Si al realizar una consulta hay más datos pendientes en la respuesta (el servicio de consulta responderá con un máximo de 10.000 registros) habrá que invocar al servicio de forma paginada. En este caso el campo <IndicadorPaginacion> de la respuesta tendrá valor “S” y <ClavePaginacion> estará relleno con el último registro de facturación de la respuesta, para informar de que se deben realizar nuevas consultas si desea obtener el resto de registros.  

Para obtener el resto de registros pendientes deberá enviar una nueva petición de consulta cumplimentando el campo <ClavePaginacion> con la clave del registro que haya devuelto la respuesta de la consulta anterior a partir del que se obtendrán el resto. Si no se informa el bloque <ClavePaginacion> la consulta responderá con los 10.000 primeros registros ordenados por fecha de presentación. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

4. **Respuesta<a name="_page36_x68.00_y163.32"></a> de alta y anulación de registros de facturación.** 



<table><tr><th colspan="1" valign="top"><b>BLOQUE</b> </th><th colspan="1" valign="top"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1" valign="top"><b>DATOS/ AGRUPACIÓN</b> </th><th colspan="1"></th><th colspan="1" valign="top"><b>D A T O S</b> </th><th colspan="3" valign="top"><b>DESCRIPCIÓN</b> </th><th colspan="2" valign="top"><b>FORMATO LONGITUD LISTA</b> </th></tr>
<tr><td colspan="1">CSV </td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="3"><p>Código seguro de verificación asociado a la remisión enviada. </p><p>IMPORTANTE: El CSV debe ser almacenado por el SIF en el momento de alta, no podrá ser recuperado a través de consultas posteriores.  </p></td><td colspan="2">Alfanumérico(16) </td></tr>
<tr><td colspan="1" rowspan="2">DatosPresentaci on </td><td colspan="1">NIFPresentador </td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="3">NIF del presentador. </td><td colspan="2">FormatoNIF(9) </td></tr>
<tr><td colspan="1">TimestampPresentacion </td><td colspan="1"></td><td colspan="3"></td><td colspan="1"></td><td colspan="2">Timestamp asociado a la remisión enviada, en huso horario de los servidores de la AEAT. </td><td colspan="2"><p>DateTime. Formato: YYYY-MM- DDThh:mm:ssTZD (ej: 2024-01-</p><p>01T19:20:30+01:00</p><p>) (ISO 8601) </p></td></tr>
<tr><td colspan="1">Cabecera </td><td colspan="1"></td><td colspan="1"></td><td colspan="3"></td><td colspan="1"></td><td colspan="2">Cabecera equivalente a la enviada en la remisión de alta / anulación. </td><td colspan="2"></td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



<table><tr><th colspan="1">TiempoEsperaE nvio </th><th colspan="1"></th><th colspan="1"></th><th colspan="2"></th><th colspan="1"></th><th colspan="2"><p>Segundos de espera entre envíos. </p><p>Para poder realizar el siguiente envío, el sistema informático deberá esperar a que transcurran <TiempoEsperaEnvio> segundos desde el anterior envío </p><p>o deberá esperar a tener acumulados un número de registros de facturación igual al límite establecido en el diseño de registro para cada envío, la circunstancia que ocurra primero </p></th><th colspan="2" valign="top">Numérico  </th></tr>
<tr><td colspan="1">EstadoEnvío </td><td colspan="1"></td><td colspan="1"></td><td colspan="2"></td><td colspan="1"></td><td colspan="2">Campo que especifica si el conjunto de registros de facturación enviados han sido admitidos correctamente, han sido rechazados, o se han aceptado de forma parcial. </td><td colspan="2">Alfanumérico(20) L18 </td></tr>
<tr><td colspan="1" rowspan="5">RespuestaLinea (0..1000) </td><td colspan="1">IDFactura </td><td colspan="1"></td><td colspan="1"></td><td colspan="3">Identificador del registro de facturación especificado en la remisión de alta/anulación. </td><td colspan="2"></td></tr>
<tr><td colspan="1" rowspan="4">Operacion </td><td colspan="1">TipoOperacion </td><td colspan="1"></td><td colspan="3">Tipo de operación realizada que puede ser “Alta” o “Anulacion” </td><td colspan="2">Alfanumérico(9) L22 </td></tr>
<tr><td colspan="1">Subsanacion </td><td colspan="1"></td><td colspan="3">Indicador de “Subsanacion” especificado en la remisión de alta </td><td colspan="2">Alfanumérico (1) L4 </td></tr>
<tr><td colspan="1">RechazoPrevio </td><td colspan="1"></td><td colspan="3">Indicador de “RechazoPrevio” especificado en la remisión de alta/anulación </td><td colspan="2">Alfanumérico (1) L17 </td></tr>
<tr><td colspan="1">SinRegistroPrevio </td><td colspan="1"></td><td colspan="3">Indicador de “SinRegistroPrevio” especificado en la remisión de anulación </td><td colspan="2">Alfanumérico (1) L4 </td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



<table><tr><th colspan="1"></th><th colspan="1">RefExterna </th><th colspan="1"></th><th colspan="2"></th><th colspan="1"></th><th colspan="2">Dato adicional de contenido libre especificado en la remisión de alta/anulación. </th><th colspan="2">Alfanumérico(60) </th></tr>
<tr><td colspan="1"></td><td colspan="1">EstadoRegistro </td><td colspan="1"></td><td colspan="1"></td><td colspan="3"><p>Campo que especifica si el registro de facturación ha sido registrado correctamente, ha sido rechazado, o se trata de un caso en el ha sido registrado, pero con errores </p><p>. </p></td><td colspan="2">Alfanumérico(18) L19 </td></tr>
<tr><td colspan="1"></td><td colspan="1">CodigoErrorRegistro </td><td colspan="1"></td><td colspan="2"></td><td colspan="1"></td><td colspan="2">Código que identifica el tipo de error producido en el registro de facturación. </td><td colspan="2">Alfanumérico(5) L20 </td></tr>
<tr><td colspan="1"></td><td colspan="1">DescripcionErrorRegistro </td><td colspan="1"></td><td colspan="2"></td><td colspan="1"></td><td colspan="2">Descripción del error producido en un registro de facturación. </td><td colspan="2">Alfanumérico(500) </td></tr>
<tr><td colspan="1" rowspan="2"></td><td colspan="1" rowspan="4">RegistroDuplicado </td><td colspan="1">IdPeticionRegistroDupli cado </td><td colspan="2"></td><td colspan="1"></td><td colspan="2">IdPeticion asociado al registro almacenado previamente en el sistema. Solo se suministra si el registro enviado es rechazado por estar duplicado </td><td colspan="2">Alfanumérico(20) </td></tr>
<tr><td colspan="1">EstadoRegistroDuplica do </td><td colspan="2"></td><td colspan="1"></td><td colspan="2"><p>Estado del registro almacenado previamente en el sistema. Los estados posibles son: Correcta, AceptadaConErrores y Anulada. </p><p>￿  Solo se suministra si el registro enviado es rechazado por estar duplicada. </p></td><td colspan="2">Alfanumérico(18) L21 </td></tr>
<tr><td colspan="1"></td><td colspan="1">CodigoErrorRegistro </td><td colspan="2"></td><td colspan="1"></td><td colspan="2" valign="top">Código del error del registro almacenado previamente en el sistema </td><td colspan="2">Alfanumérico(5) L20 </td></tr>
<tr><td colspan="1"></td><td colspan="1">DescripcionErrorRegist ro </td><td colspan="2"></td><td colspan="1"></td><td colspan="2" valign="top">Descripción detallada del error del registro duplicado registrado previamente en el sistema</td><td colspan="2">Alfanumérico(500) </td></tr>
</table>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<a name="_page39_x68.00_y163.32"></a>***6.4.4.1.Mecanismo de control de flujo.***  

Viene especificado en el artículo 16.2 de la orden:  

2\. Los sistemas informáticos «VERI\*FACTU» deberán implementar un mecanismo de control de flujo basado en el tiempo de espera entre envíos, el cual tomará inicialmente el valor de 60 segundos, y en el número máximo de registros admitidos en cada envío. 

Los mensajes de respuesta de la Agencia Estatal de Administración Tributaria informarán sobre el valor de este parámetro, el cual deberá ser tenido en cuenta para el siguiente envío. 

El número máximo de registros a remitir en cada envío queda determinado por el diseño de registro incluido en el apartado 2.2 del anexo. 

El funcionamiento será el siguiente: 

1) El sistema informático realiza el envío del primer conjunto de registros de facturación a la Agencia Estatal de Administración Tributaria. 
1) La Agencia Estatal de Administración Tributaria devuelve, entre otros datos, un valor actualizado del parámetro de tiempo de espera «t» entre envíos. 
1) Para poder realizar el siguiente envío, el sistema informático deberá esperar a que transcurran «t» segundos desde el anterior envío o deberá esperar a tener acumulados un número de registros de facturación igual al límite establecido en el diseño de registro para cada envío, la circunstancia que ocurra primero. 
1) El sistema informático realiza un nuevo envío cumpliendo con lo establecido en la letra c). En la respuesta puede recibir una nueva actualización del valor del parámetro «t». 

Ejemplo de respuesta con el parámetro de tiempo de espera de 60 segundos entre envíos: 

<sf:TiempoEsperaEnvio>60</sf:TiempoEsperaEnvio> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

5. ***Valores<a name="_page40_x68.00_y163.32"></a> permitidos en campos de tipo lista.*** 

<a name="_page40_x68.00_y215.32"></a>**6.5.1.  Alta, anulación y consulta de registros de facturación.** 

Se  recoge  en  el  apartado  6  del  anexo  de  la orden.  Además,  se  encuentra  publicado  en  la sede  electrónica  de  la Agencia  Estatal  de Administración Tributaria en un documento independiente, ubicado en el Portal de Desarrolladores:  

[Enlace al portal de desarrolladores de la AEAT. ](https://www.agenciatributaria.es/AEAT.desarrolladores/Desarrolladores/_menu_/Documentacion/IVA/Sistemas_Informaticos_de_Facturacion_y_Sistemas_VERI_FACTU/Sistemas_Informaticos_de_Facturacion_y_Sistemas_VERI_FACTU.html)

1. **Consulta<a name="_page40_x68.00_y308.32"></a> de registros de facturación.**  L1C → Indicador Representante 



|**VALORES** |**DESCRIPCIÓN** |
| - | - |
|**S** |Sí |

L2C → Periodo



|**VALORES** |**DESCRIPCIÓN** |
| - | - |
|**01**|Enero   |
|**02** |Febrero |
|**03** |Marzo |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|**04** |Abril |
| - | - |
|**05** |Mayo |
|**06** |Junio |
|**07** |Julio |
|**08** |Agosto |
|**09** |Septiembre |
|**10** |Octubre |
|**11** |Noviembre |
|**12** |Diciembre |

2. **Respuesta<a name="_page41_x68.00_y334.32"></a> de alta y anulación de registros de facturación.**  L18→ Estado global del envío (respuesta al envío). 



|**VALORES** |**DESCRIPCIÓN** |
| - | - |
|**Correcto** |Todos los registros de facturación de la remisión tienen estado “Correcto”.|
|**ParcialmenteCorrecto** |Algunos registros de la remisión tienen estado “Incorrecto” o “AceptadoConErrores”. |
|**Incorrecto** |Todos los registros de la remisión tienen estado “Incorrecto”.|

L19→ Estado del envío del registro (respuesta al envío). 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

` `Campo **<EstadoRegistro>** de la respuesta al envío de alta y anulación. Especifica si el registro enviado se valida correctamente y es por tanto admitido y registrado en el sistema.  



|**VALORES** |**DESCRIPCIÓN** |
| - | - |
|**Correcto** |El registro de facturación es totalmente correcto y se registra en el sistema.|
|**AceptadoConErrores** |El registro de facturación tiene errores que no provocan su rechazo. Se registra en el sistema. |
|**Incorrecto** |El registro de facturación tiene errores que provocan su rechazo. No se registra en el sistema. |

L20→ Código de error de registro. 

La lista completa de errores se encuentra en el documento de validaciones. 

L21→ Estado del registro de facturación de la factura  (obtenido como respuesta cuando se rechaza el alta de un registro por duplicado). 

Campo ***<EstadoRegistroDuplicado>*** de la respuesta a un alta cuando el registro se rechaza por duplicado. Especifica el estado del registro almacenado previamente en el sistema. 



|**VALORES** |**DESCRIPCIÓN** |
| - | - |
|**Correcta** |El registro de facturación registrado previamente es correcto.|
|**AceptadaConErrores** |El registro de facturación registrado previamente tiene algunos errores |
|**Anulada** |El registro de facturación registrado previamente ha sido anulado |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



||mediante|` `una operación de anulación |
| :- | - | - |

L22→ Tipo de operación realizada en el registro de facturación 



|**VALORES** |**DESCRIPCIÓN** |
| - | - |
|**Alta** |La operación realizada ha sido un alta |
|**Anulacion** |La operación realizada ha sido una anulación |

6. ***Remisión<a name="_page43_x68.00_y297.32"></a> voluntaria y bajo requerimiento.*** 

En la remisión voluntaria los obligados tributarios remitirán inmediatamente a la Administración tributaria, de forma automática y segura por medios electrónicos, todos los registros de facturación generados en sus sistemas informáticos. 

Bajo requerimiento de la Administración tributaria el obligado tributario suministrará los registros de facturación conservados, mediante medios electrónicos, a la sede electrónica de dicha Administración tributaria. 

Existe un único formato de registro de facturación para remisión voluntaria por parte sistemas que emiten facturas verificables y ante un requerimiento. Por tanto, el esquema XSD es único para los dos casos. 

Aunque el esquema XSD es común, existén URLs diferentes para la remisión voluntaria y ante requerimiento. Además, son distintos sistemas de gestión en la AEAT, sin compartición de los registros de facturación remitidos entre ellos. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

La definición de los servicios web para la remisión voluntaria y ante requerimiento se encuentra en el archivo WSDL en la siguiente dirección: [https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl)

![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.014.jpeg)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

7. ***Tratamiento<a name="_page45_x68.00_y163.32"></a> de cadenas de texto en campos XML*** 

No se recomienda comenzar y/o finalizar con espacios en blanco las cadenas de texto presentes en los registros XML, en cualquier caso, se eliminarán los espacios en blanco al inicio y al final de cada valor. Este proceso se reflejará en la respuesta de las peticiones y se almacenará de esta manera en los sistemas de la AEAT. 

Por ejemplo, si el campo NumSerieFactura contiene la siguiente información: <NumSerieFactura>    12345678 / G33  </NumSerieFactura>  

se almacenará y se responderá con el valor "12345678 / G33". 

8. ***Valores<a name="_page45_x68.00_y313.32"></a> permitidos en campos numéricos.*** 

Para valores numéricos, los ceros por la izquierda no deberán emplearse (por ejemplo, 01 ó 001 ó 01230 serían incorrectos; en su lugar debería ponerse 1, 1 y 1230 respectivamente). Tras el punto de separación decimal, los ceros por la derecha sólo podrán ser usados para indicar la precisión decimal (por ejemplo: 12345.7 es lo mismo que 12345.70; y 12345 es lo mismo que 12345.0 y que 12345.00). 

(Nota: dentro del formato fecha, los campos numéricos que expresen cada uno de los componentes de la misma sí deben llevar ceros por la izquierda hasta completar el número de dígitos requerido, como, por ejemplo: 02-07-2014 (y no 2-7-2014). 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

9. ***Aclaración<a name="_page46_x68.00_y163.32"></a> sobre escapado de caracteres especiales.*** 

En caso de que fuera necesario consignar en un valor de un elemento XML algunos de los siguientes caracteres, se escaparán con las entidades xml siguientes: 



|**Carácter** |**Carácter escapado** |
| - | - |
|& |&amp; |
|< |&lt; |



|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

7. **Anexo<a name="_page47_x68.00_y163.32"></a> I: Definición de servicios y esquemas (entorno de PRUEBAS).** 

` `Contiene la definición de los servicios y esquemas de la versión 1.0. 

1. ***Definición<a name="_page47_x68.00_y264.32"></a> de servicios.*** 

La definición de los servicios (WSDL) se encuentra en la siguiente dirección: 

[https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl ](https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl)

2. ***Esquemas<a name="_page47_x68.00_y367.32"></a> de Entrada*** 

El esquema de los mensajes de entrada definidos se ha incluido en los siguientes archivos: 

- “SuministroInformacion.xsd”. Contiene la definición de tipos comunes:  [https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroInformacion.xsd ](https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroInformacion.xsd)
- “SuministroLR.xsd”. Esquema de las operaciones (Alta y Anulación) establecidos: 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

[https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroLR.xsd ](https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroLR.xsd)

- ConsultaLR.xsd. Esquema de la operación de consulta. [https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/ConsultaLR.xsd ](https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/ConsultaLR.xsd)
3. ***Esquemas<a name="_page48_x68.00_y303.32"></a> de Salida.*** 

El esquema de los mensajes de respuesta definidos se ha incluido en los siguientes archivos: 

- “RespuestaSuministro.xsd”. Esquema de respuesta de las operaciones (Alta y Anulación) establecidos: [https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaSuministro.xsd ](https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaSuministro.xsd)
- RespuestaConsultaLR.xsd. Esquema de respuesta de las operaciones de consulta. [https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaConsultaLR.xsd ](https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaConsultaLR.xsd)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

8. **Anexo<a name="_page49_x68.00_y163.32"></a> I: Definición de servicios y esquemas (entorno de PRODUCCIÓN).** 

` `Contiene la definición de los servicios y esquemas de la versión 1.0. 

1. ***Definición<a name="_page49_x68.00_y264.32"></a> de servicios.*** 

La definición de los servicios (WSDL) se encuentra en la siguiente dirección: 

[https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl)

2. ***Esquemas<a name="_page49_x68.00_y367.32"></a> de Entrada*** 

El esquema de los mensajes de entrada definidos se ha incluido en los siguientes archivos: 

- “SuministroInformacion.xsd”. Contiene la definición de tipos comunes:  [https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroInformacion.xsd ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroInformacion.xsd)
- “SuministroLR.xsd”. Esquema de las operaciones (Alta y Anulación) establecidos: 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

[https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroLR.xsd ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SuministroLR.xsd)

- ConsultaLR.xsd. Esquema de la operación de consulta. [https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/ConsultaLR.xsd ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/ConsultaLR.xsd)
3. ***Esquemas<a name="_page50_x68.00_y283.32"></a> de Salida.*** 

El esquema de los mensajes de respuesta definidos se ha incluido en los siguientes archivos: 

- “RespuestaSuministro.xsd”. Esquema de respuesta de las operaciones (Alta y Anulación) establecidos: [https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaSuministro.xsd ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaSuministro.xsd)
- RespuestaConsultaLR.xsd. Esquema de respuesta de las operaciones de consulta. [https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaConsultaLR.xsd ](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/RespuestaConsultaLR.xsd)

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

9. **Anexo<a name="_page51_x68.00_y163.32"></a> II: Operativa de remisión voluntaria «VERI\*FACTU»** 

En la remisión voluntaria los obligados tributarios remitirán inmediatamente a la Administración tributaria, de forma automática y segura por medios electrónicos, todos los registros de facturación generados en sus sistemas informáticos. 

1. ***Operativa:<a name="_page51_x68.00_y254.32"></a> Alta de un registro de facturación.*** 
1. **Alta<a name="_page51_x68.00_y320.32"></a> inicial (“normal”) del registro de facturación.** 



|**Operación**|**Descripción**|**Operativa**|**Condiciones**|**Consecuencias**|
| - | - | - | - | - |
|ALTA |<p>- Alta inicial ("normal") del registro de facturación.</p><p>- Es el alta habitual de un registro de facturación.</p>|<p>- No informar <Subsanacion> o  informarlo con valor N</p><p>- No  informar <RechazoPrevio> o  informarlo con valor N</p>|El registro de facturación no debe existir previamente en SIF del obligado / AEAT.|Alta del registro de facturación con los nuevos datos.|

En el registro de alta se incluirá la propia huella (según las especificaciones dadas en el documento de huella de la sede electrónica de la AEAT) del registro de facturación. Como siempre, el encadenamiento debe ser con el registro de facturación inmediatamente anterior, por orden cronológico de generación de registros de facturación en el SIF. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<a name="_page52_x68.00_y183.32"></a>***9.1.1.1.Ejemplo mensaje XML de alta inicial (“normal”) del registro de facturación.***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon>                   

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

2. **Subsanación<a name="_page55_x68.00_y163.32"></a> del registro de facturación.** 



|**Operación** |**Descripción** |**Operativa** |**Condiciones** |**Consecuencias** |
| - | - | - | - | - |
|ALTA DE SUBSANACIÓN |<p>- Alta para la subsanación de un registro de facturación ya generado/remitido anteriormente. </p><p>- Es la subsanación habitual de un registro de facturación cuando no se exige la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación). </p>|<p>- <Subsanacion>=S </p><p>- No informar <RechazoPrevio> o informarlo con valor N </p>|El registro de facturación debe existir previamente en SIF del obligado / AEAT. |Con él se deja constancia de los nuevos datos que deben ser tenidos en cuenta. |

Cuando sea necesario subsanar la información que contiene un registro de facturación que ha sido enviado y con estado “Aceptado” o “AceptadoConErrores” por la AEAT, siempre y cuando no se trate de una causa que exija la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación) ni se anule la factura, se deberá generar un nuevo registro (“de subsanación”), con la misma clave de registro original que se quiere subsanar, ya con los datos completos y correctos, que será remitido dentro de un nuevo fichero o mensaje de envío a la AEAT.  

El registro original no se puede modificar, por lo que permanecerá inalterado. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

En el nuevo registro subsanado se incluirá la propia huella (según se indica en el documento de huella) del registro de facturación. Como siempre,  el  encadenamiento  debe  ser  con  el  registro  de  facturación  inmediatamente  anterior  (sea  de  alta  o  de  anulación),  por  orden cronológico de generación de registros de facturación en el SIF. 

<a name="_page56_x68.00_y236.32"></a>***9.1.2.1.Ejemplo mensaje XML de subsanación del registro de facturación.***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:Subsanacion>S</sum1:Subsanacion> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon>                   

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

</soapenv:Envelope>

3. **Alta,<a name="_page59_x68.00_y227.32"></a> tras un rechazo previo del registro de facturación de alta inicial (y que, por tanto, no existe aún en la AEAT).**



|**Operación**|**Descripción**|**Operativa**|**Condiciones**|**Consecuencias**|
| - | - | - | - | - |
|ALTA POR RECHAZO|<p>- Alta por rechazo del registro de facturación de alta inicial (y que, por tanto, no existe aún en la AEAT).</p><p>- Es la subsanación de datos de un registro de facturación de alta inicial, cuando no se exige la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación).</p>|<p>- <Subsanacion>=S</p><p>- <RechazoPrevio>=X</p>|<p>- La clave única del registro de facturación no debe existir previamente en la AEAT.</p><p>- El alta previa del registro de facturación fue rechazada.</p>|Alta del registro de facturación con los nuevos datos.|

Cuando sea necesario subsanar la información de un registro de facturación de alta inicial, que ha sido rechazado (y que, por tanto, no existe aún en la AEAT), siempre y cuando no se trate de una causa que exija la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación) ni se anule la factura, se deberá generar un nuevo registro “de subsanación” de alta inicial por rechazo, ya con los datos completos y correctos, que será enviado a la AEAT. 

El registro original no se puede modificar, por lo que permanecerá inalterado. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

En el nuevo registro subsanado se incluirá la propia huella (según las especificaciones dadas en el documento de huella de la sede electrónica de la AEAT) del registro de facturación. Como siempre, el encadenamiento debe ser con el registro de facturación inmediatamente anterior (sea de alta o de anulación), por orden cronológico de generación de registros de facturación en el SIF. 

<a name="_page60_x68.00_y241.32"></a>***9.1.3.1.Ejemplo mensaje XML de alta, tras un rechazo previo del registro de facturación de alta inicial (y*** 

***que, por tanto, no existe aún en la AEAT).***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:Subsanacion>S</sum1:Subsanacion> 

`               `<sum1:RechazoPrevio>X</sum1:RechazoPrevio> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto> 

`                     `<sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `<sum1:Huella>Huella</sum1:Huella>             </sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope>

2. ***Operativa:<a name="_page63_x68.00_y284.32"></a> Anulación de un registro de facturación.*** 
1. **Anulación<a name="_page63_x68.00_y326.32"></a> del registro de facturación.** 



|**Operación** |**Descripción** |**Operativa** |**Condiciones** |**Consecuencias** |
| - | - | - | - | - |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|ANULACIÓN  |<p>- Anulación de registro de facturación ya generado/remitido. </p><p>- Es la anulación habitual de un registro de facturación cuando no se exige la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación). </p>|<p>- No informar **<SinRegistroPrevio>** o informarlo con valor N </p><p>- No informar **<RechazoPrevio>** o informarlo con valor N </p>|<p>- El registro de facturación debe existir previamente en SIF del obligado / AEAT. </p><p>- El registro a anular puede ser de alta </p><p>o de anulación (en cuyo caso, deja constancia de los nuevos datos a tener en cuenta).  </p>|Anula el registro de facturación registrado dejando los nuevos datos. |
| - | :- | :- | :- | :- |

Cuando se trate de una operación incorrecta (casos excluidos de poder emitir una factura rectificativa u otro mecanismo contemplado en el Reglamento de Facturación), como por ejemplo que se haya expedido una factura por error cuando no ha habido una auténtica venta, deberá realizarse además una ANULACIÓN de la operación original procediendo a generar un registro de facturación de anulación”), con la misma clave de registro original que se quiere anular.  

En el registro de anulación se incluirá la propia huella (según las especificaciones dadas en el documento de huella de la sede electrónica de la AEAT) del registro de facturación. Como cualquier registro de facturación, el registro de anulación irá encadenado al registro de facturación inmediatamente anterior (sea de alta o de anulación), por orden cronológico de generación de registros de facturación en el SIF. 

<a name="_page64_x68.00_y438.32"></a>***9.2.1.1.Ejemplo mensaje XML de anulación del registro de facturación.***  

**Fichero XML de entrada:** 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAnulacion> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFacturaAnulada>AAAA</sum1:IDEmisorFacturaAnulada> 

`                  `<sum1:NumSerieFacturaAnulada>12345</sum1:NumSerieFacturaAnulada> 

`                  `<sum1:FechaExpedicionFacturaAnulada>13-09-2024</sum1:FechaExpedicionFacturaAnulada> 

`               `</sum1:IDFactura> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAnulacion> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope>

2. **Anulación,<a name="_page66_x68.00_y444.32"></a> tras un rechazo previo del registro de facturación de anulación.** 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|**Operación**|**Descripción**|**Operativa**|**Condiciones**|**Consecuencias**|
| - | - | - | - | - |
|ANULACIÓN  POR RECHAZO|· Anulación (tras un rechazo previo) del registro de facturación cuando el registro de facturación que se quiere anular está registrado en la AEAT.|<p>- No informar **<SinRegistroPrevio>** </p><p>o informarlo con valor N</p><p>- **<RechazoPrevio>**=S</p>|<p>- La clave única del registro de facturación debe existir previamente en la AEAT.</p><p>- La anulación previa del registro de facturación fue rechazada.</p>|Anula el registro de facturación registrado dejando los nuevos datos.|

Cuando sea necesario subsanar la información de un registro de facturación de anulación que ha sido rechazado, se deberá generar un nuevo registro “de subsanación de anulación por rechazo”, con la misma clave de registro original que se quiere anular,  ya con los datos correctos, que será remitido dentro de un nuevo fichero o mensaje de envío a la AEAT. 

El registro original de anulación no se puede modificar, por lo que permanecerá inalterado. 

En el nuevo registro de anulación subsanado se incluirá la propia huella (según las especificaciones dadas en el documento de huella de la sede  electrónica  de  la  AEAT)  del  registro  de  facturación.  Como  siempre,  el  encadenamiento  debe  ser  con  el  registro  de  facturación inmediatamente anterior (sea de alta o de anulación), por orden cronológico de generación de registros de facturación en el SIF. 

<a name="_page67_x68.00_y422.32"></a>***9.2.2.1.Ejemplo mensaje XML de anulación, tras un rechazo previo del registro de facturación de*** 

***anulación.***  

**Fichero XML de entrada:** 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAnulacion> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFacturaAnulada>AAAA</sum1:IDEmisorFacturaAnulada> 

`                  `<sum1:NumSerieFacturaAnulada>12345</sum1:NumSerieFacturaAnulada> 

`                  `<sum1:FechaExpedicionFacturaAnulada>13-09-2024</sum1:FechaExpedicionFacturaAnulada> 

`               `</sum1:IDFactura> 

`               `<sum1:RechazoPrevio>S</sum1:RechazoPrevio> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAnulacion> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope>

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

3. **Anulación<a name="_page70_x104.00_y183.32"></a> cuando el registro de facturación que se quiere anular NO está registrado en la AEAT.**  



|**Operación** |**Descripción** |**Operativa** |**Condiciones** |**Consecuencias** |
| - | - | - | - | - |
|ANULACIÓN SIN REGISTRO PREVIO |·Anulación del registro de facturación cuando el registro de facturacion que se quiere anular NO está registrado en la AEAT |<p>- **<SinRegistroPrevio>**=S </p><p>- No informar **<RechazoPrevio>** o informarlo con valor N </p>|·La clave unica del registro de facturación no debe existir previamente en la AEAT. |Alta con estado anulado del registro de facturación con los nuevos datos  |

Cuando sea necesario anular un registro de facturación, pero el registro de facturacion que se quiere anular NO está registrado en la AEAT, se deberá generar un nuevo registro de anulación sin resgistro previo, que será remitido dentro de un nuevo fichero o mensaje de envío a la AEAT.  

Este sería el caso, por ejemplo, cuando el registro previo que se quiere anular no ha sido enviado a la AEAT por no ser un sistema que emite facturas verificables en ese momento. Otro ejemplo sería por haber sido rechazado el registro de alta (por contener errores no admisibles), pero finalmente se determina que se trata de una factura a anular (por darse las circunstancias que así lo permiten) y se remite directamente el correspondiente registro de anulación 

En el registro de anulación se incluirá la propia huella (según las especificaciones dadas en el documento de huella de la sede electrónica de la AEAT) del registro de facturación. Como cualquier registro de facturación, el registro de anulación irá encadenado al registro de facturación inmediatamente anterior (sea de alta o de anulación), por orden cronológico de generación de registros de facturación en el SIF 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<a name="_page71_x68.00_y163.32"></a>***9.2.3.1.Ejemplo mensaje XML de anulación cuando el registro de facturación que se quiere anular NO*** 

***está registrado en la AEAT.***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAnulacion> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFacturaAnulada>AAAA</sum1:IDEmisorFacturaAnulada> 

`                  `<sum1:NumSerieFacturaAnulada>12345</sum1:NumSerieFacturaAnulada> 

`                  `<sum1:FechaExpedicionFacturaAnulada>13-09-2024</sum1:FechaExpedicionFacturaAnulada> 

`               `</sum1:IDFactura> 

`               `<sum1:SinRegistroPrevio>S</sum1:SinRegistroPrevio> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAnulacion> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

3. ***Operativa<a name="_page73_x68.00_y202.32"></a> habitual de remisión agrupada de registros de facturación.***  

<a name="_page73_x68.00_y244.32"></a>**9.3.1.  Ejemplo de mensaje XML que incluye tres registros de facturación (dos registros de facturación de alta y uno de anulación). Fichero XML de entrada con 3 registros de facturación:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-02-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-02-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior44</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<!--You have a CHOICE of the next 2 items at this level--> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-02-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`         `<sum:RegistroFactura> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `<sum1:RegistroAnulacion> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFacturaAnulada>AAAA</sum1:IDEmisorFacturaAnulada> 

`                  `<sum1:NumSerieFacturaAnulada>12311</sum1:NumSerieFacturaAnulada> 

`                  `<sum1:FechaExpedicionFacturaAnulada>13-02-2024</sum1:FechaExpedicionFacturaAnulada> 

`               `</sum1:IDFactura> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-02-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior12345</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-02-13T19:20:40+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `</sum1:RegistroAnulacion> 

`         `</sum:RegistroFactura> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12346</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-02-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto> 

`                     `<sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>12311</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-02-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnteriorAnulacion12311</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<!--You have a CHOICE of the next 2 items at this level--> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-02-13T19:20:50+01:00</sum1:FechaHoraHusoGenRegistro> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `<sum1:TipoHuella>01</sum1:TipoHuella>                <sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope>

10. **Anexo<a name="_page79_x68.00_y278.32"></a> III: Operativa de remisión de registros de facturación para responder a un requerimiento de la AEAT «No VERI\*FACTU».** 

Bajo requerimiento de la Administración tributaria el obligado tributario suministrará los registros de facturación **conservados**, mediante medios electrónicos, a la sede electrónica de dicha Administración tributaria 

Los registros de facturación, enviados bajo el requerimiento de la AEAT, se darán de alta como un registro nuevo en la AEAT, independientemente de si son registros de alta o anulación.  

Las validaciones de negocio de la Administración tributaria no provocarán el rechazo de los registros de facturación. Simplemente se marcarán como errores admisibles para no rechazar los registros de facturación conservados en el sistema del obligado tributario. Las únicas validaciones que provocan el rechazo de la factura son las de identificación de <NIF> o <IdOtro> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

No se deben subsanar los errores relacionados con las validaciones de negocio de los registros enviados, ya que estos registros deben ser los que se han conservado en el sistema del obligado tributario en el momento de su generación. 

En todos los envíos bajo requerimiento se debe suministrar obligatoriamente, en la cabecera, el campo <RefRequerimiento> donde se informa de la referencia del requerimiento de la AEAT.  

En el último envío también se deberá informar, en la cabecera, la finalización de la remisión de registros de facturación del requerimiento marcando el campo <FinRequerimiento> con el valor “S”. Especialmente útil cuando se realice un envío o remisión múltiple para dejar constancia de que se trata del último envío. 

1. ***Operativa:<a name="_page80_x68.00_y339.32"></a> Alta de un registro de facturación.*** 
1. **Alta<a name="_page80_x68.00_y405.32"></a> inicial (“normal”) del registro de facturación.** 



|**Operación** |**Descripción** |**Operativa** |**Consecuencias** |
| - | - | - | - |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|ALTA  |· Alta inicial (“normal”) del registro de facturación. |<p>- No informar **<Subsanacion>** o informarlo con valor N </p><p>&emsp;- No informar **<RechazoPrevio>** o informarlo con valor N </p>|·Alta del registro de facturación con los nuevos datos  |
| - | - | :-: | :- |

En el registro de alta se incluirá la propia huella (según las especificaciones dadas en el documento de huella de la sede electrónica de la AEAT) del registro de facturación. Como siempre, el encadenamiento debe ser con el registro de facturación inmediatamente anterior, por orden cronológico de generación de registros de facturación en el SIF. 

<a name="_page81_x68.00_y310.32"></a>***10.1.1.1.Ejemplo mensaje XML de alta inicial (“normal”) del registro de facturación.***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `</sum1:ObligadoEmision> 

<sum1:RemisionRequerimiento> 

`               `<sum1:RefRequerimiento>XXXXXXXXXXXXXXXXXX</sum1:RefRequerimiento>                            </sum1:RemisionRequerimiento> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto>                      <sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto> 

`                     `<sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon>                   

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope> 

2. **Subsanación<a name="_page84_x68.00_y328.32"></a> del registro de facturación.** 



|**Operación** |**Descripción** |**Operativa** |**Consecuencias** |
| - | - | - | - |
|ALTA DE SUBSANACIÓN |<p>Alta para la subsanación de un registro de facturación ya generado/remitido anteriormente. </p><p>· Es la subsanación habitual de un registro de facturación cuando no se exige la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación). </p>|<p>- **<Subsanacion>** = S </p><p>- No informar **<RechazoPrevio>** o informarlo con valor N </p>|Con él se deja constancia de los nuevos datos que deben ser tenidos en cuenta. |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

En el caso de que se haya realizado una subsanación (si no ha exigido la emisión de una factura rectificativa) de un registro de facturación en el SIF del obligado tributario, se habrá generado un nuevo registro (“de subsanación”), con la misma clave de registro original que se quiere subsanar con los datos completos y correctos. 

Este registro de subsanación **conservado** en el SIF deberá ser enviado, aunque no suponga la modificación del registro original, que permanecerá inalterado.  

En ningún caso se utilizará un registro de subsanación para subsanar los errores relacionados con las validaciones de negocio de los registros enviados, ya que estos registros deben ser los que se han conservado en el sistema del obligado tributario en el momento de su generación. 

<a name="_page85_x68.00_y320.32"></a>***10.1.2.1.Ejemplo mensaje XML de subsanación del registro de facturación.***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

<sum1:RemisionRequerimiento> 

`               `<sum1:RefRequerimiento>XXXXXXXXXXXXXXXXXX</sum1:RefRequerimiento>                            </sum1:RemisionRequerimiento> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAlta> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                  `<sum1:NumSerieFactura>12345</sum1:NumSerieFactura> 

`                  `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`               `</sum1:IDFactura> 

`               `<sum1:NombreRazonEmisor>XXXXX</sum1:NombreRazonEmisor> 

`               `<sum1:Subsanacion>S</sum1:Subsanacion> 

`               `<sum1:TipoFactura>F1</sum1:TipoFactura> 

`               `<sum1:DescripcionOperacion>Descripc</sum1:DescripcionOperacion> 

`               `<sum1:Destinatarios> 

`                  `<sum1:IDDestinatario> 

`                     `<sum1:NombreRazon>YYYY</sum1:NombreRazon> 

`                     `<sum1:NIF>BBBB</sum1:NIF> 

`                  `</sum1:IDDestinatario> 

`               `</sum1:Destinatarios> 

`               `<sum1:Desglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>4</sum1:TipoImpositivo> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                     `<sum1:BaseImponibleOimporteNoSujeto>10</sum1:BaseImponibleOimporteNoSujeto> 

`                     `<sum1:CuotaRepercutida>0.4</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`                  `<sum1:DetalleDesglose> 

`                     `<sum1:ClaveRegimen>01</sum1:ClaveRegimen> 

`                     `<sum1:CalificacionOperacion>S1</sum1:CalificacionOperacion> 

`                     `<sum1:TipoImpositivo>21</sum1:TipoImpositivo> 

`                     `<sum1:BaseImponibleOimporteNoSujeto>100</sum1:BaseImponibleOimporteNoSujeto> 

`                     `<sum1:CuotaRepercutida>21</sum1:CuotaRepercutida> 

`                  `</sum1:DetalleDesglose> 

`               `</sum1:Desglose> 

`               `<sum1:CuotaTotal>21.4</sum1:CuotaTotal> 

`               `<sum1:ImporteTotal>131.4</sum1:ImporteTotal> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon>                   

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAlta> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope>

2. ***Operativa:<a name="_page88_x68.00_y344.32"></a> Anulación de un registro de facturación.*** 

<a name="_page88_x68.00_y386.32"></a>**10.2.1. Anulación del registro de facturación.** 



|**Operación** |**Descripción** |**Operativa** |**Condiciones** |**Consecuencias** |
| - | - | - | - | - |

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |



|ANULACIÓN  |<p>- Anulación de registro de facturación ya generado/remitido. </p><p>- Es la anulación habitual de un registro de facturación cuando no se exige la emisión de una factura rectificativa (u otro mecanismo contemplado en el Reglamento de Facturación). </p>|<p>- No informar **<SinRegistroPrevio>** o informarlo con valor N </p><p>- No informar **<RechazoPrevio>** o informarlo con valor N </p>|<p>· El registro a anular puede ser de alta </p><p>o de anulación (en cuyo caso, deja constancia de los nuevos datos a tener en cuenta).  </p>|Crea un nuevo registro de facturación dejando ambos datos(anulación y alta). |
| - | :- | :- | - | :- |

En el caso de que se haya realizado una anulación (si no ha exigido la emisión de una factura rectificativa) de un registro de facturación en el SIF del obligado tributario, se habrá generado un nuevo registro (“de anulación”), con la misma clave de registro original que se quiere anular.  

Este registro de anulación **conservado** en el SIF deberá ser enviado, aunque no suponga la modificación del registro original, que permanecerá inalterado.  

<a name="_page89_x68.00_y394.32"></a>***10.2.1.1.Ejemplo mensaje XML de anulación del registro de facturación.***  

**Fichero XML de entrada:** 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroL R.xsd" 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

xmlns:sum1="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/Suministro Informacion.xsd" xmlns:xd="http://www.w3.org/2000/09/xmldsig#"> 

`   `<soapenv:Header/> 

`   `<soapenv:Body> 

`      `<sum:RegFactuSistemaFacturacion> 

`         `<sum:Cabecera> 

`            `<sum1:ObligadoEmision> 

`               `<sum1:NombreRazon>XXXXX</sum1:NombreRazon> 

`               `<sum1:NIF>AAAA</sum1:NIF> 

`            `</sum1:ObligadoEmision> 

<sum1:RemisionRequerimiento> 

`               `<sum1:RefRequerimiento>XXXXXXXXXXXXXXXXXX</sum1:RefRequerimiento> 

`            `</sum1:RemisionRequerimiento> 

`         `</sum:Cabecera> 

`         `<sum:RegistroFactura> 

`            `<sum1:RegistroAnulacion> 

`               `<sum1:IDVersion>1.0</sum1:IDVersion> 

`               `<sum1:IDFactura> 

`                  `<sum1:IDEmisorFacturaAnulada>AAAA</sum1:IDEmisorFacturaAnulada> 

`                  `<sum1:NumSerieFacturaAnulada>12345</sum1:NumSerieFacturaAnulada> 

`                  `<sum1:FechaExpedicionFacturaAnulada>13-09-2024</sum1:FechaExpedicionFacturaAnulada> 

`               `</sum1:IDFactura> 

`               `<sum1:Encadenamiento> 

`                  `<sum1:RegistroAnterior> 

`                     `<sum1:IDEmisorFactura>AAAA</sum1:IDEmisorFactura> 

`                     `<sum1:NumSerieFactura>44</sum1:NumSerieFactura> 

`                     `<sum1:FechaExpedicionFactura>13-09-2024</sum1:FechaExpedicionFactura> 

`                     `<sum1:Huella>HuellaRegistroAnterior</sum1:Huella> 

`                  `</sum1:RegistroAnterior> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`               `</sum1:Encadenamiento> 

`               `<sum1:SistemaInformatico> 

`                  `<sum1:NombreRazon>SSSS</sum1:NombreRazon> 

`                  `<sum1:NIF>NNNN</sum1:NIF> 

`                  `<sum1:NombreSistemaInformatico>NombreSistemaInformatico</sum1:NombreSistemaInformatico>                   <sum1:IdSistemaInformatico>77</sum1:IdSistemaInformatico> 

`                  `<sum1:Version>1.0.03</sum1:Version> 

`                  `<sum1:NumeroInstalacion>383</sum1:NumeroInstalacion> 

`                  `<sum1:TipoUsoPosibleSoloVerifactu>N</sum1:TipoUsoPosibleSoloVerifactu> 

`                  `<sum1:TipoUsoPosibleMultiOT>S</sum1:TipoUsoPosibleMultiOT> 

`                  `<sum1:IndicadorMultiplesOT>S</sum1:IndicadorMultiplesOT> 

`               `</sum1:SistemaInformatico> 

`               `<sum1:FechaHoraHusoGenRegistro>2024-09-13T19:20:30+01:00</sum1:FechaHoraHusoGenRegistro>                <sum1:TipoHuella>01</sum1:TipoHuella> 

`               `<sum1:Huella>Huella</sum1:Huella> 

`            `</sum1:RegistroAnulacion> 

`         `</sum:RegistroFactura> 

`      `</sum:RegFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope> 

11. **Anexo<a name="_page91_x68.00_y425.32"></a> IV: Operativa de consulta de información presentada (servicio solo disponible en remisión voluntaria «VERI\*FACTU»)** 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

Consulta de la información presentada por el emisor de la factura. La cosulta la puede realizar tanto el emisor del registro de facturación como el destinatario (servicio solo disponible en remisión voluntaria «VERI\*FACTU»). 

<a name="_page92_x68.00_y222.32"></a>***11.1. Operativa: Consulta del emisor de los registros de facturación para obtener los registros presentados.*** 

1. **Consulta<a name="_page92_x68.00_y280.32"></a> de registros de facturación presentados previamente ordenados por fecha de presentación** 

Consulta de registros de facturación presentados previamente. El servicio responderá con un máximo de 10.000 registros de facturación ordenados por fecha de presentación 

<a name="_page92_x68.00_y371.32"></a>***11.1.1.1.Ejemplo mensaje XML de consulta de registros de facturación presentados previamente.*** 

***Consulta del emisor del registro de facturación.***   

**XML de entrada** 

<?xml version="1.0" encoding="UTF-8"?> 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/ConsultaLR.xsd" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd">    <soapenv:Header/> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`   `<soapenv:Body> 

`      `<con:ConsultaFactuSistemaFacturacion> 

`         `<con:Cabecera> 

`            `<sum:IDVersion>1.0</sum:IDVersion> 

`            `<sum:ObligadoEmision> 

`               `<sum:NombreRazon>EMPRESAXXXX</sum:NombreRazon>                <sum:NIF>XXXXXXXXX</sum:NIF> 

`            `</sum:ObligadoEmision> 

`         `</con:Cabecera> 

`         `<con:FiltroConsulta> 

`            `<con:PeriodoImputacion> 

`               `<sum:Ejercicio>2024</sum:Ejercicio> 

`               `<sum:Periodo>11</sum:Periodo> 

`            `</con:PeriodoImputacion> 

`         `</con:FiltroConsulta> 

`      `</con:ConsultaFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope> 

**XML de respuesta** 

<?xml version="1.0" encoding="UTF-8"?> 

<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"> 

`   `<env:Header/> 

`   `<env:Body Id="Body"> 

`      `<tikLRRC:RespuestaConsultaFactuSistemaFacturacion xmlns:tikLRRC="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/RespuestaConsultaLR.xsd" xmlns:tik="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd"> 

`         `<tikLRRC:Cabecera> 

`            `<tik:IDVersion>1.0</tik:IDVersion> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `<tik:ObligadoEmision> 

`               `<tik:NombreRazon>EMPRESAXXXX</tik:NombreRazon> 

`               `<tik:NIF>XXXXXXXXX</tik:NIF> 

`            `</tik:ObligadoEmision> 

`         `</tikLRRC:Cabecera> 

`         `<tikLRRC:PeriodoImputacion> 

`            `<tikLRRC:Ejercicio>2024</tikLRRC:Ejercicio> 

`            `<tikLRRC:Periodo>11</tikLRRC:Periodo> 

`         `</tikLRRC:PeriodoImputacion> 

`         `<tikLRRC:IndicadorPaginacion>N</tikLRRC:IndicadorPaginacion> 

`         `<tikLRRC:ResultadoConsulta>ConDatos</tikLRRC:ResultadoConsulta> 

`         `<tikLRRC:RegistroRespuestaConsultaFactuSistemaFacturacion> 

`            `<tikLRRC:IDFactura> 

`                  `<tik:IDEmisorFactura>XXXXXXXXX</tik:IDEmisorFactura> 

`                  `<tik:NumSerieFactura>88</tik:NumSerieFactura> 

`                  `<tik:FechaExpedicionFactura>27-11-2024</tik:FechaExpedicionFactura> 

`            `</tikLRRC:IDFactura> 

`            `<tikLRRC:DatosRegistroFacturacion> 

`               `<tikLRRC:TipoFactura>F1</tikLRRC:TipoFactura> 

`               `<tikLRRC:DescripcionOperacion>Servicios de reparación</tikLRRC:DescripcionOperacion>                <tikLRRC:Destinatarios> 

`                  `<tikLRRC:IDDestinatario> 

`                         `<tik:NombreRazon>yyyyyyyyyyyyy</tik:NombreRazon> 

`                         `<tik:NIF>A84532509</tik:NIF> 

`                   `</tikLRRC:IDDestinatario> 

`               `</tikLRRC:Destinatarios> 

`               `<tikLRRC:Cupon>N</tikLRRC:Cupon> 

`                  `<tikLRRC:Desglose> 

`                     `<tik:DetalleDesglose> 

<tik:Impuesto>01</tik:Impuesto> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<tik:ClaveRegimen>01</tik:ClaveRegimen> 

<tik:CalificacionOperacion>S1</tik:CalificacionOperacion> 

`                          `<tik:TipoImpositivo>4</tik:TipoImpositivo> 

`                          `<tik:BaseImponibleOimporteNoSujeto>1044.03</tik:BaseImponibleOimporteNoSujeto> 

`                          `<tik:CuotaRepercutida>41.76</tik:CuotaRepercutida> 

`                     `</tik:DetalleDesglose> 

`                  `</tikLRRC:Desglose> 

`               `<tikLRRC:CuotaTotal>41.76</tikLRRC:CuotaTotal> 

`               `<tikLRRC:ImporteTotal>16976.37</tikLRRC:ImporteTotal> 

`               `<tikLRRC:Encadenamiento> 

`                  `<tikLRRC:RegistroAnterior> 

`                     `<tik:IDEmisorFactura>XXXXXXXXX</tik:IDEmisorFactura> 

`                     `<tik:NumSerieFactura>87</tik:NumSerieFactura> 

`                     `<tik:FechaExpedicionFactura>27-11-2024</tik:FechaExpedicionFactura> 

`                     `<tik:Huella>3C464DAF61ACB827C65FDA19F352A4E3BDC2C640E9E9FC4CC058073F38F12F60</tik:Huella> 

`                  `</tikLRRC:RegistroAnterior> 

`               `</tikLRRC:Encadenamiento> 

`               `<tikLRRC:FechaHoraHusoGenRegistro>2024-11-27T11:54:10+01:00</tikLRRC:FechaHoraHusoGenRegistro> 

`               `<tikLRRC:TipoHuella>01</tikLRRC:TipoHuella> 

`               `<tikLRRC:Huella>DAA7F72EEDC1AE8A294B7A011EC4A1EC2BE0E4DDB79AF3758377F8D61F38FE6B</tikLRRC:Huella>            </tikLRRC:DatosRegistroFacturacion> 

`            `<tikLRRC:DatosPresentacion> 

`               `<tik:NIFPresentador>89890002E</tik:NIFPresentador> 

`               `<tik:TimestampPresentacion>2024-11-13T11:54:10+01:00</tik:TimestampPresentacion> 

`               `<tik:IdPeticion>20241113115410360242</tik:IdPeticion> 

`            `</tikLRRC:DatosPresentacion> 

`            `<tikLRRC:EstadoRegistro> 

`               `<tikLRRC:TimestampUltimaModificacion>2024-11-27T11:54:10+01:00</tikLRRC:TimestampUltimaModificacion> 

`               `<tikLRRC:EstadoRegistro>Correcta</tikLRRC:EstadoRegistro> 

`            `</tikLRRC:EstadoRegistro> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`         `</tikLRRC:RegistroRespuestaConsultaFactuSistemaFacturacion>       </tikLRRC:RespuestaConsultaFactuSistemaFacturacion > 

`   `</env:Body> 

</env:Envelope> 

<a name="_page96_x68.00_y209.32"></a>***11.1.1.2.Ejemplo mensaje XML de consulta de registros de facturación presentados previamente filtrando*** 

***por ejercicio, periodo y NIF de la contraparte. Consulta del emisor del registro de facturación.***   

<?xml version="1.0" encoding="UTF-8"?> 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/ConsultaLR.xsd" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd">    <soapenv:Header/> 

`   `<soapenv:Body> 

`      `<con:ConsultaFactuSistemaFacturacion> 

`         `<con:Cabecera> 

`            `<sum:IDVersion>1.0</sum:IDVersion> 

`            `<sum:ObligadoEmision> 

`               `<sum:NombreRazon>EMPRESAXXXX</sum:NombreRazon> 

`               `<sum:NIF>XXXXXXXXX</sum:NIF> 

`            `</sum:ObligadoEmision> 

`         `</con:Cabecera> 

`         `<con:FiltroConsulta> 

`            `<con:PeriodoImputacion> 

`               `<sum:Ejercicio>2024</sum:Ejercicio> 

`               `<sum:Periodo>11</sum:Periodo> 

`            `</con:PeriodoImputacion> 

<con:Contraparte> 

`               `<sum:NombreRazon>EMPRESAYYYY</sum:NombreRazon> 

`               `<sum:NIF>A84532509</sum:NIF> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `</con:Contraparte> 

`         `</con:FiltroConsulta> 

`      `</con:ConsultaFactuSistemaFacturacion>    </soapenv:Body> 

</soapenv:Envelope> 

<a name="_page97_x68.00_y248.32"></a>***11.1.1.3.Ejemplo mensaje XML de consulta de registros de facturación presentados previamente filtrando*** 

***por ejercicio, periodo y un rago de fecha de expedición. Consulta del emisor del registro de facturación.***   

<?xml version="1.0" encoding="UTF-8"?> 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/ConsultaLR.xsd" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd">    <soapenv:Header/> 

`   `<soapenv:Body> 

`      `<con:ConsultaFactuSistemaFacturacion> 

`         `<con:Cabecera> 

`            `<sum:IDVersion>1.0</sum:IDVersion> 

`            `<sum:ObligadoEmision> 

`               `<sum:NombreRazon>EMPRESAXXXX</sum:NombreRazon> 

`               `<sum:NIF>XXXXXXXXX</sum:NIF> 

`            `</sum:ObligadoEmision> 

`         `</con:Cabecera> 

`         `<con:FiltroConsulta> 

`            `<con:PeriodoImputacion> 

`               `<sum:Ejercicio>2024</sum:Ejercicio> 

`               `<sum:Periodo>11</sum:Periodo> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `</con:PeriodoImputacion> 

<con:FechaExpedicionFactura> 

`     `<sum:RangoFechaExpedicion> 

`                      `<sum:Desde>02-11-2024</sum:Desde>                        <sum:Hasta>13-11-2024</sum:Hasta> 

`      `</sum:RangoFechaExpedicion> 

`            `</con:FechaExpedicionFactura> 

`         `</con:FiltroConsulta> 

`      `</con:ConsultaFactuSistemaFacturacion> 

`   `</soapenv:Body> 

</soapenv:Envelope> 

2. **Consulta<a name="_page98_x68.00_y356.32"></a> del destinatario (cliente) de los registros de facturación para obtener los registros presentados por su proveedor.**  El destinatario del resgistro de facturación puede consultar las facturas presentados por su proveedor. 

Si al realizar una consulta de registros de facturación, se supera el tope de 10.000 registros en la respuesta, habrá que realizar nuevas consultas con la identificación del último registro obtenido (informando el bloque <ClavePaginacion> de la petición) para obtener el resto de regsistros. 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

<a name="_page99_x68.00_y163.32"></a>***11.1.2.1.Ejemplo mensaje XML de consulta paginada de registros de facturación presentados*** 

***previamente. Consulta del destinatario del registro de facturación.***  

**XML de entrada** 

<?xml version="1.0" encoding="UTF-8"?> 

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/ConsultaLR.xsd" xmlns:sum="https://www2.agenciatributaria.gob.es/static\_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd">    <soapenv:Header/> 

`   `<soapenv:Body> 

`      `<con:ConsultaFactuSistemaFacturacion> 

`         `<con:Cabecera> 

`            `<sum:IDVersion>1.0</sum:IDVersion> 

`            `<sum:Destinatario> 

`               `<sum:NombreRazon>EMPRESAXXXX</sum:NombreRazon> 

`               `<sum:NIF>XXXXXXXXX</sum:NIF> 

`            `</sum:Destinatario> 

`         `</con:Cabecera> 

`         `<con:FiltroConsulta> 

`            `<con:PeriodoImputacion> 

`               `<sum:Ejercicio>2024</sum:Ejercicio> 

`               `<sum:Periodo>11</sum:Periodo> 

`            `</con:PeriodoImputacion> 

<con:ClavePaginacion> 

`               `<sum:IDEmisorFactura>XXXXXXXXX</sum:IDEmisorFactura> 

`               `<sum:NumSerieFactura>10000</sum:NumSerieFactura> 

`               `<sum:FechaExpedicionFactura>28-11-2024</sum:FechaExpedicionFactura> 

|**Departamento de Informática Tributaria       Subdirección General Aplicaciones ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.010.png)**|
| :- |
|**Sistemas Informáticos de Facturación** |**Versión: 1.0.3** |

`            `</con:ClavePaginacion> 

`         `</con:FiltroConsulta> 

`      `</con:ConsultaFactuSistemaFacturacion>    </soapenv:Body> 

</soapenv:Envelope> 
Página: 97**/97**** ![](8a7b80f8-fcf3-4b19-97d7-f2f00960f94e_00000.015.png)
