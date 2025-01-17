import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";

const DetailKatapedia = () => {
  const { name, category, spelling, definition, fact } = useLocalSearchParams();

  return (
    <ScrollView
      className="w-full h-full bg-creme"
      style={{
        paddingHorizontal: 20,
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
        Kata baru untukmu hari ini adalah...
      </Text>

      <View
        style={{
          backgroundColor: Colors["dark-green"],
          padding: 26,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.beige,
            padding: 24,
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 36,
              textAlign: "center",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
            }}
          >
            {category + " | " + spelling}
          </Text>
          <View
            style={{
              backgroundColor: hexToRgba(Colors["dark-green"], 0.2431),
              height: 8,
              width: "100%",
            }}
          ></View>
          <Text
            style={{
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 36,
              textAlign: "center",
            }}
          >
            Pengertian
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
            }}
          >
            {definition}
          </Text>
          <View
            style={{
              backgroundColor: hexToRgba(Colors["dark-green"], 0.2431),
              height: 8,
              width: "100%",
            }}
          ></View>
          <Text
            style={{
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 36,
              textAlign: "center",
            }}
          >
            Apakah Anda Tahu?
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
            }}
          >
            {fact}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailKatapedia;
