import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
interface QuestionProps {
  question: string;
}

export const Question = ({ question }: QuestionProps) => {
  return (
    <View
      style={{
        backgroundColor: "#F6DCC3",
        paddingHorizontal: 18,
        paddingVertical: 12,
        
        borderRadius : 6
      }}
    >
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "700",
          color: Colors["dark-green"],
        }}
      >
        {question}
      </Text>
    </View>
  );
};
