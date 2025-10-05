import express from "express";
import { createServer } from "node:http";
import dbConfig from "./configs/database.js";
import logger from "./middlewares/logger.js";
import userRoute from './routes/userRoute.js'
const app = express();

const server = createServer(app);
app.use(express.json());

dbConfig();

app.use(logger);

//routes
app.use('/api/auth', userRoute)
server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
