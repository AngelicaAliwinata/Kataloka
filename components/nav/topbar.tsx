import { Href, Link } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";

import Logo from "@/assets/images/kataloka-logo.svg";
import { Colors } from "@/constants/Colors";

interface Props {
  linkTitle?: string;
  linkHref?: Href<string | object>;
  linkVisibility?: boolean;
}
export const TopBar = ({
  linkTitle,
  linkHref,
  linkVisibility = true,
}: Props) => {
  return (
    <View
      className="flex flex-row justify-between w-full items-center p-4 bg-light-green"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        padding: 16,
        backgroundColor: Colors["light-green"],
      }}
    >
      <Logo width={43} height={40} aria-label="Kataloka Logo" />
      <Text className="text-creme font-bold text-2xl mx-auto">Kataloka</Text>
      {linkVisibility ? (
        <TouchableOpacity
          className="p-2.5 bg-creme rounded-md"
          style={{
            padding: 10,
            borderRadius: 6,
          }}
        >
          <Link href={linkHref ?? "/"}>
            <Text
              className="font-bold text-base text-light-green"
              style={{
                color: Colors["light-green"],
              }}
            >
              {linkTitle}
            </Text>
          </Link>
        </TouchableOpacity>
      ) : (
        <Text className="opacity-0">Hidden</Text>
      )}
    </View>
  );
};
