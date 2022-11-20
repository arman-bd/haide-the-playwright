// Imports
import express, { Request, Response, NextFunction } from "express";
import TaskRouter from "./routers/task";

// Initialize
const app = express();
const port = 8900;

// Home Page
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!");
});

// Health Check
app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
  res.send("PONG at " + new Date());
});

// Tasks Routes
app.use("/task", TaskRouter);

// Launch Server
app.listen(port, () => {
  console.log(`Server Started on : http://localhost:${port}`);
});
