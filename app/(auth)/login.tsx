import React, { useState } from "react";

import {
  Link,
  router,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, TextInput, Button, Text, Image, Pressable } from "react-native";
import mascot from "@/assets/images/mascot.png";
import { LoginInputFields } from "../../components/login/input-fields";

const DUMMY_USER = {
  fullname: "dave@gmail.com",
  password: "dave123",
  accessToken: "FOEOFIE2EF",
};
const LoginScreen = () => {
  return (
    <View className="flex-1 bg-creme flex flex-col items-center justify-center gap-5 w-full">
      <Image
        source={mascot}
        width={80}
        height={30}
        className="w-[170px] h-[203px] object-center"
      ></Image>

      <LoginInputFields />
    </View>
  );
};

export default LoginScreen;
