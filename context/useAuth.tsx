import {
  login as credLogin,
  logout as credLogout,
  self,
  User,
} from "@/app/api";
import { authAxiosInstance, axiosInstance } from "@/lib/axios-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useState, useContext, ReactNode } from "react";

export interface loginResponse {
  ok: boolean;
  error: boolean;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  refreshUser: () => Promise<void>;
  refreshAuth: () => Promise<void>;
  getCookie: () => Promise<string | null>;
  login: (email: string, password: string) => Promise<loginResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const req = await credLogin({
      client: axiosInstance,
      body: { email: email, password },
    });

    const res: loginResponse = {
      ok: false,
      error: false,
    };

    if (!req.data) {
      res.error = true;
      console.error("Email atau Password salah!");
      return res;
    }

    const cookieResponse = req.headers["set-cookie"]?.[0];
    if (cookieResponse) {
      try {
        await AsyncStorage.setItem("kataThor", cookieResponse);
      } catch (e) {
        console.log("Cookies failed to store:", e);
      }
    }

    if (req.data) {
      setIsAuthenticated(true);

      // Set Axios Cookie
      authAxiosInstance.setConfig({
        withCredentials: true,
        headers: {
          Cookie: cookieResponse,
        },
      });

      // Get User Data
      const userData = req.data;
      console.log("userData", userData);
      setUser(userData ?? null);
      res.ok = true;
      router.replace("/");
    }

    return res;
  };

  const logout = async (redirect: boolean = true) => {
    setIsAuthenticated(false);
    setUser(null);
    AsyncStorage.clear();

    // Remove Axios Cookie
    authAxiosInstance.setConfig({
      withCredentials: false,
      headers: {
        Cookie: "",
      },
    });

    await credLogout({ client: authAxiosInstance });
    if (redirect) router.replace("/(auth)/login");
  };

  const getCookie = async () => {
    try {
      const value = await AsyncStorage.getItem("kataThor");
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log("Cookies failed to get:", e);
    }
    return null;
  };

  const refreshUser = async () => {
    console.log("refreshing user");
    const userData = await self({ client: authAxiosInstance });
    if (userData.status === 401) {
      console.log("User not authenticated");
      await logout(false);
      return;
    }
    if (userData.data) {
      console.log("User data refreshed", userData.data);
      setUser(userData.data);
    } else {
      console.log("User refresh failed",userData.error);
      setTimeout(async () => {
        await refreshUser();
      }, 3000);
    }
  };

  const refreshAuth = async () => {
    const cookie = await getCookie();
    const headers = axiosInstance.getConfig().headers;
    if (headers && (headers as Record<string, any>)["Cookie"] === cookie) {
      return;
    }

    console.log("refreshing cookie", cookie);
    if (cookie) {
      authAxiosInstance.setConfig({
        withCredentials: true,
        headers: {
          Cookie: cookie,
        },
      });
      setIsAuthenticated(true);
      await refreshUser();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        refreshUser,
        refreshAuth,
        getCookie,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
