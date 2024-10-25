/*

Archivo 2: \TareaRepository.mjs\ (Implementación de Persistencia usando Archivos de Texto)
Este archivo contiene la implementación concreta que utiliza archivos de texto (\tareas.txt\) 
para almacenar y recuperar las tareas. Esta clase extiende la interfaz \TareasDataSource\, 
lo que asegura que cumple con el contrato definido en la interfaz.

*/


import fs from 'fs'; // Importamos el módulo del sistema de archivos de Node.js
import path from 'path'; // Módulo para manejar rutas de archivos

import { fileURLToPath } from 'url'; // Para obtener la ruta del archivo actual
// Importamos la interfaz de persistencia
import TareasDataSource from './TareasDataSource.mjs';
// Importamos el modelo Tarea
import Tarea from '../models/tarea.mjs';

// Obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../tareas.txt');

// Implementación concreta que extiende la interfaz TareasDataSource
export default class TareaRepository extends TareasDataSource {
    constructor() {
        super(); // Llamada al constructor de la clase base
    }
}

// Implementación del método obtenerTodos()
obtenerTodos() {
    try {
        // Leer el archivo de texto en formato UTF-8
        const data = fs.readFileSync(filePath, 'utf-8');
        // Convertir el contenido del archivo en un array de objetos JSON
        const tareas = JSON.parse(data);
        // Convertir cada tarea en una instancia de la clase Tarea
        return tareas.map(tareaData => new Tarea(
            tareaData.id,
            tareaData.titulo,
            tareaData.descripcion,
            tareaData.completado
        ));
    } catch (error) {
        // Si ocurre un error, como que el archivo no exista, devolvemos un array vacío
        console.error('Error al leer el archivo de tareas:', error);
        return [];
    }
}

// Implementación del método guardar()
guardar(tareas) {
    try {
        // Convertimos el array de tareas a una cadena JSON con indentación de 2 espacios
        const data = JSON.stringify(tareas, null, 2);
        // Guardar la cadena JSON en el archivo de texto
        fs.writeFileSync(filePath, data, 'utf-8');
    } catch (error) {
        // Si ocurre un error al guardar los datos, mostramos el error
        console.error('Error al guardar las tareas:', error);
    }
}

// Implementación del método eliminar()
eliminar(id) {
    try {
        const tareas = this.obtenerTodos(); // Obtener todas las tareas existentes
        // Filtrar la tarea por ID
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        this.guardar(tareasActualizadas); // Guardar la lista actualizada
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
    }
}



/**
 * 
 * Este archivo define una clase TareaRepository que extiende la interfaz TareasDataSource para manejar la persistencia de datos de tareas utilizando un archivo de texto (tareas.txt). Aquí te explico cada parte:

Importaciones:

    fs: módulo del sistema de archivos de Node.js, utilizado para leer y escribir archivos.

    path: módulo para manejar y transformar rutas de archivos.

    fileURLToPath: función para obtener la ruta del archivo actual desde una URL.

    TareasDataSource: interfaz de persistencia que la clase TareaRepository debe implementar.

    Tarea: modelo de datos que representa una tarea.

    Obtención de la ruta del archivo:

            const __filename = fileURLToPath(import.meta.url);: obtiene la ruta del archivo actual.

            const __dirname = path.dirname(__filename);: obtiene el directorio del archivo actual.

            const filePath = path.join(__dirname, '../tareas.txt');: construye la ruta completa al archivo tareas.txt.

    Definición de la clase TareaRepository:

        class TareaRepository extends TareasDataSource: declara una clase que extiende TareasDataSource.
        constructor() { super(); }: llama al constructor de la clase base TareasDataSource.

Este diseño asegura que la clase TareaRepository cumple con el contrato definido por TareasDataSource, proporcionando ´
una estructura para implementar métodos concretos para manejar las tareas utilizando un archivo de texto para persistencia

Este código define métodos para manejar la persistencia de tareas utilizando un archivo de texto. Vamos a desglosar cada método:

1- Método obtenerTodos:

    Función: Leer y devolver todas las tareas desde un archivo.

    Proceso:

        Lee el archivo tareas.txt en formato UTF-8.
        Convierte el contenido del archivo de texto en un array de objetos JSON.
        Cada objeto se convierte en una instancia de la clase Tarea.
        Si hay un error (por ejemplo, si el archivo no existe), devuelve un array vacío y muestra el error en la consola.

2- Método guardar:

    Función: Guardar todas las tareas en un archivo de texto.

    Proceso:

        Convierte el array de tareas en una cadena JSON con una indentación de 2 espacios para facilitar la lectura.
        Escribe esta cadena JSON en el archivo tareas.txt.
        Si hay un error durante el guardado, muestra el error en la consola.

3- Método eliminar:

    Función: Eliminar una tarea específica por su ID.

    Proceso:

        Obtiene todas las tareas utilizando el método obtenerTodos().
        Filtra las tareas para excluir la tarea con el ID especificado.
        Guarda la lista actualizada de tareas en el archivo.
        Si hay un error durante el proceso, muestra el error en la consola.

Estos métodos permiten la lectura, escritura y eliminación de tareas en un archivo de texto, proporcionando una manera sencilla de manejar la persistencia de datos en aplicaciones pequeñas.
 */
