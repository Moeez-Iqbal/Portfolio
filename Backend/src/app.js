import "dotenv/config";
import express, { json } from "express"; // Ensure express is imported correctly
import path from 'path';
import cors from "cors";
import { connectDataBase } from "./db/config.js";
import dataBaseInIt from "./db/init.js";
import allRouter from "./router/index.js";

const app = express(); // Use express here

app.use(cors());
const __dirname = path.resolve();

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use(json());

connectDataBase();
console.log(process.env.DB_HOST);

dataBaseInIt().then(() => console.log("Database is synced"));

app.use(allRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
