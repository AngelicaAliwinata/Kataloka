import { View, Text, TouchableOpacity } from "react-native";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  allAnswered: boolean;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export const NavigationButton = ({
  currentQuestion,
  totalQuestions,
  allAnswered,
  onNext,
  onPrev,
  onSubmit,
}: NavigationButtonsProps) => {
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
        style={{
          padding: 15,
          backgroundColor: "#76BA99",
          borderRadius: 8,
          flex: 1,
          marginRight: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Sebelumnya</Text>
      </TouchableOpacity>

      {allAnswered ? (
        <TouchableOpacity
          onPress={onSubmit}
          style={{
            padding: 15,
            backgroundColor: "#76BA99",
            borderRadius: 8,
            flex: 1,
            marginLeft: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Selesai</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onNext}
          style={{
            padding: 15,
            backgroundColor: "#76BA99",
            borderRadius: 8,
            flex: 1,
            marginLeft: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            Selanjutnya
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
