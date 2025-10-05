import userService from "../services/userService.js";

const register = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.register(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { register };
