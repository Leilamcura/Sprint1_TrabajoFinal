/*

    Archivo: tarea.mjs (Modelo de Tarea)
    Este archivo define el modelo Tarea, encapsulando tanto los atributos como los 
    métodos necesarios para manipular los datos de una tarea.

*/


export default class Tarea {
    constructor(id, titulo, descripcion, completado = false) {
        this.id = id; // Identificador único de la tarea
        this.titulo = titulo; // Título de la tarea
        this.descripcion = descripcion; // Descripción de la tarea
        this.completado = completado; // Estado de completado, por defecto es false
    }

    // Método para marcar una tarea como completada
    completar() {
        this.completado = true; // Cambia el estado de completado a true
    }

    // Método para validar que el título de la tarea no esté vacío
    validar() {
        if (!this.titulo || this.titulo.trim() === '') {
            throw new Error('El título de la tarea es obligatorio.');
        }
    }
}

/*

Este código define una clase llamada Tarea que se utiliza para modelar una tarea en una aplicación JavaScript.

Constructor de la clase Tarea:

    Se inicializan cuatro propiedades: id, titulo, descripcion y completado (que por defecto es false).
    id es un identificador único de la tarea.
    titulo es el título de la tarea.
    descripcion es una breve descripción de la tarea.
    completado es un indicador booleano que muestra si la tarea está completada (por defecto, es false).

Método completar:

    Este método marca una tarea como completada cambiando el estado de completado a true.

Método validar:

    Este método verifica que el título de la tarea no esté vacío.
    Si el título es nulo o está compuesto únicamente de espacios en blanco, arroja un error indicando que "El título de la tarea es obligatorio."
    Con esta clase, puedes crear tareas, marcarlas como completadas y asegurar que cada tarea tenga un título válido.

*/