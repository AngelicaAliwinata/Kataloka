import { Colors } from "@/constants/Colors";
import { hexToRgba } from "@/utils/ColorHandler";
import { TouchableOpacity, Text, View } from "react-native";

interface OptionProps {
  option: string;
  isSelected: boolean;
  isCorrect: boolean;
  onSelect: () => void;
  isAnswered: boolean;
}

export const Option = ({
  option,
  isSelected,
  isCorrect,
  onSelect,
  isAnswered,
}: OptionProps) => {
  return (
    <TouchableOpacity
      disabled={isAnswered}
      onPress={onSelect}
      style={{
        padding: 20,
        borderWidth: 1,
        borderColor: Colors["dark-green"],
        backgroundColor: isSelected
          ? isCorrect
            ? hexToRgba(Colors["light-green"], 0.133)
            : Colors["red-pink"]
          : Colors.beige,
        
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 6,
        gap: 10,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: Colors["dark-green"],
          marginRight: 10,
          padding: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            backgroundColor: isSelected ? Colors["dark-green"] : Colors.creme,
          }}
        ></View>
      </View>

      <Text className="text-base font-normal text-black">{option}</Text>
    </TouchableOpacity>
  );
};
