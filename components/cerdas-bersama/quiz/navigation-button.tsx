import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import { View, Text, TouchableOpacity } from "react-native";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export const NavigationButton = ({
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
  onSubmit,
}: NavigationButtonsProps) => {
  const isLastNumber = currentQuestion === totalQuestions - 1;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <TouchableOpacity
        onPress={onPrev}
        disabled={currentQuestion === 0}
        style={{
          padding: 15,
          backgroundColor: currentQuestion !== 0 ? Colors["dark-green"] : hexToRgba(Colors["dark-green"],0.6),
          borderRadius: 8,
          flex: 1,
          marginRight: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.beige,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "bold",
          }}
        >
          Sebelumnya
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={isLastNumber ? onSubmit : onNext}
        style={{
          padding: 15,
          backgroundColor: Colors["dark-green"],
          borderRadius: 8,
          flex: 1,
          marginLeft: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.beige,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "bold",
          }}
        >
          {isLastNumber ? "Selesai" : "Selanjutnya"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
