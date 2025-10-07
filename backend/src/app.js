import express from "express";
import cookieParser from "cookie-parser";
import { createServer } from "node:http";
import dbConfig from "./configs/database.js";
import logger from "./middlewares/logger.js";
import userRoute from "./routes/authRoute.js";
import cors from 'cors'
const app = express();

const server = createServer(app);
app.use(cors(
 {
   origin: 'http://localhost:3000'
 }
))
app.use(express.json());
app.use(cookieParser());
dbConfig();

app.use(logger);

//routes
app.use("/api/auth", userRoute);
server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
