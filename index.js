// server.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/login', authRoutes);
app.use('/weather', weatherRoutes);

// Manejo de errores para rutas no definidas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
