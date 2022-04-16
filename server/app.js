import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express()

const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '../')

//faz que qualquer arquivo da pasta public fica disponivel diretamente para o cliente
app.use(express.static(path.join(__dirname, 'public')))

app.get('/teach', (request, response) => response.send('Always pass on what you have learned'))

export default app