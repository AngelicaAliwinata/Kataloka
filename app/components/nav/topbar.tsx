import { Href, Link } from "expo-router";
import { Image, View, Text, Pressable } from "react-native";

import Logo from "@/assets/images/kataloka-logo.svg"

interface Props {
  linkTitle: string;
  linkHref: Href<string | object>;
}
const TopBar = (props: Props) => {
  return (
    <View className="flex flex-row justify-between w-full items-center p-4 bg-light-green">
      <Logo width={43} height={48} aria-label="Kataloka Logo"/>
      <Text className="text-creme font-bold text-2xl mx-auto">Kataloka</Text>
      <Pressable className="p-2.5 bg-creme rounded-md">
        <Link href={props.linkHref}>
          <Text className="font-bold text-base text-light-green">
            {props.linkTitle}
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default TopBar;
