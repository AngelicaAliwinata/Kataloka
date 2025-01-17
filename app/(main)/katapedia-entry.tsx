import { View, Text, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { KatapediaCard } from "@/components/katapedia/card";
import { KatapediaData } from "@/static/katapedia";


const KatapediaScreen = () => {
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
        Katapedia
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
        Pilih salah satu kartu di bawah
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
        {KatapediaData.map((cardData, index) => {
          return (
            <KatapediaCard
              key={index}
              name={cardData.name}
              
              definition={cardData.definition}
              fact={cardData.fact}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default KatapediaScreen;
