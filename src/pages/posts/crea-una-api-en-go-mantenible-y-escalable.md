---
layout: '@/templates/BasePost.astro'
title: Construye una API en Go mantenible y escalable desde 0
description: Aprende a construir una API en Go siguiendo las mejores prácticas. Desde la configuración del servidor hasta la implementación de rutas.
pubDate: 2023-12-01T10:00:00Z
imgSrc: '/assets/images/go.webp'
imgAlt: 'Typescript'
---

## Publicaciones Relacionadas:
[Explorando la Programación en Go, Más Allá de la Orientación a Objetos](/posts/explorando-el-lenguaje-go-de-google/)

Go, un lenguaje que destaca por su simplicidad y eficiencia. En esta guía, aprenderemos a construir una API siguiendo las mejores prácticas de diseño y modularidad, haciendo uso del poderoso paquete [Chi](https://go-chi.io/#/) para gestionar nuestras rutas.

## Iniciar el proyecto en Go

```bash
$ go mod init goexample
```

## Estructura del Proyecto
La organización del proyecto es crucial para mantener el código limpio y fácil de mantener. Aquí hay una sugerencia para la estructura del proyecto:

```go
goexample
│
├── server
│   └── server.go
│
├── api
│   ├── responses
│       └── json.go
│   ├── api.go
│   ├── welcome.go
│
└── main.go

```

## Regla de Vida: No Generar Dependencias
Para cumplir con esta regla y mantener un código ordenado, separaremos las entidades involucradas en este ejercicio: `SERVER` y `API` no deben conocerse entre sí.


## Creando el Servidor HTTP en Go
Comencemos creando la responsabilidad del servidor HTTP: levantar un servidor en un puerto específico y recibir un HTTP handler.

Creamos nuestra clase `ServerHTTP` en Go:

```go
// server/sever.go
package server

import (
	"fmt"
	"net/http"
)

type ServerHTTP struct {
	Port   int
	Router http.Handler
}

func NewServerHTTP(port int, router http.Handler) *ServerHTTP {
	return &ServerHTTP{
		Port:   port,
		Router: router,
	}
}

func (server *ServerHTTP) Listen() error {
	port := fmt.Sprintf(":%d", server.Port)
	fmt.Printf("Server listening on %s\n", port)

	return http.ListenAndServe(port, server.Router)
}

```

## Creando la API con Chi

Ahora, pasemos a la creación de la API en Go utilizando la biblioteca [Chi](https://go-chi.io/#/).

Instala el package de Chi con el siguiente comando

```bash
$ go get github.com/go-chi/chi/v5
```

Creamos nuestra clase API con la capacidad de registrar rutas y responder en formato [JSON](https://www.json.org/json-es.html):

```go
// api/api.go
package api

import (
	chi "github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type API struct {
	Router chi.Router
}

func New() *API {
	router := chi.NewRouter()
	router.Use(middleware.RequestID)
	router.Use(middleware.RealIP)
	router.Use(middleware.Logger)
	router.Use(middleware.Recoverer)

	api := &API{
		Router: router,
	}

	// Registra las rutas de la API
	router.Get("/", api.Welcome)

	return api
}
```

## Respuestas en JSON
Las APIs comúnmente utilizan el formato [JSON](https://www.json.org/json-es.html). Crearemos un paquete para manejar las respuestas en JSON de manera consistente:

```go
// api/responses/json.go
package responses

import (
	"encoding/json"
	"net/http"
)

func Json(response http.ResponseWriter, statusCode int, data interface{}) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(statusCode)

	if data != nil {
		if err := json.NewEncoder(response).Encode(data); err != nil {
			http.Error(response, "Server unexpected error", http.StatusInternalServerError)
			return
		}
	}
}

```

## Bienvenido a tu API
Añadamos una funcionalidad sencilla para dar la bienvenida en nuestra API:

```go
// api/wecome.go
package api

import (
	"goexample/api/responses"
	"net/http"
)

func (api *API) Welcome(response http.ResponseWriter, request *http.Request) {
	welcome := map[string]string{"message": "Welcome to API"}

	responses.Json(response, http.StatusOK, welcome)
}

```

## Punto de Entrada
Finalmente, nuestro archivo `main.go` sirve como el punto de entrada de nuestra aplicación. Configuramos el servidor y creamos una instancia de nuestra API:

```go
// main.go
package main

import (
	"fmt"
	"goexample/api"
	"goexample/server"
)

func main() {
	// Crear una instancia de la API
	api := api.New()

	// Crear una instancia del servidor
	httpServer := server.NewServerHTTP(8080, api.Router)

	// Iniciar el servidor
	serverError := httpServer.Listen()

	if serverError != nil {
		fmt.Printf("Error starting server: %v\n", err)
		panic(err)
	}
}

```

## Ejecuta la aplicación

Es momento de la verdad, ahora ejecuta la aplicación de Go con éste comando

```bash
$ go run main.go
```

y si todo sale bien, deberías de ver el siguiente mensaje en tu consola

```bash
➜  goexample go run main.go
Server listening on :8080
```

Para comprobar si se está ejecutando tu aplicación puedes ejecutar el siguiente comando

```bash
➜  ~ curl http://localhost:8080
{"message":"Welcome to API"}
```
o bien ve a tu navegador favorito (Chrome, Safari) y escribe [http://localhost:8080](http://localhost:8080)
deberías ver el mensaje `{"message":"Welcome to API"}`

Este es solo un punto de partida, y a medida que el proyecto evolucione, podrías necesitar ajustar la estructura según tus necesidades.

Happy Hacking!
## Publicaciones Relacionadas:
[Explorando la Programación en Go, Más Allá de la Orientación a Objetos](/posts/explorando-el-lenguaje-go-de-google/)
