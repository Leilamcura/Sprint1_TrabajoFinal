
/*

Capa de Servicio: Se encarga de contener la lógica de negocio y actúa como intermediario entre el controlador 
y la capa de persistencia. Interactúa con el modelo y la persistencia para filtrar, validar o manipular datos 
antes de pasarlos al controlador.

*/


// Importa la capa de persistencia (repositorio)
import TareaRepository from '../repository/tareaRepository.mjs';
import Tarea from '../models/tarea.mjs'; // Importa el modelo de Tarea

// Instancia el repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

// Servicio para obtener todas las tareas
export function listarTareas() {
    // Obtiene todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas();
}

// Servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
    // Obtiene todas las tareas desde la capa de persistencia
    const tareas = tareaRepo.obtenerTodas();
    // Filtra las tareas completadas
    return tareas.filter(tarea => tarea.completado);
}

// Servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
    // Obtiene todas las tareas desde la capa de persistencia
    const tareas = tareaRepo.obtenerTodas();
    // Filtra las tareas completadas
    return tareas.filter(tarea => tarea.completado);
}

// Servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false) {
    // Obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    // Crea una nueva instancia del modelo Tarea
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
    // Valida que la tarea tenga un título válido
    nuevaTarea.validar();
    // Añade la nueva tarea a la lista de tareas
    tareas.push(nuevaTarea);
    // Guarda la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}

// Servicio para marcar una tarea como completada
export function completarTarea(id) {
    // Obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    // Encuentra la tarea por ID
    const tarea = tareas.find(tarea => tarea.id === id);
    // Si la tarea existe, la marca como completada
    if (tarea) {
        tarea.completar();
        // Guarda los cambios en el archivo
        tareaRepo.guardar(tareas);
    }
}


/**
 * 


Este código está diseñado para manejar la lógica de negocio en una aplicación, interactuando con la capa de persistencia para obtener y manipular datos de tareas.

Importaciones:

TareaRepository: el repositorio que maneja la persistencia de datos.

Tarea: el modelo de datos que representa una tarea.

Instancia del repositorio:

const tareaRepo = new TareaRepository();: crea una instancia del repositorio de tareas para manejar las operaciones de persistencia.

Servicio listarTareas:

Recupera todas las tareas usando el método obtenerTodas() del repositorio.

Retorna el array de todas las tareas.

Servicio listarTareasCompletadas:

Recupera todas las tareas usando el método obtenerTodas() del repositorio.

Filtra las tareas que están completadas (tarea.completado) y retorna solo esas tareas.

Esta capa es clave para mantener la lógica de negocio organizada y separada del controlador, facilitando el mantenimiento y la escalabilidad de la aplicación.
 

Este código define una serie de servicios que gestionan tareas en una aplicación, interactuando con la capa de persistencia para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Aquí te explico cada sección:

Importaciones:

TareaRepository: el repositorio que maneja la persistencia de datos.

Tarea: el modelo de datos que representa una tarea.

Instancia del repositorio:

const tareaRepo = new TareaRepository();: crea una instancia del repositorio de tareas para manejar las operaciones de persistencia.

Servicio listarTareas:

Recupera todas las tareas usando el método obtenerTodas() del repositorio.

Retorna el array de todas las tareas.

Servicio listarTareasCompletadas:

Recupera todas las tareas usando el método obtenerTodas() del repositorio.

Filtra las tareas que están completadas (tarea.completado) y retorna solo esas tareas.

Servicio crearTarea:

Recibe los detalles de la nueva tarea como argumentos (id, título, descripción, completado).

Recupera todas las tareas actuales.

Crea una nueva instancia del modelo Tarea con los detalles proporcionados.

Valida que la nueva tarea tenga un título válido llamando a nuevaTarea.validar().

Añade la nueva tarea a la lista de tareas.

Guarda la lista actualizada de tareas en la capa de persistencia.

Servicio completarTarea:

Recibe el id de la tarea a completar.

Recupera todas las tareas.

Encuentra la tarea que coincide con el id proporcionado.

Si encuentra la tarea, la marca como completada llamando a tarea.completar().

Guarda los cambios en la capa de persistencia.

Este diseño organiza la lógica de negocio en una capa de servicios, separando así las responsabilidades y facilitando el mantenimiento y escalabilidad de la aplicación.
*/



/** 
import TareaRepository from '../persistence/tareaRepository.mjs'

const repository = new TareaRepository();

export function obtenerTareas() {
    return repository.obtenerTodas()
}

export function obtenerTareaPorId(id) {
    const tareas = repository.obtenerTodas();
    return tareas.find(t => t.id === id);
}

export function agregarTarea(datos) {
    const tareas = repository.obtenerTodas();
    const nuevaTarea = {id : tareas.length + 1, ...datos};
    tareas.push(nuevaTarea);
    repository.guardar(tareas);
    return nuevaTarea;
}

export function actulaizarTarea(id, datos) {
    const tareas = repository.obtenerTodas();
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        Object.assign(tarea, datos);
        repository.guardar(tareas);
        return true
    }
    return false;
}

export function eliminarTarea(id) {
    const tareas = repository.obtenerTodas();
    const nuevaLista = tareas.filter(t => t.id === id);
    if (tareas.length !== nuevaLista.length) {
        repository.guardar(nuevaLista);
        return true;
    }
    return false;
}

*/