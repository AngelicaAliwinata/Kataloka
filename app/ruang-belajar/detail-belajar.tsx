import { StudyCard } from "@/components/ruang-belajar/card";
import { VideoFrame, VideoFrameProps } from "@/components/ruang-belajar/video-frame";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



const data : VideoFrameProps[]= [
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "unwatched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "watched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "unwatched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "watched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "unwatched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "watched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "unwatched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "watched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "unwatched",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=K7hU_z9X4Kk",
    status: "watched",
  },
];
const DetailRuangBelajar = () => {
  const {name} = useLocalSearchParams();

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
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 15,
          marginBottom: 50,
        }}
      >
        {data.map((cardData, index) => {
          return (
            <VideoFrame videoUrl={cardData.videoUrl} status={cardData.status} />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default DetailRuangBelajar;
