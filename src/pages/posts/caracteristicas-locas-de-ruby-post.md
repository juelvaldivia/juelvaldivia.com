---
layout: '@/templates/BasePost.astro'
title: Características más locas de Ruby
description: Descubre las características únicas y sorprendentes de Ruby, desde la filosofía de 'todo es un objeto' hasta la metaprogramación.
pubDate: 2023-07-15T00:00:00Z
imgSrc: '/assets/images/ruby-lang.webp'
imgAlt: 'Ruby'
---

Ruby es un lenguaje de programación que se caracteriza por su sintaxis elegante y su capacidad para expresar ideas complejas de forma concisa. Pero, también tiene algunas características “locas” o inusuales que lo hacen único.

A continuación, te mostraré algunas de las más destacadas, con ejemplos de código que ilustran cada una.

## 1. Todo es un objeto

En Ruby, todo es un objeto, incluso los tipos de datos básicos como los números y las cadenas.

Esto significa que todos los objetos tienen métodos y atributos que se pueden acceder y manipular.

Por ejemplo, puedes hacer lo siguiente:

```ruby
# Crear un objeto de tipo entero
numero = 42

# Llamar al método to_s en el objeto número
puts numero.to_s   # => "42"
```

En este ejemplo, estamos creando un objeto de tipo entero (42) y luego llamando al método to_s en él para convertirlo en una cadena.

## 2. Metaprogramación

Ruby permite la metaprogramación, que es la capacidad de un programa para modificar su propio código en tiempo de ejecución.

Esto significa que puedes escribir código que es capaz de cambiar su propio comportamiento en función de ciertas condiciones.

Por ejemplo, puedes hacer lo siguiente:

```ruby
# Definir una clase dinámicamente
clase = Class.new do
  # Definir un método llamado "saludar"
  define_method :saludar do |nombre|
    puts "Hola, #{nombre}!"
  end
end

# Crear un objeto de la clase dinámica
objeto = clase.new

# Llamar al método "saludar" del objeto
objeto.saludar("Juan")   # => "Hola, Juan!"
```

En este ejemplo, se está definiendo una clase dinámicamente utilizando el método Class.new. Luego, se define un método llamado "saludar" en la clase utilizando el método define_method.

Finalmente, estamos creando un objeto de la clase dinámica y llamando al método "saludar" en él.

## 3. Bloques y closures

Ruby tiene una sintaxis única para trabajar con bloques de código, que son fragmentos de código que pueden ser pasados como argumentos a otras funciones.

Los bloques pueden ser muy útiles para escribir código más conciso y expresivo, y se utilizan comúnmente en Ruby para definir iteradores.

Un ejemplo de ésto puede ser así:

```ruby
# Definir un iterador utilizando un bloque
[1, 2, 3].each do |numero|
  puts numero
end
```

En este ejemplo, estamos utilizando el método each en una matriz de números para iterar sobre cada uno de ellos.

El bloque do...end define el código que se ejecutará en cada iteración.

Ruby también tiene closures, que son bloques que pueden recordar el contexto en el que se crearon y utilizarlo más tarde.

Por ejemplo:

```ruby
# Definir una función que devuelve un bloque
def crear_saludador(saludo)
  # Definir un bloque que utiliza la variable "saludo"
  lambda do |nombre|
    puts "#{saludo}, #{nombre}!"
  end
end
```

En este ejemplo, estamos definiendo una función llamada crear_saludador que devuelve un bloque. El bloque utiliza la variable saludo que se pasó como argumento a la función. Luego, estamos creando un objeto de tipo lambda que representa el bloque y llamándolo con el argumento "Juan".

## 4. Monkey patching

Ruby permite modificar las clases existentes en tiempo de ejecución mediante una técnica llamada “monkey patching”.

Esto puede ser muy útil para extender el comportamiento de las clases existentes, pero también puede ser peligroso si se usa incorrectamente.

Por ejemplo agregar un método a la clas String:

```ruby
# Añadir un método "reverse" a la clase String
class String
  def reverse
    self.split('').reverse().join('')
  end
end

# Llamar al método "reverse" en una cadena
puts "hola".reverse   # => "aloh"
```

En este ejemplo, estamos añadiendo un método llamado “reverse” a la clase String utilizando la sintaxis class String...end. El método simplemente invierte el orden de los caracteres en la cadena.

Luego, estamos llamando al método "reverse" en una cadena.

## 5. Sintaxis flexible

Ruby tiene una sintaxis muy flexible que permite escribir código de varias maneras diferentes.

Esto puede ser muy útil para adaptarse a diferentes estilos de programación y para escribir código más legible.

Por ejemplo:

```ruby
# Definir una función utilizando la sintaxis "def"
def saludar(nombre)
  puts "Hola, #{nombre}!"
end

# Definir una función utilizando la sintaxis "lambda"
saludar = lambda do |nombre|
  puts "Hola, #{nombre}!"
end

# Definir una función utilizando la sintaxis "{}"
saludar = ->(nombre) { puts "Hola, #{nombre}!" }

# Llamar a la función utilizando diferentes sintaxis
saludar("Juan")   # => "Hola, Juan!"
```

En este ejemplo, estamos definiendo una función llamada saludar utilizando tres sintaxis diferentes: def...end, lambda do...end y ->(nombre) { ... }.

Luego, estamos llamando a la función utilizando las tres sintaxis.

## Conclusión

Ruby es un lenguaje de programación que tiene muchas características únicas y “locas”. Desde la capacidad de todo objeto de tener métodos y atributos, pasando por la metaprogramación, bloques y closures, monkey patching y una sintaxis flexible, Ruby es un lenguaje que siempre te sorprende.

Esperamos que estos ejemplos te hayan dado una idea de lo que puedes hacer con Ruby y te hayan inspirado para explorar más a fondo este lenguaje.

Happy Hacking!
