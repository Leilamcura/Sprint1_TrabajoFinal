/*

Capa de Vista para las Tareas:

    Este archivo define varias funciones que renderizan datos en formato JSON, 
    facilitando la visualización de listas de tareas, mensajes genéricos y tareas específicas.

*/

// Función para renderizar una lista de tareas en formato JSON
export function renderizarListaTareas(tareas) {
    // Formatea el array de tareas en formato JSON con indentación
    return JSON.stringify(tareas, null, 2);
}

// Función para renderizar un mensaje genérico en formato JSON
export function renderizarMensaje(mensaje) {
    // Envuelve un mensaje en formato JSON
    return JSON.stringify({ mensaje }, null, 2);
}

// Función para renderizar una tarea específica en formato JSON
export function renderizarTarea(tarea) {
    // Formatea una tarea individual en formato JSON con indentación
    return JSON.stringify(tarea, null, 2);
}

/* 

Este código está diseñado para manejar la visualización de datos en una aplicación, usando JSON como 
formato para representar listas de tareas, mensajes y tareas específicas.

Función renderizarListaTareas(tareas):
    Toma un array de tareas como argumento.
    Devuelve el array formateado como una cadena JSON con indentación para mejorar la legibilidad.

Función renderizarMensaje(mensaje):
    Toma un mensaje genérico como argumento.
    Envuelve el mensaje en un objeto JSON y lo devuelve como una cadena formateada con indentación.

Función renderizarTarea(tarea):
    Toma una tarea específica como argumento.
    Devuelve la tarea formateada como una cadena JSON con indentación.

Estas funciones son útiles para presentar datos de manera estructurada y legible en una aplicación que maneja tareas.

*/