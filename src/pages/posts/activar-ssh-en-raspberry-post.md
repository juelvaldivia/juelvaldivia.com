---
layout: '@/templates/BasePost.astro'
title: Como activar SSH en una Raspberry Pi
description: Activa el servicio SSH en tu Raspberry Pi para una conexión segura y remota. Aprende cómo habilitarlo y conectarte a tu Raspberry Pi sin necesidad de un monitor o teclado.
pubDate: 2023-05-15T00:00:00Z
imgSrc: '/assets/images/raspberry.webp'
imgAlt: 'Raspberry'
---

SSH (Secure Shell) es un protocolo de red que permite a los usuarios conectarse de forma segura a dispositivos remotos a través de una conexión cifrada. Este protocolo es muy útil para conectarse a una Raspberry Pi, ya que permite acceder al sistema de forma remota sin necesidad de un monitor o un teclado conectados.

Por defecto, el servicio SSH viene desactivado en Raspbian, el sistema operativo más comúnmente utilizado en Raspberry Pi. Pero activarlo es muy fácil.

A continuación, te proporcionamos los pasos que debes seguir:

## Paso 1: Actualiza tu Raspberry Pi

Antes de comenzar, es importante asegurarte de tener la última versión del sistema operativo Raspbian instalado. Para hacerlo, abre una terminal en tu Raspberry Pi y ejecuta los siguientes comandos:

```bash
sudo apt-get update
sudo apt-get upgrade
```

Esto actualizará el sistema operativo a la última versión disponible.

## Paso 2: Habilita el servicio SSH

Una vez que tu Raspberry Pi esté actualizada, necesitas habilitar el servicio SSH. Para hacerlo, abre una terminal y ejecuta el siguiente comando:

```bash
sudo systemctl enable ssh
```

## Paso 3: Inicia el servicio SSH

Una vez que hayas habilitado el servicio SSH, debes iniciarlo. Para ello, ejecuta el siguiente comando:

```bash
sudo systemctl start ssh
```

## Paso 4: Verifica que el servicio SSH esté en ejecución

Para verificar que el servicio SSH esté en ejecución, ejecuta el siguiente comando:

```bash
sudo systemctl status ssh
```

Si todo está funcionando correctamente, verás un mensaje que indica que el servicio está activo y en ejecución.

![alt text](/assets/images/raspberry.webp 'Logo Title Text 1')

## Paso 5: Conéctate a la Raspberry Pi a través de SSH

Ahora que el servicio SSH está habilitado y en ejecución, puedes conectarte a tu Raspberry Pi a través de SSH desde otro dispositivo en la misma red. Para hacerlo, necesitas conocer la dirección IP de la Raspberry Pi.

Puedes obtener tu IP ejecutando el siguiente comando en la terminal:

```bash
$ ifconfig
```

```bash
wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.3.162  netmask 255.255.255.0  broadcast 192.168.3.255
        inet6 fe80::4aa4:e6b9:3bdd:82b6  prefixlen 64  scopeid 0x20<link>
        ether b8:27:eb:b6:f3:a6  txqueuelen 1000  (Ethernet)
        RX packets 3954  bytes 324042 (316.4 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 5265  bytes 755006 (737.3 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

Busca la dirección IP de la Raspberry Pi en la sección “wlan0” o “eth0”, dependiendo de si estás conectado a través de WiFi o Ethernet.

En éste caso nuestra dirección IP es 192.168.3.162 de la Raspberry Pi, abre la terminal en tu otro dispositivo y ejecuta el siguiente comando para conectarte:

```bash
$ ssh usuario@192.168.3.162
```

Reemplaza “usuario” con tu nombre de usuario en la Raspberry asegurate de estar conectado a la misma red.

## Conclusión
Activar el servicio SSH en una Raspberry Pi es muy fácil y te permite conectarte a la Raspberry Pi de forma remota y segura. Con el servicio SSH habilitado, puedes acceder al sistema desde otro dispositivo en la misma red y realizar tareas de administración sin necesidad de un monitor o un teclado conectados a la Raspberry Pi.

Happy Hacking!
