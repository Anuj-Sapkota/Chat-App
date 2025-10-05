import dotenv from "dotenv";

dotenv.config();

const config = {
  mongoDbUrl: process.env.MONGODB_URL,
  serverPort: process.env.SERVER_PORT || "5000",
};
export default config;
