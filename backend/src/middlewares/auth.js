import config from "../configs/config.js";
import jwt from "jsonwebtoken";
const createToken = async (req, res, data) => {
  const authToken = jwt.sign({ data: data }, config.jwtPrivateKey, {
    expiresIn: "7d",
  });

  return authToken;
};

const verifyToken = async () => {};

export default { createToken, verifyToken };
