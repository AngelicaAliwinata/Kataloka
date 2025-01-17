import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";

interface StudyCardProps {
  image: ImageSourcePropType;
  videoUrls: string[];
  name: string;
}

export const StudyCard = (props: StudyCardProps) => {
  const router = useRouter();
  function onPressed() {
    router.push({
      pathname: "/ruang-belajar/detail-belajar",
      params: {
        name: props.name,
        videoUrls: props.videoUrls,
      },
    });
  }
  return (
    <TouchableOpacity
      onPress={onPressed}
      style={{
        backgroundColor: "#FFFFEB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 15,
        alignItems: "center",
        paddingHorizontal: 21,
        paddingVertical: 15,
        width: 150,
        elevation: 4,
        borderRadius: 8,
      }}
    >
      <Image
        style={{
          height: 110,
          width: 106,
        }}
        source={props.image}
      />
      <Text
        style={{
          fontSize: 20,
          lineHeight: 30,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
