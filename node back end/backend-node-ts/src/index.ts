import express, { Request, Response } from "express";
import path from "path";
import { engine } from 'express-handlebars';
import viewsRouter from './routes/views.routes';


const app = express();
const PORT = 3000;
//configurar handlebars
app.engine('handlebars', engine()); //le dice a express usa este motor para todos los handlebars
app.set('view engine', 'handlebars');//establece handlebars como motor por defecto, ahorra poner .handlebars
app.set('views', path.join(__dirname, 'views'));//aca decimos donde esta la ruta a las vistas 

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "..", "public")));

// Rutas de vistas
app.use('/handlebars', viewsRouter);

// Todos los endpoints van a ir desde /api/

/**
 * Endpoint raíz que responde con un mensaje JSON
 *
 * GET /api
 *
 * req: Request - Objeto de solicitud de Express
 * res: Response - Objeto de respuesta de Express
 *
 * Respuesta:
 * {
 *   "message": "¡Hola, mundo! Este es un servidor Express con TypeScript. 🚀"
 * }
 */
app.get("/api/info", (req: Request, res: Response) => {
  res.json({
    message: "hola info",
  });
});
app.get("/api", (req: Request, res: Response) => {
  console.log("¡Alguien accedió al endpoint raíz! 🌐");
  res.json({ mensaje: "¡Hola, mundo! Este es un servidor Express con TypeScript. 🚀"});
    "¡Hola, mundo! Este es un servidor Express con TypeScript. 🚀"
  });


app.get("/api/saludo", (req: Request, res: Response) => {
  res.json({ mensaje: "Hola desde la API 🚀" });
});
app.use('/handlebars/about', viewsRouter);

// Iniciar el servidor HTTP
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
});

// https://localhost:3000/   >> ¡Hola, mundo! Este es un servidor Express con TypeScript. 🚀
