
# Productolisr:
App web desarrollada en Angular que te permite explorar y buscar mangas por nombre y editorial. Esta aplicación consume datos de un servidor JSON simulado utilizando json-server y presenta una interfaz de usuario amigable gracias a Angular Material y PrimeFlex.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [json-server](https://github.com/typicode/json-server)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone git@github.com:danielariosv91/product-app-ng.git
   ```

2. Navega al directorio de la aplicación:

   ```bash
   cd product-app-ng
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

## Uso

### Iniciar el servidor JSON

1. En una terminal, navega al directorio raíz de la aplicación:

   ```bash
   cd product-app-ng
   ```

2. Inicia json-server para simular una API RESTful con los datos de mangas en `db.json`:

   ```bash
   npm run backend
   ```

   Esto iniciará el servidor JSON en `http://localhost:3000/sagas`.

### Iniciar la aplicación Angular

3. En otra terminal, navega al directorio raíz de la aplicación si aún no lo has hecho:

   ```bash
   cd product-app-ng
   ```

4. Inicia la aplicación Angular:

   ```bash
   ng serve
   ```

   Esto iniciará la aplicación Angular en `http://localhost:4200`.

5. Abre tu navegador web y visita `http://localhost:4200` para acceder a MangaShop.

## Características

- Explora una lista de mangas disponibles.
- Busca mangas por nombre y editorial en tiempo real.
- Interfaz de usuario moderna y amigable gracias a Angular Material y PrimeFlex.
- Información detallada de cada manga, incluyendo título, autor y editorial.
