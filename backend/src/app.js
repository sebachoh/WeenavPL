import "dotenv/config";
import express from "express";
import { PORT } from "./config.js";
import usersRoutes from "./routes/users.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(usersRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});