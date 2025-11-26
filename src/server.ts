import dotenv from "dotenv";
dotenv.config({ path: "./src/.env.local" });
import express, { type Request, type Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
