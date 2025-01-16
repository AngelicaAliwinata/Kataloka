import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import { View, Text } from "react-native";

interface Props {
  currentQuestion: number;
  maxLength: number;
}

export const ProgressBar = ({ currentQuestion, maxLength }: Props) => {
  const percentage = currentQuestion / maxLength * 100
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}
    >
      <View
        style={{
          flex: 1,
          height: 21,
          backgroundColor: hexToRgba(Colors["light-green"], 0.5),
          borderRadius: 20,
        }}
      >
        <View
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: Colors["dark-green"],
            borderRadius: 20,
          }}
        />
      </View>
      <Text
        style={{
          marginLeft: 10,
          color: Colors["dark-green"],
          fontWeight: "700",
          fontSize: 20,
          lineHeight: 30,
          textAlign: "center",
        }}
      >
        {Math.round(percentage)}%
      </Text>
    </View>
  );
};
