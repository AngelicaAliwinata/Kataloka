import { View, Text, Pressable, ScrollView } from "react-native";

import { Link, useRouter } from "expo-router";
import { OptionCard } from "../../components/homepage/card";
import KatapediaMascot from "@/assets/images/homepage/katapedia-mascot.png";
import CerdasBersamaMascot from "@/assets/images/homepage/cerdas-bersama-mascot.png";
import RuangBelajarMascot from "@/assets/images/homepage/ruang-belajar-mascot.png";
import { handleShorteningText } from "@/utils/StringHandler";
import { useAuth } from "@/context/useAuth";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const { user, isAuthenticated } = useAuth();
  const { refreshAuth } = useAuth();

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <ScrollView
      className="w-full h-full bg-creme"
      style={{
        paddingHorizontal: 40,
        paddingTop: 20,
      }}
    >
      <Text
        className="flex flex-col text-center gap-1 text-brown font-bold text-2xl"
        style={{
          fontSize: 26,
          fontWeight: 700,
          lineHeight: 42,
          paddingBottom: 10,
        }}
      >
        Selamat Datang di Kataloka
        {isAuthenticated &&
          `, ${handleShorteningText(user?.fullName ?? "", 15)}`}
        !
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "400",
          color: Colors.brown,
          paddingBottom: 16,
          textAlign: "center",
        }}
      >
        Pilih salah satu metode pembelajaran!
      </Text>

      <View className="flex flex-col gap-5 " style={{
        marginBottom : 40
      }}>
        <OptionCard
          image={{
            model: KatapediaMascot,
            height: 85,
            width: 67,
          }}
          title={"Katapedia"}
          description={"Menjelajahi kosakata sehari-hari dengan Katapedia"}
          link={"/(main)/katapedia-entry"}
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
          link={"/(main)/ruang-belajar-entry"}
        />
        <OptionCard
          image={{
            model: CerdasBersamaMascot,
            height: 85,
            width: 114,
          }}
          title={"Cerdas Bersama"}
          description={"Meningkatkan pemahaman berbahasa Indonesia melalui tes"}
          link={"/(main)/cerdas-bersama-entry"}
        />
      </View>
    </ScrollView>
  );
}
