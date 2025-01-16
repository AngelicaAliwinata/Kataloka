import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import { Touchable, TouchableOpacity, View, Text } from "react-native";

interface QuestionPaginationProps {
  maxQuestion: number;
  currentQuestion: number;
  onSelect: (question: number) => void;
  answeredNumbers: Number[];
}

export const QuestionPagination = ({
  maxQuestion,
  currentQuestion,
  onSelect,
  answeredNumbers,
}: QuestionPaginationProps) => {
  const roundUpToNearestFive = (num: number): number => {
    return Math.ceil(num / 5) * 5;
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 25,
        alignItems: "center",
        justifyContent : "space-around",
        gap: 15,
        backgroundColor: Colors.beige,
        borderColor: Colors["dark-green"],
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      {Array.from({ length: roundUpToNearestFive(maxQuestion) }).map(
        (_, index) => {
          let wordLength = 0;
          let length = index + 1;
          while (length / 10 >= 1) {
            wordLength += 1;
            length /= 10;
          }

          const maxIndex =
            roundUpToNearestFive(maxQuestion) -
            (roundUpToNearestFive(maxQuestion) - maxQuestion);

          const isIndex = index < maxIndex;
          const isAnswered = answeredNumbers.includes(index);
          const isSelected = currentQuestion === index;
          const suitedHorizontalPadding = 13 - wordLength * 4;

          // Intinya klo indexnya sesuai dia ga bakal transparent
          // Klo currentquestion === index atau saat ini question ini lagi dibaca, warnanya berubah
          const backgroundColor = () => {
            if (!isIndex) {
              return hexToRgba("#fff", 0);
            }
            if (isSelected) {
              return hexToRgba(Colors["light-green"], 0.5);
            }
            if (isAnswered) {
              return "#FFEEC0";
            }
            return Colors["light-green"];
          };
          return (
            <TouchableOpacity
              key={index}
              onPress={isIndex ? () => onSelect(index) : () => function () {}}
              style={{
                alignItems: "center",
                backgroundColor: backgroundColor(),
                borderRadius: 5,
                borderWidth: 1,
                borderColor: isIndex
                  ? Colors["dark-green"]
                  : hexToRgba("#fff", 0),
                paddingVertical: 13,
                paddingHorizontal: suitedHorizontalPadding,
                width: "14%",
              }}
            >
              <Text
                style={{
                  color: isAnswered || isSelected ? "#000" : Colors.beige,
                  fontSize: 20,
                  lineHeight: 36,
                  textAlign: "center",
                  fontWeight: "600",
                }}
            >
                {isIndex ? index + 1 : ""}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};
