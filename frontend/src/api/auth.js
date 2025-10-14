import config from "@/config";
import axios from "axios";

const LoginApi = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
  return response;
};

const RegisterApi = async (data) => {
  console.log(data)
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);
  console.log(" acadasdasdad")
  return response;
}
export { LoginApi, RegisterApi };
