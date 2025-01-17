import { client, register } from "@/app/api";
import { Colors } from "@/constants/Colors";
import { useLoading } from "@/context/useLoading";
import { axiosInstance } from "@/lib/axios-client";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

export const SigninInputFields = () => {
  const {setLoading} = useLoading();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function SignIn() {
    setLoading(true);
    const res = await register({
      client: axiosInstance,
      body: { fullName, email, password },
    });


    if (res.status === 201) {
      setLoading(false);
      router.push("/login");
    } else {
      setLoading(false);
      Alert.alert("Gagal Daftar", "Terjadi Kesalahan");
    }
  }

  return (
    <View className="bg-light-green/20 p-10 rounded-xl flex flex-col gap-5">
      <View className="flex flex-col gap-0">
        <Text>Nama Lengkap</Text>
        <TextInput
          placeholder="Masukkan Nama Lengkap anda"
          className="border-[1px] border-dark-green bg-white rounded-[4px] h-[34px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
          style={{
            elevation: 4,
            shadowColor: Colors["dark-green"],
            shadowOpacity: 1,
          }}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View className="flex flex-col gap-0">
        <Text>Email</Text>
        <TextInput
          placeholder="Masukkan Email anda"
          className="border-[1px] border-dark-green bg-white rounded-[4px] h-[34px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
          style={{
            elevation: 4,
            shadowColor: Colors["dark-green"],
            shadowOpacity: 1,
          }}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="flex flex-col gap-0">
        <Text>Kata Sandi</Text>
        <TextInput
          placeholder="Masukkan Kata sandi anda"
          className="border-[1px] border-dark-green bg-white rounded-[4px] h-[34px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
          style={{
            elevation: 4,
            shadowColor: Colors["dark-green"],
            shadowOpacity: 1,
          }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View className="flex flex-col gap-0">
        <Text>Konfirmasi Kata Sandi</Text>
        <TextInput
          placeholder="Konfirmasikan Kata sandi anda"
          className="border-[1px] border-dark-green bg-white rounded-[4px] h-[34px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
          style={{
            elevation: 4,
            shadowColor: Colors["dark-green"],
            shadowOpacity: 1,
          }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={SignIn}
        className="bg-dark-green  text-center flex justify-center items-center py-2 rounded-lg w-max"
      >
        <Text className="text-white font-bold text-center">Daftar</Text>
      </TouchableOpacity>

      <Text className="text-light-green text-center">
        Sudah Punya Akun?{" "}
        <Link href={"/(auth)/login"}>
          <Text className="font-bold">Masuk</Text>
        </Link>
      </Text>
    </View>
  );
};
