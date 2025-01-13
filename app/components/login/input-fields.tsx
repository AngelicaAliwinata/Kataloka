import { useAuth } from "@/context/useAuth";
import { axiosInstance } from "@/lib/axios-client";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, TextInput, Pressable, Text, Alert } from "react-native";

export const LoginInputFields = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  async function Login() {
    const res = await login(email, password);

    if (res.ok) {
      router.push("/");
      return;
    }

    Alert.alert("Login Gagal", "Email atau Password Salah");
  }
  return (
    <View className="bg-light-green/20 p-10 rounded-xl flex flex-col gap-5">
      <View className="flex flex-col gap-0">
        <Text>Email</Text>
        <TextInput
          placeholder="Masukkan Email anda"
          className="border-[1px] border-[#b0b0b0] bg-white rounded-[8px] h-[48px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="flex flex-col gap-0">
        <Text>Kata Sandi</Text>
        <TextInput
          placeholder="Masukkan Kata sandi anda"
          className="border-[1px] border-[#b0b0b0] bg-white rounded-[8px] h-[48px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable
        onPress={Login}
        className="bg-dark-green  text-center flex justify-center items-center py-2 rounded-lg w-max"
      >
        <Text className="text-white font-bold text-center">Login</Text>
      </Pressable>

      <Text className="text-light-green text-center">
        Belum Punya Akun?{" "}
        <Link href={"/(auth)/signup"}>
          <Text className="font-bold">Daftar</Text>
        </Link>
      </Text>
    </View>
  );
};
