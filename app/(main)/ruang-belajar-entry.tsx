import { View, Text, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { StudyCard } from "@/components/ruang-belajar/card";
import { RuangBelajarData } from "@/static/ruang-belajar";

const RuangBelajarScreen = () => {
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
        Ruang Belajar
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
        Pilih salah satu pembelajaran di bawah!
      </Text>

      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 15,
          marginBottom: 50,
        }}
      >
        {RuangBelajarData.map((cardData, index) => {
          return (
            <StudyCard
              key={index}
              image={cardData.image}
              name={cardData.name}
              videoUrls={cardData.videoUrls}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default RuangBelajarScreen;
