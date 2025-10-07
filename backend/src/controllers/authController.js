import userService from "../services/authService.js";
import { createToken } from "../utils/jwt.js";

//register controller
const register = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.register(body);
    //token creation
    const authToken = createToken(data);
    //cookie creation
    res.cookie("authToken", authToken, {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//login controller
const login = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.login(body);
    //token creation
    const authToken = createToken(data);
    //cookie creation
    res.cookie("authToken", authToken, {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};
export default { register, login };
