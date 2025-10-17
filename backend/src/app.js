import express from "express";
import cookieParser from "cookie-parser";
import { createServer } from "node:http";
import dbConfig from "./configs/database.js";
import logger from "./middlewares/logger.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import requestRoute from "./routes/requestRoute.js";
import auth from "./middlewares/auth.js";
import cors from 'cors';

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
//auth route
app.use("/api/auth", authRoute);

//user route
app.use("/api/user", userRoute);

//request route
app.use("/api/request", auth, requestRoute)

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
