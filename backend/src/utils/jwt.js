import config from "../configs/config.js";
import jwt from "jsonwebtoken";

const createToken = (data) => {
  const authToken = jwt.sign({ data: data }, config.jwtPrivateKey, {
    expiresIn: "7d",
  });

  return authToken;
};

const verifyToken = async (authToken) => {
  const verifiedToken =  jwt.verify(authToken, config.jwtPrivateKey)
  return verifiedToken;
};

export  { createToken, verifyToken };
