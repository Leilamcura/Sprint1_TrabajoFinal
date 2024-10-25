/* 

    El Controlador es el intermediario entre el modelo, la vista y las solicitudes del usuario. 
    Su función es recibir las solicitudes HTTP, interactuar con la capa de servicio para procesar los datos, 
    y enviar la respuesta utilizando la vista. La lógica de negocio no debe estar en el controlador, sino en la capa de servicio

*/

import { listarTareas, listarTareasCompletadas, crearTarea, completarTarea, eliminarTarea } from '../services/tareaService.mjs';
import { renderizarListaTareas, renderizarMensaje } from '../views/tareaVista.mjs';

// Controlador para listar todas las tareas
export function listarTareasController(req, res) {
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

// Controlador para listar solo las tareas completadas
export function listarTareasCompletadasController(req, res) {
    const tareasCompletadas = listarTareasCompletadas();
    res.send(renderizarListaTareas(tareasCompletadas));
}

// Controlador para crear una nueva tarea
export function crearTareaController(req, res) {
    const { id, titulo, descripcion, completado } = req.body;
    crearTarea(id, titulo, descripcion, completado);
    res.send(renderizarMensaje('Tarea creada con éxito'));
}

// Controlador para marcar una tarea como completada
export function completarTareaController(req, res) {
    const { id } = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea marcada como completada'));
}

// Controlador para eliminar una tarea
export function eliminarTareaController(req, res) {
    const { id } = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea eliminada con éxito'));
}

/*

Este código define una serie de controladores para gestionar tareas en una aplicación. Vamos a ver lo que hace cada uno:

Controlador para listar todas las tareas:
    Utiliza la función listarTareas para obtener todas las tareas.
    Luego, usa renderizarListaTareas para convertir esas tareas en una cadena JSON formateada y la envía como respuesta.

Controlador para listar solo las tareas completadas:
    Utiliza la función listarTareasCompletadas para obtener solo las tareas que están completadas.
    Usa renderizarListaTareas para convertir esas tareas completadas en una cadena JSON formateada y la envía como respuesta.

Controlador para crear una nueva tarea:
    Extrae los datos de la nueva tarea del cuerpo de la solicitud (req.body).
    Usa la función crearTarea para añadir la nueva tarea.
    Envía un mensaje de éxito formateado con renderizarMensaje.

Controlador para marcar una tarea como completada:
    Extrae el id de la tarea de los parámetros de la solicitud (req.params).
    Convierte el id a un número entero y usa la función completarTarea para marcar la tarea como completada.
    Envía un mensaje de éxito formateado con renderizarMensaje.

Controlador para eliminar una tarea:
    Extrae el id de la tarea de los parámetros de la solicitud (req.params).
    Convierte el id a un número entero y usa la función eliminarTarea para eliminar la tarea.
    Envía un mensaje de éxito formateado con renderizarMensaje.

En resumen, estos controladores interactúan con los servicios y las vistas para manejar tareas en una aplicación, proporcionando respuestas adecuadas según la acción realizada. Si tienes más preguntas o necesitas algo más, aquí estoy.

*/



































/*

import {obtenerTareas, obtenerTareaPorId, agregarTarea, actulaizarTarea, eliminarTarea}
from '../services/tareaService.mjs';

import {renderizarListaTarea, renderizarTarea} from '../views/tareaView.mjs';


export function obtenerTodasLasTareas(req, res) {
    const tareas = obtenerTareas();
    res.send(renderizarListaTarea(tareas));
}


export function obtenerTareaPorIdController(req, res) {
    const {id} = req.params;
    const tarea = obtenerTareaPorId(parseInt(id));

    if (tarea){
       res.send(renderizarTarea(tarea));
    }
    else {
        res.status(404).send({mensaje: "Tarea no encontrada"});
    }
}

export function agregarNuevaTarea(req, res) {
    const datos = req.body;
    const nuevaTarea = agregarTarea(datos);
    res.send(nuevaTarea);
}

export function actualizarTareaPorId(req, res) {
    const {id} = req.params;
    const datos = req.body;
    const resultado = actulaizarTarea(parseInt(id), datos);
    res.send(resultado ? 'Tarea actualizada' : 'Tarea no encontrada');
}

export function eliminarTareaPorId(req, res) {
    const {id} = req.params;
    const resultado = eliminarTarea(parseInt(id));
    res.send(resultado ? 'Tarea Eliminada' : 'Tarea no Encontrada');
}
*/