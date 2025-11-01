import config from "@/config";
import axios from "axios";
import api from "./api";

const LoginApi = async (data) => {
  const response = await api.post(`/api/auth/login`, data);
  return response;
};

const RegisterApi = async (data) => {
  console.log(data)
  const response = await api.post(`/api/auth/register`, data);
  return response;
}
export { LoginApi, RegisterApi };
