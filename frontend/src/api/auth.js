import config from "@/config";
import axios from "axios";

const LoginApi = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
  return response;
};

export { LoginApi };
