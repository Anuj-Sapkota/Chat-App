import config from "../configs/config.js";
import jwt from "jsonwebtoken";

const createToken = (data) => {
  const authToken = jwt.sign({ data: data }, config.jwtPrivateKey, {
    expiresIn: "7d",
  });

  return authToken;
};

const verifyToken = async (authToken) => {
    const verify = jwt.verify(authToken, config.jwtPrivateKey)
    console.log(verify)
};

export  { createToken, verifyToken };
