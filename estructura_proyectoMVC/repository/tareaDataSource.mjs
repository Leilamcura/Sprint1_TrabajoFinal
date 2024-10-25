

// Definimos una clase abstracta que actúa como interfaz para la persistencia de datos
export default class TareasDataSource {

    // Método abstracto para obtener todas las tareas
    obtenerTodas() {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    // Método abstracto para guardar todas las tareas
    guardar(tareas) {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    // Método abstracto para eliminar una tarea por su ID
    eliminar(id) {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}

/**
 * 
 * Este código define una clase abstracta llamada TareasDataSource que actúa como una interfaz para la persistencia de datos. Vamos a desglosar lo que hace cada parte del código:

Clase abstracta:

    La clase TareasDataSource es abstracta, lo que significa que no se debe instanciar directamente. 
    En cambio, se utiliza como base para que otras clases hereden e implementen sus métodos.

Método obtenerTodas:

    Este método está definido pero no implementado. Arroja un error con el mensaje "Este método debe 
    ser implementado por la subclase". Las subclases deben proporcionar una implementación concreta de 
    este método para obtener todas las tareas.

Método guardar:

    Similar al anterior, este método arroja un error indicando que debe ser implementado por la subclase. 
    Las subclases deben definir cómo se guardan las tareas.

Método eliminar:

    Este método también es abstracto y debe ser implementado por las subclases. Define cómo se elimina una tarea por su ID.

En resumen, esta clase establece una interfaz que las subclases deben seguir, asegurando que ciertos métodos clave estén presentes y sean implementados según las necesidades específicas de cada subclase.
 */