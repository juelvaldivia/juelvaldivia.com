---
layout: '@/templates/BasePost.astro'
title: Crea una API con Node y Express usando Typescript desde 0
description: Aprende a crear una API con Express en TypeScript. Configura el entorno, instala las dependencias, escribe el código.
pubDate: 2024-02-02T00:00:00Z
imgSrc: '/assets/images/express.jpeg'
imgAlt: 'Typescript'
---

Express es uno de los frameworks web más populares para Node.js. Permite crear aplicaciones web de manera sencilla y rápida.
En este tutorial, te trataré de enseñar a crear un servidor Express en TypeScript.

En este tutorial, te guiaré a través del proceso de crear una API básica utilizando Node.js, Express y Typescript. Este proyecto incluirá rutas simples como bienvenida y verificación de que la API funciona.

## Paso 1: Configurar el entorno de trabajo

Antes de comenzar, debemos asegurarnos de tener Node.js y npm instalados en nuestra máquina. Para instalar Node.js y npm, siga las instrucciones en el sitio web oficial de [Node.js](https://nodejs.org/en).

Luego, podemos crear un nuevo directorio para nuestra aplicación y navegar hasta él en la terminal.

Para este tutorial, usaremos el nombre `typescript-express-server`.

```bash
$ mkdir mi-api
$ cd mi-api
```

A continuación, inicializamos un nuevo proyecto Node.js con npm.

```bash
$ npm init -y
```

## Instalar las dependencias

Para crear nuestro servidor Express en TypeScript, necesitamos instalar las siguientes dependencias:
  - `express`: El framework web Express.
  - `@types/express`: Las definiciones de tipos para Express.
  - `typescript`: El compilador TypeScript.
  - `ts-node-dev`: Un intérprete de TypeScript para Node.js modo desarrollo.
  - `@types/node`: Las definiciones de tipos para Node.js.

Ejecute los siguientes comandos en la terminal para instalar estas dependencias:

```bash
$ npm install express dotenv http
$ npm install --save-dev @types/express typescript ts-node-dev @types/node
```

## Crear el archivo de configuración de TypeScript

Antes de comenzar a escribir el código de nuestra aplicación, necesitamos crear un archivo de configuración de TypeScript. Podemos hacerlo ejecutando el siguiente comando en la terminal:

```bash
$ npx tsc --init
```

Esto creará un archivo tsconfig.json en la raíz de nuestro proyecto con la configuración predeterminada de TypeScript.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

## Paso 2: Estructura del Proyecto
Organiza tu proyecto con la siguiente estructura de carpetas y archivos:

```lua
mi-api/
|-- src/
|   |-- api/
|   |   |-- interfaces.ts
|   |   |-- api.ts
|   |   |-- routes/
|   |       |-- healthCheck.ts
|   |       |-- welcome.ts
|-- servers/
|   |-- http.ts
|-- index.ts
|-- .env

```

## Paso 3: Escribir el código de la API

Ahora que hemos configurado nuestro entorno de trabajo y hemos instalado las dependencias necesarias, podemos comenzar a escribir el código de nuestra aplicación.

Vamos a encapsular la lógica del `servidor HTTP` en una clase. Esto nos permite crear múltiples instancias del servidor con diferentes configuraciones y opciones.

A continuación, crearemos una clase `ServerHTTP`:

```ts
// server/http.ts

import * as http from 'http';

export class ServerHTTP {
  private address: string;
  private host: string;
  private port: number;
  private httpServer: http.Server;

  constructor(host: string, port: number, httpServer: http.Server) {
    this.host = host;
    this.port = port;
    this.httpServer = httpServer;
    this.address = `${this.host}:${this.port}`;
  }

  public listen(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.httpServer.listen(this.port, () => {
        console.log(`⚡️[server]: Server is running at ${this.address}`);
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}

```

## Código de nuesta API base

Creamos una interfaz de API
```ts
// src/api/interfaces.ts
import { Server } from 'http';

export interface API {
  createServer(): Server;
}
```

Ahora tendremos que crear una clase que implemente nuestra interfaz API

```ts
// src/api/api.ts
import express from 'express';
import http, { Server } from 'http';

import * as routes from './routes';
import { API } from './interfaces';

export class ExpressApi implements API {
  private router: express.Router;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.router = express.Router();

    this.router.get('/', routes.welcome);
    this.router.get('/health', routes.healthCheck);
    // aqui puedes agregar más rutas
  }

  public createServer = (): Server => {
    const expressApp: express.Application = express();

    expressApp.use('/', this.router);

    return http.createServer(expressApp);
  }
}

```

```ts
// src/api/routes/healthCheck.ts
import { Response, Request } from 'express';

export const healthCheck = (_req: Request, res: Response): Response => {
  return res.json({ status: 'OK' });
};
```

```ts
// src/api/routes/welcome.ts
import { Response, Request } from 'express';

export const welcome = (_req: Request, res: Response): Response => {
  return res.send('Welcome to the API!');
};
```

por último vamos a unir e implementar tanto nuestra API como nuestro servidor HTTP

```ts
// index.ts
import dotenv from 'dotenv';

import { ServerHTTP } from './servers/http';
import { ExpressApi } from './api';
import { API } from './api/interfaces';

dotenv.config();

const host = process.env.SERVER_URL || 'http://localhost';
const port = Number(process.env.PORT || 3000);
const BASE_URL = `${host}:${port}`;

const api: API = new ExpressApi(BASE_URL);
const httpServer = new ServerHTTP(host, port, api.createServer());

try {
  httpServer.listen();
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error starting server: ${error.message}`);
  } else {
    console.error('Unknown error occurred');
  }
}

```

## Paso 6: Compilar y ejecutar la aplicación

Para compilar y ejecutar la aplicación con la nueva clase ExpressServer, podemos usar los mismos comandos que usamos antes.

Primero, compilamos el código TypeScript con el comando tsc.

```bash
$ npx tsc
```

Luego, podemos ejecutar la aplicación con el siguiente comando:

```bash
$ node build/index.js
```

Si todo ha ido bien, deberíamos ver el siguiente mensaje en la consola.

```log
Use express server: App listening on http://localhost:3000
```

## Conclusiones
En este tutorial, hemos aprendido

  1. Crear un servidor HTTP en TypeScript.
  2. Instalar dependencias necesarias
  3. Configurar TypeScript
  4. Crear una clase para encapsular la lógica del servidor Express.
  5. Utilizar la clase ExpressServer en nuestra aplicación
  6. Compilar y ejecutar el código TypeScript.

Aunque este tutorial solo cubre lo básico, el código escrito nos va a servir para reutilizarlo en futuros proyectos.

Espero que haya sido un buen punto de partida para aprender a crear servidores web con Express y TypeScript.

Happy Hacking!
