# Prueba Tecnica Beclever

## API REST para Registro de Empleados 📝

> > Este repositorio contiene la implementación de una API REST desarrollada como parte de la prueba técnica solicitada durante mi proceso de postulación para el puesto en la empresa Beclever.

---

![This is an alt text.](https://cessi.org.ar/wp-content/uploads/2022/03/beclever.jpg "Logo de la empresa Be Clever.")

**Descripción**

> > La API se ha diseñado para gestionar el registro de empleados en tres sucursales específicas. Permite realizar operaciones de creación y consulta de registros de empleados, interactuando con una base de datos subyacente.

**Características Principales**

- **Registro de Empleados**: La API permite agregar nuevos registros de empleados, capturando información relevante como nombre, apellido, género, etc.

- **Consulta de Registros**: Proporciona endpoints para recuperar información detallada sobre los empleados registrados, filtrados por sucursal, fecha.

- **Conexión a Base de Datos**: La API se conecta eficientemente a una base de datos para almacenar y recuperar la información de los empleados.

  **Estructura del Repositorio**

```
└── 📁beCleverPruebaTecnica
    └── .dockerignore
    └── .env.example
    └── Dockerfile
    └── package.json
    └── README.md
    └── 📁src
        └── 📁controllers
            └── c_register.js
            └── c_search.js
            └── c_users.js
        └── 📁db
            └── connection.js
        └── 📁docs
            └── Beclever-test.postman_collection.json
            └── beclever.sql
        └── index.js
        └── openapi.json
        └── 📁utils
            └── config.js
            └── validate.js
```

- **/src:** Contiene el código fuente de la API.

- **/docs:** Documentación adicional.

- **/routes:** Contiene todas las rutas y endpoints que puede utilizar.
- **/controller:** Contiene los controladores con el respectivo codigo y algoritmo para resolver la implementación solicitada desde las rutas.
- **/db:** Toda la implementación para conectar con la base de datos*.

**Base de datos:*
> > Se ah utilizado para este proyecto una base de datos relacional utilizando el motor de MySQL.

  **Instrucciones de Uso**

1. Configuración de la base de datos:
    * Iniciar script ubicado en src/docs/beclever.sql
    * Ubicar el archivo en src/db/connection.js y modificar las variables en el caso de que fuese necesario.
    
```
└── 📁beCleverPruebaTecnica
       └── 📁src
        └── 📁db
            └── connection.js
        └── 📁docs
            └── Beclever-test.postman_collection.json
            └── beclever.sql
```

2. Clonación del Repositorio:

<pre>
git clone https://github.com/federicojaime/beCleverPruebaTecnica.git
</pre>

2. Instalación de Dependencias:

<pre>cd beCleverPruebaTecnica
npm install</pre>

3. Ejecución de la API:

<pre>npm start</pre>

5. Documentación Adicional:

- Revise la documentación en /api-docs para obtener información detallada sobre los endpoints disponibles y ejemplos de solicitudes.

**Notas Adicionales**

> > Esta API se ha desarrollado en cumplimiento con los requisitos y especificaciones proporcionados en la prueba técnica de BeClever. Agradezco la oportunidad de participar en este proceso y estoy disponible para cualquier aclaración o pregunta adicional.

**Autor:** [Federico Jaime](https://www.linkedin.com/in/federicojaime/)

**Fecha:** 05/12/2023
