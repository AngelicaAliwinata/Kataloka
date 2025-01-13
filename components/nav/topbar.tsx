import { Href, Link } from "expo-router";
import { Image, View, Text, Pressable } from "react-native";

import Logo from "@/assets/images/kataloka-logo.svg";

interface Props {
  linkTitle?: string;
  linkHref?: Href<string | object>;
  linkVisibility?: boolean;
}
const TopBar = ({ linkTitle, linkHref, linkVisibility = true }: Props) => {
  return (
    <View className="flex flex-row justify-between w-full items-center p-4 bg-light-green">
      <Logo width={43} height={40} aria-label="Kataloka Logo" />
      <Text className="text-creme font-bold text-2xl mx-auto">Kataloka</Text>
      {linkVisibility ? (
        <Pressable className="p-2.5 bg-creme rounded-md">
          <Link href={linkHref ?? ""}>
            <Text className="font-bold text-base text-light-green">
              {linkTitle}
            </Text>
          </Link>
        </Pressable>
      ) : (
        <Text className="opacity-0">Hidden</Text>
      )}
    </View>
  );
};

export default TopBar;
