import userModel from "../models/User.js";
import bcrypt, { compareSync } from "bcrypt";
import config from "../configs/config.js";

//register service
const register = async (data) => {
  const userCheck = await userModel.findOne({ email: data.email }); //checking if the user already exists or not

  console.log(userCheck);
  
  if (userCheck) {
    throw {
      statusCode: "409",
      message: "User Already Exists!",
    };
  }

  if (!data.confirmPassword) {
    console.log("confirm password required");
    throw {
      statusCode: 401,
      message: "Confirm Password Required",
    };
  }
  if (data.confirmPassword !== data.password) {
    throw {
      statusCode: 401,
      message: "Passwords donot match",
    };
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
    console.log("user Not found!");
    throw {
      statusCode: 401,
      message: "Incorrect Email or Password",
    };
  }

  const comparePassword = await bcrypt.compare(data.password, user.password);

  if (comparePassword == false) {
    throw {
      statusCode: 401,
      message: "Incorrect Email or Password",
    };
  }

  //converting to js object
  const userObj = user.toObject();
  delete userObj.password; //removing the password property for security
  return userObj;
};
export default { register, login };
