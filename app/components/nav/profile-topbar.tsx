import { Href, Link } from "expo-router";
import { Image, View, Text, Pressable } from "react-native";

import Logo from "@/assets/images/kataloka-logo.svg"


const ProfileTopBar = () => {
  return (
    <View className="flex flex-row justify-between w-full items-center p-4 bg-light-green">
      <Logo width={43} height={48} aria-label="Kataloka Logo"/>
      <Text className="text-creme font-bold text-2xl mx-auto">Kataloka</Text>
      <View className="opacity-0">Plchldr</View>
    </View>
  );
};

export default ProfileTopBar;
