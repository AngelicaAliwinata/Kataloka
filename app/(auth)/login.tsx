import React, { useState } from "react";

import { Link, router, useLocalSearchParams } from "expo-router";
// import { useAuthStore } from "@/auth/auth.store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, TextInput, Button, Text, Image, Pressable } from "react-native";
const mascot = require("../../assets/images/mascot.png");

const DUMMY_USER = {
  fullname: "dave@gmail.com",
  password: "dave123",
  accessToken: "FOEOFIE2EF",
};
const LoginScreen = () => {
  const { value } = useLocalSearchParams();
  const [fullname, setFullName] = useState((value as string) || "");
  const [email, setEmail] = useState((value as string) || "");
  const [password, setPassword] = useState("");

  function Daftar() {}

  return (
    <View className="flex-1 bg-creme flex flex-col items-center justify-center gap-5 w-full">
      <Image
        source={mascot}
        width={80}
        height={30}
        className="w-[170px] h-[203px] object-center"
      ></Image>

      <View className="bg-light-green/20 p-10 rounded-xl flex flex-col gap-5">
        <View className="flex flex-col gap-0">
          <Text>Email</Text>
          <TextInput
            placeholder="Masukkan Email anda"
            className="border-[1px] border-[#b0b0b0] bg-white rounded-[8px] h-[48px] p-2 text-[#888888] max-w-[342px] w-full  pl-4"
            value={fullname}
            onChangeText={setEmail}
            secureTextEntry
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
          onPress={Daftar}
          className="bg-dark-green  text-center flex justify-center items-center py-2 rounded-lg w-max"
        >
          <Text className="text-white font-bold text-center">Login</Text>
        </Pressable>

        <Text className="text-light-green text-center">
          Belum Punya Akun? <Link  href={"/(auth)/signup"}><Text className="font-bold">Daftar</Text></Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
