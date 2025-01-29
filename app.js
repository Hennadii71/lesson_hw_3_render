import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactsRouter from "./routes/api/contacts-router.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
