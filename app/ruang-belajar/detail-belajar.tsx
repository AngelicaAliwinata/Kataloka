import { VideoFrame } from "@/components/ruang-belajar/video-frame";
import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

const DetailRuangBelajar = () => {
  const { name, videoUrls } = useLocalSearchParams();
  

  const selectedVideo = Array.isArray(videoUrls)
    ? videoUrls
    : videoUrls?.split(",").filter(Boolean) || [];

  function TesPemahaman() {
    router.navigate("/cerdas-bersama-entry");
  }

  console.log(selectedVideo)

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
        {name}
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
        Tonton Video di bawah ini!
      </Text>

      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-around",
          marginBottom: 50,
          flexShrink: 1,
        }}
      >
        {selectedVideo.map((video, index) => {
          return <VideoFrame videoUrl={video} key={index} />;
        })}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Colors["dark-green"],
          width: "100%",
          paddingVertical: 12,
          marginBottom: 60,
          borderRadius: 8,
        }}
        onPress={TesPemahaman}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.beige,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Tes Pemahamanmu
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailRuangBelajar;
