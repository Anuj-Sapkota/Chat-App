import userService from "../services/userService.js";
import auth from "../middlewares/auth.js";
const register = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.register(body);
    const authToken = await auth.createToken(data);
    res.cookie("authToken", authToken, {
      maxAge:  2 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { register };
