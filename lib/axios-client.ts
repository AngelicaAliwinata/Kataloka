import axios from "axios";
import { createClient, createConfig } from "@hey-api/client-axios";

const axiosInstance = createClient(
  createConfig({
    baseURL: process.env.BACKEND_URL ?? "http://10.0.2.2:5001",
    headers: { "Content-Type": "application/json" },
  })
);

const authAxiosInstance = createClient(
  createConfig({
    baseURL: process.env.BACKEND_URL ?? "http://10.0.2.2:5001",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  })
);

export { axiosInstance, authAxiosInstance };
