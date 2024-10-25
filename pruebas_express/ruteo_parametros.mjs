//Ruteo con Parámetros: Maneja rutas que contienen parámetros dinámicos en la URL.

// Aquí se define una ruta que captura un parámetro de la URL (:id). 
// Cuando la solicitud es http://localhost:3000/user/123, el código obtiene el 123 como 
// el id del usuario y lo envía de vuelta en la respuesta.

// Ruta GET con parámetro de ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Esta sección es similar, pero captura dos parámetros: category y id. 
// Con una solicitud como http://localhost:3000/product/electronics/456, el código obtiene 
// electronics como categoría y 456 como el id del producto, y envía esa información de vuelta en la respuesta.

// Ruta GET con múltiples parámetros
// Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params;
    res.send(`Categoría: ${category}, ID del producto: ${id}`);
});


//En resumen, el código permite manejar rutas dinámicas donde los valores en la URL se extraen y se utilizan dentro de la aplicación.