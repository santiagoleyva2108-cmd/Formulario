
const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// Mostrar el formulario
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "formulario.html"));
});

function mostrarResultado(req, res, metodo, datos) {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado del registro</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f1f5f9;
                    margin: 0;
                    padding: 40px 20px;
                }

                .tarjeta {
                    background: white;
                    max-width: 550px;
                    margin: auto;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                }

                h1 {
                    color: #16a34a;
                    text-align: center;
                }

                .metodo {
                    text-align: center;
                    background: #dbeafe;
                    color: #1d4ed8;
                    padding: 10px;
                    border-radius: 8px;
                    font-weight: bold;
                }

                .dato {
                    background: #f8fafc;
                    padding: 12px;
                    margin: 10px 0;
                    border-radius: 8px;
                }

                .dato strong {
                    display: block;
                    color: #64748b;
                    margin-bottom: 5px;
                }

                a {
                    display: block;
                    text-align: center;
                    background: #2563eb;
                    color: white;
                    padding: 12px;
                    border-radius: 8px;
                    text-decoration: none;
                    margin-top: 20px;
                }

                a:hover {
                    background: #1d4ed8;
                }
            </style>
        </head>

        <body>
            <div class="tarjeta">
                <h1>✓ Registro recibido</h1>

                <p class="metodo">Método utilizado: ${metodo}</p>

                <div class="dato">
                    <strong>Nombre</strong>
                    ${datos.nombre || "No proporcionado"}
                </div>

                <div class="dato">
                    <strong>Apellido</strong>
                    ${datos.apellido || "No proporcionado"}
                </div>

                <div class="dato">
                    <strong>Edad</strong>
                    ${datos.edad || "No proporcionada"}
                </div>

                <div class="dato">
                    <strong>Correo electrónico</strong>
                    ${datos.correo || "No proporcionado"}
                </div>

                <div class="dato">
                    <strong>Programa académico</strong>
                    ${datos.programa || "No proporcionado"}
                </div>

                <a href="/">Volver al formulario</a>
            </div>
        </body>
        </html>
    `);
}

// Recibir los datos mediante GET
app.get("/registro-get", (req, res) => {
    mostrarResultado(req, res, "GET", req.query);
});

// Recibir los datos mediante 
app.post("/registro-post", (req, res) => {
    mostrarResultado(req, res, "POST", req.body);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
