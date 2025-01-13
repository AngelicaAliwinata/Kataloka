import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { OptionCard } from "../../components/homepage/card";
import KatapediaMascot from "@/assets/images/homepage/katapedia-mascot.png";
import CerdasBersamaMascot from "@/assets/images/homepage/cerdas-bersama-mascot.png";
import RuangBelajarMascot from "@/assets/images/homepage/ruang-belajar-mascot.png";
import { handleShorteningText } from "@/utils/stringHandler";

export default function HomeScreen() {
  const NamaDummy = "PALEN GAMING";

  return (
    <View
      className="w-full h-full bg-creme"
      style={{
        paddingHorizontal: 40,
      }}
    >
      <Text
        className="flex flex-col text-center gap-1 text-brown font-bold text-2xl"
        style={{
          fontSize: 28,
          fontWeight: 700,
          lineHeight: 42,
        }}
      >
        Selamat Datang di Kataloka, {handleShorteningText(NamaDummy, 15)}!
      </Text>
      <View className="flex flex-col gap-5">
        <OptionCard
          image={{
            model: KatapediaMascot,
            height: 85,
            width: 67,
          }}
          title={"Katapedia"}
          description={"Menjelajahi kosakata sehari-hari dengan Katapedia"}
          link={"/(main)/katapedia"}
        />
        <OptionCard
          image={{
            model: RuangBelajarMascot,
            height: 85,
            width: 94,
          }}
          title={"Ruang Belajar"}
          description={
            "Tempat belajar interaktif yang menyediakan video pembelajaran"
          }
          link={"/(main)/ruang-belajar"}
        />
        <OptionCard
          image={{
            model: CerdasBersamaMascot,
            height: 85,
            width: 114,
          }}
          title={"Cerdas Bersama"}
          description={"Meningkatkan pemahaman berbahasa Indonesia melalui tes"}
          link={"/(main)/cerdas-bersama"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
