import config from "@/config";
import axios from "axios";

const LoginApi = async (data) => {
  try {
    const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export  { LoginApi };
