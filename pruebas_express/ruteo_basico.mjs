// Ruta GET para el home
// Solicitud: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Página de inicio');
  });
  
  // Ruta GET para recibir datos simples
  // Solicitud: http://localhost:3000/data
  app.get('/data', (req, res) => {
    res.send('Datos recibidos');
  });
  

// Este código agrega dos rutas GET en un servidor Express. 
// La primera responde con "Página de inicio" en la ruta raíz (/), 
// y la segunda responde con "Datos recibidos" en la ruta /data.
