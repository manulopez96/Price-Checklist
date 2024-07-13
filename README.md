# PriceChecklist

Esta es una aplicación de lista de precios desarrollada con React en el frontend y Node.js en el backend.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: `back` (backend) y `front` (frontend).

### Backend (`back`)

El directorio `back` contiene el servidor backend de la aplicación.

-   `index.js`: Archivo principal del servidor Node.js.
-   `package.json`: Archivo de configuración del proyecto Node.js, contiene las dependencias y scripts del backend.
-   `package-lock.json`: Archivo que asegura la instalación de las dependencias en la versión exacta especificada.

En desarrollo todavia.

### Frontend (`front`)

El directorio `front` contiene la aplicación React.

-   `node_modules/`: Directorio que contiene todas las dependencias de Node.js para el frontend.
-   `public/`: Directorio que contiene archivos estáticos públicos.
-   `src/`: Directorio principal del código fuente de React.
    -   `components/`: Contiene los componentes reutilizables de React.
        -   `Error.jsx`: Componente para manejar y mostrar errores.
        -   `FormItem.jsx`: Componente para manejar el formulario de entrada de items.
        -   `Header.jsx`: Componente para el encabezado de la aplicación.
        -   `Main.jsx`: Componente principal que maneja la lógica y el estado de la aplicación.
    -   `routes/`: Contiene las rutas de la aplicación.
        -   `MisRutas.jsx`: Configuración de rutas de la aplicación.
    -   `App.js`: Componente principal de la aplicación React.
    -   `App.css`: Archivo de estilos principales para la aplicación.
-   `package.json`: Archivo de configuración del proyecto Node.js, contiene las dependencias y scripts del frontend.
-   `README.md`: Este archivo.

## Funcionamiento de la Aplicación

La aplicación permite a los usuarios gestionar una lista de items con precios y cantidades. Los usuarios pueden añadir nuevos items, eliminarlos y ver el total acumulado de los precios de los items en la lista.

### Backend

El servidor backend se encarga de manejar las solicitudes de la aplicación frontend y proporcionar la lógica del negocio necesaria. Usa Node.js para crear una API que interactúa con el frontend.

En desarrollo.

### Frontend

La aplicación frontend está construida con React y proporciona una interfaz de usuario para gestionar la lista de precios. Los principales componentes son:

-   `FormItem`: Un formulario que permite a los usuarios añadir nuevos items a la lista.
-   `Main`: El componente principal que contiene la lógica para añadir, eliminar y calcular el total de los items.
-   `Header`: Componente que muestra el encabezado de la aplicación.
-   `Error`: Componente que maneja y muestra mensajes de error.

Las rutas de la aplicación están gestionadas por el componente `MisRutas`.

## Instalación y Ejecución

### Frontend

1. Navega al directorio `front`:
    ```bash
    cd front
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia la aplicación:
    ```bash
    npm start
    ```
4. Abre tu navegador y navega a `http://localhost:3000`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
