import type { Application } from "express";
import express from "express";

import cors from "cors";
import healthRouter from "./routes/health.js";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);

export default app;
