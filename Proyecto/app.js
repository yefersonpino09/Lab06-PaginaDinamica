const express = require('express');
const app = express();

app.set('views', './views');
app.use(express.static('public'));
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/', (req, res) => {
  res.render('inicio.ejs', { 
    nombre: 'Usuario EJS',
    base_de_datos: 'Tengo experiencia en manejo de base de datos relacionales y no relaciones como por ejemplo MongoDB, MySQL, SQL Developer, entre otros. El manejo de estas es intermedio.',
    desing:'El lado por el cual más me inclino es el front end, me gusta diseñar y decorar a mi gusto para de esa manera crear paginas web unicas y atracticas al ojo humano',
    seguridad:'El servicio de seguridad en una aplicación para un portafolio se refiere a las medidas implementadas para proteger la información y los activos del usuario.',
    tecsup: 'assets/img/about/tecsup.jpg',
    unsa: 'assets/img/about/unsa.jpg',
  
  });
});

app.listen(5000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 5000');
  });
  