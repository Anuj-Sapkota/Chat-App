import userModel from "../models/User.js";

const register = async (data) => {
  const registeredUser = await userModel.create(data);
  return registeredUser;
};

export default {register};
