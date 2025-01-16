import { Colors } from "@/constants/Colors";
import { Href, useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

interface Props {
  image: {
    model: ImageSourcePropType;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  link: Href<string | object>;
}

export const OptionCard = ({ image, title, description, link }: Props) => {
  const router = useRouter();
  function redirectToPage() {
    router.push(link);
  }
  return (
    <TouchableOpacity
      onPress={redirectToPage}
      className="flex flex-col gap-1 rounded-lg items-center"
      style={{
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#fff", // Required for shadow visibility
        borderRadius: 10, // Ensure rounded corners
        shadowColor: "#000", // Shadow color (iOS)
        shadowOffset: { width: 0, height: 4 }, // Shadow offset (iOS)
        shadowOpacity: 0.2, // Shadow transparency (iOS)
        shadowRadius: 4, // Shadow blur (iOS)
        elevation: 5, // Shadow for Android
      }}
    >
      <Image
        source={image.model}
        alt="Mascot"
        height={image.height}
        width={image.width}
        style={{
          height: image.height,
          width: image.width,
        }}
      />
      <Text className="font-bold text-xl text-brown">{title}</Text>
      <Text className="font-normal text-brown text-sm text-center">
        {description}
      </Text>
    </TouchableOpacity>
  );
};
