
const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// Mostrar el formulario
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "formulario.html"));
});

// Recibir los datos mediante GET
app.get("/registro-get", (req, res) => {

    // Recuperar los datos enviados desde el formulario
    const nombre = req.query.nombre;
    const apellido = req.query.apellido;
    const edad = req.query.edad;
    const correo = req.query.correo;
    const programa = req.query.programa;

    // Mostrar los datos en el navegador
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Resultado GET</title>
        </head>
        <body>

            <h1>Datos recibidos correctamente</h1>

            <h2>Método utilizado: GET</h2>

            <p><strong>Nombre:</strong> ${nombre || "No proporcionado"}</p>
            <p><strong>Apellido:</strong> ${apellido || "No proporcionado"}</p>
            <p><strong>Edad:</strong> ${edad || "No proporcionada"}</p>
            <p><strong>Correo:</strong> ${correo || "No proporcionado"}</p>
            <p><strong>Programa académico:</strong> ${programa || "No proporcionado"}</p>

            <br>

            <a href="/">Regresar al formulario</a>

        </body>
        </html>
    `);
});

app.post("/registro-post", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const correo = req.body.correo;
    const programa = req.body.programa;

    res.send(`
        <h1>Datos recibidos correctamente</h1>

        <h2>Información del usuario</h2>

        <p><strong>Nombre:</strong> ${nombre || "No proporcionado"}</p>
        <p><strong>Apellido:</strong> ${apellido || "No proporcionado"}</p>
        <p><strong>Edad:</strong> ${edad || "No proporcionada"}</p>
        <p><strong>Correo:</strong> ${correo || "No proporcionado"}</p>
        <p><strong>Programa académico:</strong> ${programa || "No proporcionado"}</p>

        <p><strong>Método utilizado:</strong> POST</p>

        <a href="/">Volver al formulario</a>
    `);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
