import { handleShorteningText } from "@/utils/StringHandler";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Ejaan from "@/assets/images/ruang-belajar/ejaan.png";
import TataKata from "@/assets/images/ruang-belajar/tata-kata.png";
import TataKalimat from "@/assets/images/ruang-belajar/tata kalimat.png";
import Paragraph from "@/assets/images/ruang-belajar/paragraf.png";
import Ttki1 from "@/assets/images/ruang-belajar/ttki.png";
import Ttki2 from "@/assets/images/ruang-belajar/ttki-star.png";
import { StudyCard } from "@/components/ruang-belajar/card";

const ImageList = [Ejaan, TataKata, TataKalimat, Paragraph, Ttki1, Ttki2];

const maxIteration = 6;

const data = [
  {
    name: "Ejaan",
    image: ImageList[0],
  },
  {
    name: "Tata Kata",
    image: ImageList[1],
  },
  {
    name: "Tata Kalimat",
    image: ImageList[2],
  },
  {
    name: "Paragraph",
    image: ImageList[3],
  },
  {
    name: "TTKI (1)",
    image: ImageList[4],
  },
  {
    name: "TTKI (2)",
    image: ImageList[5],
  },
];

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
          gap : 15,
          marginBottom : 50
        }}
      >
        {data.map((cardData, index) => {
          return (
            <StudyCard
              key={index}
              image={cardData.image}
              name={cardData.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default RuangBelajarScreen;
