import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import { TouchableOpacity, Text, View } from "react-native";
import { BooleanLiteral } from "typescript";

interface OptionProps {
  option: string;
  isSelected: boolean;
  isCorrect: boolean;
  onSelect: () => void;
}

export const Option = ({
  option,
  isSelected,
  isCorrect,
  onSelect,
}: OptionProps) => {
  
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        padding: 15,
        borderWidth: 1,
        borderColor: Colors["dark-green"],
        backgroundColor: isSelected
          ? isCorrect
            ? hexToRgba(Colors["light-green"], 0.133)
            : Colors["red-pink"]
          : "FFF",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: isSelected
            ? isCorrect
              ? Colors["dark-green"]
              : Colors["red-pink"]
            : "b0b0b0b0",
          backgroundColor: isSelected
            ? isCorrect
              ? Colors["dark-green"]
              : Colors["red-pink"]
            : "#FFF",
          marginRight: 10,
        }}
      />

      <Text className="text-base font-normal text-black">{option}</Text>
    </TouchableOpacity>
  );
};
