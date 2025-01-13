import { View, Text } from "react-native";

interface Props {
  currentQuestion: number;
  maxLength: number;
}

export const ProgressBar = ({ currentQuestion, maxLength }: Props) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
    >
      <View
        style={{
          flex: 1,
          height: 10,
          backgroundColor: "#D9D9D9",
          borderRadius: 5,
        }}
      >
        <View
          style={{
            width: `${((currentQuestion + 1) / maxLength) * 100}%`,
            height: "100%",
            backgroundColor: "#76BA99",
            borderRadius: 5,
          }}
        />
      </View>
      <Text style={{ marginLeft: 10 }}>
        {Math.round(((currentQuestion + 1) / maxLength) * 100)}%
      </Text>
    </View>
  );
};
