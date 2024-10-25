// Ruteo con Consultas: Maneja rutas que utilizan parámetros de consulta en la URL.

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultados de búsqueda para: ${query}`);
});

// Ruta GET con múltiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`Filtrar por tipo: ${type}, 
              rango de precios: ${minPrice} - ${maxPrice}`);
});

/* El código muestra cómo manejar rutas en una aplicación Express.js que utilizan parámetros de consulta en la URL.

Ruta GET con parámetro de consulta:

    La ruta /search recibe una solicitud GET.
    La URL de la solicitud incluye un parámetro de consulta q (por ejemplo, http://localhost:3000/search?q=javascript).
    El valor del parámetro q se obtiene mediante req.query.q.
    La respuesta enviada al cliente incluye el texto "Resultados de búsqueda para: " seguido del valor del parámetro q.

Ruta GET con múltiples parámetros de consulta:

    La ruta /filter recibe una solicitud GET.
    La URL de la solicitud incluye múltiples parámetros de consulta: type, minPrice, y maxPrice 
    (por ejemplo, http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50).
    Los valores de los parámetros type, minPrice, y maxPrice se obtienen mediante req.query.
    La respuesta enviada al cliente incluye el texto "Filtrar por tipo: " seguido del valor del parámetro type, 
    y "rango de precios: " seguido de los valores de minPrice y maxPrice.

    */