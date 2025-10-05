import dotenv from "dotenv";

dotenv.config();

const config = {
  mongoDbUrl: process.env.MONGODB_URL,
  serverPort: process.env.SERVER_PORT || "5000",
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
};
export default config;
