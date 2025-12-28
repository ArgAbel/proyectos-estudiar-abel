import { Router } from 'express';

const router = Router();

// Ruta principal que renderiza una vista
router.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Home',
    mensaje: 'Renderizando vistas con Handlebars 🚀',
  });
});
router.get('/about', (req, res) => {
  res.render('about', {
    titulo: 'About',
    mensaje: 'Esta es la página About 🚀',
  });
});
export default router;