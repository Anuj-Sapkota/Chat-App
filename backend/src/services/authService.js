import userModel from "../models/User.js";
import bcrypt, { compareSync } from "bcrypt";
import config from "../configs/config.js";

//register service
const register = async (data) => {

  const userCheck = await userModel.find({email: data.email}); //checking if the user already exists or not

  if (userCheck) {
    throw new Error({
      statusCode: "409",
      message: "User Already Exists!"
    })
  }

  const salt = await bcrypt.genSalt(10); //generating salt
  const hashedPassword = await bcrypt.hash(data.password, salt); //hashing the password
  //registering the user
  const user = await userModel.create({
    ...data,
    password: hashedPassword,
  });

  //converting to js object
  const userObj = user.toObject();
  delete userObj.password; //removing the password property for security
  return userObj;
};

//login service
const login = async (data) => {
  
  const user = await userModel.findOne({ email: data.email });

  if (!user) {
    throw new Error({
      statusCode: "401",
      message: "Incorrect Email or Password",
    });
  }
  const comparePassword = await bcrypt.compare(data.password, user.password);

  if (comparePassword == false) {
    throw new Error({
      statusCode: "401",
      message: "Incorrect Email or Password",
    });
  }

  //converting to js object
  const userObj = user.toObject();
  delete userObj.password; //removing the password property for security
  return userObj;
};
export default { register, login };
