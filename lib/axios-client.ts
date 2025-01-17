import { createClient, createConfig } from "@hey-api/client-axios";

const axiosInstance = createClient(
  createConfig({
    baseURL:
      process.env.BACKEND_URL ??
      "https://kataloka-mobile-backend.kataloka-mobile.workers.dev",
    headers: { "Content-Type": "application/json" },
  })
);

const authAxiosInstance = createClient(
  createConfig({
    baseURL:
      process.env.BACKEND_URL ??
      "https://kataloka-mobile-backend.kataloka-mobile.workers.dev",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  })
);

export { axiosInstance, authAxiosInstance };
