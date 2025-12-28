import { Router } from 'express';

const router = Router();

// Ruta principal que renderiza una vista
router.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Home',
    mensaje: 'Renderizando vistas con Handlebars 🚀',
  });
});

export default router;