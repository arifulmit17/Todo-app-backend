import dotenv from "dotenv";
dotenv.config({ path: "./src/.env.local" });
import express, { type Request, type Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";  // <-- you forgot this

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Mount your auth routes
app.use("/user", authRoutes);  // <-- and this
app.use("/user", authRoutes);  // <-- and this

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
