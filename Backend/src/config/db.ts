import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

function env(key: string, fallback?: string): string {
  const value = process.env[key];

  if (!value && fallback === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value ?? fallback!;
}

const DB_NAME = env("DB_NAME");
const DB_USER = env("DB_USER");
const DB_PASS = env("DB_PASS");
const DB_HOST = env("DB_HOST", "localhost");
const DB_PORT = Number(env("DB_PORT", "3306"));

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: false,
});

export async function connectDB(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log("MySQL conectado correctamente.");
  } catch (error) {
    console.error("Error al conectar a MySQL:", error);
    process.exit(1);
  }
}
