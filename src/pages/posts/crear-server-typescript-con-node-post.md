---
layout: '@/templates/BasePost.astro'
title: Crea un servidor HTTP con Express y TypeScript
description: Aprende a crear un servidor Express en TypeScript en unos sencillos pasos. Configura el entorno, instala las dependencias, escribe el código.
pubDate: 2023-08-20T00:00:00Z
imgSrc: '/assets/images/express.jpeg'
imgAlt: 'Typescript'
---

Express es uno de los frameworks web más populares para Node.js. Permite crear aplicaciones web de manera sencilla y rápida.

En este tutorial, te trataré de enseñar a crear un servidor Express en TypeScript.

## Paso 1: Configurar el entorno de trabajo

Antes de comenzar, debemos asegurarnos de tener Node.js y npm instalados en nuestra máquina. Para instalar Node.js y npm, siga las instrucciones en el sitio web oficial de [Node.js](https://nodejs.org/en).

Luego, podemos crear un nuevo directorio para nuestra aplicación y navegar hasta él en la terminal.

Para este tutorial, usaremos el nombre `typescript-express-server`.

```bash
$ mkdir typescript-express-server
$ cd typescript-express-server
```

A continuación, inicializamos un nuevo proyecto Node.js con npm.

```bash
$ npm init -y
```

## Paso 2: Instalar las dependencias

Para crear nuestro servidor Express en TypeScript, necesitamos instalar las siguientes dependencias:
  - `express`: El framework web Express.
  - `@types/express`: Las definiciones de tipos para Express.
  - `typescript`: El compilador TypeScript.
  - `ts-node-dev`: Un intérprete de TypeScript para Node.js modo desarrollo.
  - `@types/node`: Las definiciones de tipos para Node.js.

Ejecute los siguientes comandos en la terminal para instalar estas dependencias:

```bash
$ npm install express
$ npm install --save-dev @types/express typescript ts-node-dev @types/node
```

## Paso 3: Crear el archivo de configuración de TypeScript

Antes de comenzar a escribir el código de nuestra aplicación, necesitamos crear un archivo de configuración de TypeScript. Podemos hacerlo ejecutando el siguiente comando en la terminal:

```bash
$ npx tsc --init
```

Esto creará un archivo tsconfig.json en la raíz de nuestro proyecto con la configuración predeterminada de TypeScript.

## Paso 4: Escribir el código de la aplicación

Ahora que hemos configurado nuestro entorno de trabajo y hemos instalado las dependencias necesarias, podemos comenzar a escribir el código de nuestra aplicación.

Para este tutorial, vamos a encapsular la lógica del servidor Express en una clase. Esto nos permite crear múltiples instancias del servidor con diferentes configuraciones y opciones.

A continuación, crearemos una clase `ExpressServer` que implemente la interfaz `Express` y contenga la lógica del servidor Express.

Primero crearemos una carpeta llamada `server` en la raíz de nuestro proyecto y dentro de ella creamos un archivo `server.ts` el cual contrendrá nuestra interfaz con el siguiente código:

```ts
// server/server.ts

import express from 'express';

export interface Express {
  getExpress(): express.Express;
  listen(): void;
  stop(): void;
}
```

Después, creamos un archivo llamado expressServer.ts con el siguiente código:

```ts
// server/expressServer.ts

import * as http from 'http';
import express from 'express';

import { Express } from './server';

class ExpressServer implements Express {
  private express: express.Express;
  private httpServer?: http.Server;
  private host: string;
  private port: number;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;

    this.express = express();
  }

  public getExpress(): express.Express {
    return this.express
  }

  public async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, this.host, () => {
        console.log(
           `Use express server: App listening on ${this.host}:${this.port}`
        );

        return resolve();
      });
    })
  }

  public async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if(this.httpServer) {
        this.httpServer.close(error => {
          if(error) {
            return reject(error);
          }

          return resolve();
        })
      }
    });
  }
}

export default ExpressServer;
```

Este código define una clase `ExpressServer` que implementa la interfaz `Express`. La clase contiene una instancia de Express, un servidor HTTP opcional, un host y un puerto.

El método `getExpress()` devuelve la instancia de Express, el método `getHttpServer()` devuelve el servidor HTTP y el método `listen()` inicia el servidor y devuelve una promesa que se resuelve cuando el servidor está listo para aceptar conexiones.

El método `stop()` detiene el servidor y devuelve una promesa que se resuelve cuando el servidor se ha detenido.

## Paso 5: Usar la clase ExpressServer en la aplicación

Para usar la clase ExpressServer en nuestra aplicación, debemos importarla y crear una instancia en lugar de crear una instancia de Express directamente.

Para hacerlo, podemos crear un archivo `index.ts` en la raiz de nuestro proyecto de la siguiente manera:

```ts
// index.ts

import ExpressServer from './server/expressServer';

const HOST: string = process.env.HOST || 'localhost';
const PORT: number = Number(process.env.POR) || 3000;

const server = new ExpressServer(HOST, PORT);

try {
  server.listen();
} catch (e) {
  console.log(e);
  process.exit(1);
}
```

Este código crea una nueva instancia de `ExpressServer` con el host `localhost` y el puerto `3000` y la inicia llamando al método `listen()`.


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

  1. Crear un servidor Express en TypeScript.
  2. Instalar dependencias necesarias
  3. Configurar TypeScript
  4. Crear una clase para encapsular la lógica del servidor Express.
  5. Utilizar la clase ExpressServer en nuestra aplicación
  6. Compilar y ejecutar el código TypeScript.

Aunque este tutorial solo cubre lo básico, el código escrito nos va a servir para reutilizarlo en futuros proyectos.

Espero que haya sido un buen punto de partida para aprender a crear servidores web con Express y TypeScript.

Happy Hacking!
