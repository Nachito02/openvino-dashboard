import conn from "../config/db";

export const checkAuth = async (req) =>{
    return async (req, res) => {
      // Verificar la autenticación del usuario aquí
      if (!usuarioAutenticado) { // Cambia esto por tu lógica de autenticación real
        res.status(401).json({ error: 'Usuario no autenticado' });
        return;
      }
  
      // Si el usuario está autenticado, ejecutar el controlador original
      return await handler(req, res);
    };
  }
