import React, { useState } from "react";


import { View, Image } from "react-native";
import { SigninInputFields } from "../components/signin/input-fields";
const mascot = require("../../assets/images/mascot.png");

const DUMMY_USER = {
  fullname: "dave@gmail.com",
  password: "dave123",
  accessToken: "FOEOFIE2EF",
};
const RegisterScreen = () => {
  return (
    <View className="flex-1 bg-creme flex flex-col items-center justify-center gap-5 w-full">
      <Image
        source={mascot}
        width={80}
        height={30}
        className="w-[170px] h-[203px] object-center"
      ></Image>

      <SigninInputFields />
    </View>
  );
};

export default RegisterScreen;
