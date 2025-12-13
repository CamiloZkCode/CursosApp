import app from "./app.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
  });
}

start();
