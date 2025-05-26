import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();        // <-- ADICIONE ESTA LINHA

app.use(express.json()); // middleware para lidar com o corpo da requisição

app.use("/api/products", productRoute);

if(process.env.NODE_ENV === "prduction") {
    
}

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

const startServer = async () => {
    try {
        await connectDB(); // Aguarda conexão com DB
        app.listen(PORT, () => {
            console.log("Servidor rodando na porta", PORT);            
            console.log("Banco de dados conectado com sucesso");
        });
    } catch (error) {
        console.error("Erro ao conectar com o banco:", error);
        process.exit(1); // Encerra o processo se não conseguir conectar
    }
};

startServer()