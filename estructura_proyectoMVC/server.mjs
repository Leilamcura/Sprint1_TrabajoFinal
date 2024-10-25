import express from 'express'; // Importamos el framework Express
// Importamos los controladores
import { listarTareasController, listarTareasCompletadasController, crearTareaController, completarTareaController, eliminarTareaController } from './controllers/tareaController.mjs';

const app = express(); // Inicializamos una aplicación de Express
const PORT = 3000; // Definimos el puerto en el que escuchará el servidor

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json());

// Rutas
    // Ruta para obtener todas las tareas
app.get('/tareas', listarTareasController);
    // Ruta para obtener las tareas completadas
app.get('/tareas/completadas', listarTareasCompletadasController);
    // Ruta para crear una nueva tarea
app.post('/tareas', crearTareaController);
    // Ruta para marcar una tarea como completada
app.put('/tareas/:id/completar', completarTareaController);
    // Ruta para eliminar una tarea
app.delete('/tareas/:id', eliminarTareaController);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
Este código configura un servidor básico utilizando Express.js, con varias rutas para manejar tareas. Aquí te explico cada sección:

1- Importación de Módulos y Controladores:

    Se importan los módulos necesarios, incluyendo el framework Express y los controladores que manejan las diferentes operaciones 
    de las tareas.

2- Inicialización de la Aplicación Express:

    const app = express();: Inicializa la aplicación Express.
    const PORT = 3000;: Define el puerto en el que el servidor escuchará las solicitudes (en este caso, el puerto 3000).

3- Middleware:

    app.use(express.json());: Configura el middleware para permitir el manejo de solicitudes con cuerpo en formato JSON. 
    Esto es esencial para que el servidor pueda interpretar y trabajar con los datos enviados en formato JSON en 
    el cuerpo de las solicitudes.

4- Definición de Rutas:

    app.get('/tareas', listarTareasController);: Define una ruta GET para obtener todas las tareas.
    app.get('/tareas/completadas', listarTareasCompletadasController);: Define una ruta GET para obtener solo las tareas completadas.
    app.post('/tareas', crearTareaController);: Define una ruta POST para crear una nueva tarea.
    app.put('/tareas/:id/completar', completarTareaController);: Define una ruta PUT para marcar una tarea como completada, utilizando 
    el parámetro :id para especificar la tarea.
    app.delete('/tareas/:id', eliminarTareaController);: Define una ruta DELETE para eliminar una tarea específica por su id.

5-  Inicio del Servidor:
    app.listen(PORT, () => { console.log('Servidor corriendo en http://localhost:${PORT}'); });: Inicia el servidor y lo hace escuchar 
    en el puerto especificado (3000). También imprime un mensaje en la consola indicando que el servidor está corriendo y proporciona 
    la URL en la que se puede acceder.

Este código es un ejemplo de cómo configurar un servidor RESTful para manejar tareas, incluyendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Express.js.
*/