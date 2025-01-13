import { ProgressBar } from "@/components/cerdas-bersama/progress-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

const data = [
  {
    question: "Manakah penulisan kata yang sesuai dengan EYD?",
    options: [
      "Memperhatikan",
      "Memperhatikkan",
      "Memerhatikan",
      "Memperhati-kan",
    ],
    correctAnswer: "Memperhatikan",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
];

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(data.length).fill("")
  );
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAnswer = (option: string) => {
    if (selectedAnswers[currentQuestion]) return; // Lock the option once answered

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);

    // Automatically proceed to the next question if available
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const allAnswered = selectedAnswers.every((answer) => answer !== "");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F3F4ED" }}>
      {/* Progress Bar */}
      <ProgressBar currentQuestion={currentQuestion} maxLength={data.length} />
      {/* Question */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        {data[currentQuestion].question}
      </Text>

      {/* Options */}
      {data[currentQuestion].options.map((option, index) => {
        const isSelected = selectedAnswers[currentQuestion] === option;
        const isCorrect = option === data[currentQuestion].correctAnswer;
        const isIncorrect = isSelected && !isCorrect;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(option)}
            disabled={!!selectedAnswers[currentQuestion]} // Disable once an answer is selected
            style={{
              padding: 15,
              borderWidth: 1,
              borderColor: isSelected
                ? isCorrect
                  ? "#76BA99"
                  : "#FF6B6B"
                : "#D9D9D9",
              borderRadius: 8,
              backgroundColor: isSelected
                ? isCorrect
                  ? "#E9F6F1"
                  : "#FFE9E9"
                : "#FFFFFF",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Navigation Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => setCurrentQuestion(Math.max(currentQuestion - 1, 0))}
          style={{
            padding: 15,
            backgroundColor: "#76BA99",
            borderRadius: 8,
            flex: 1,
            marginRight: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            Sebelumnya
          </Text>
        </TouchableOpacity>

        {allAnswered ? (
          <TouchableOpacity
            onPress={handleSubmit}
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
              Selesai
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              setCurrentQuestion(Math.min(currentQuestion + 1, data.length - 1))
            }
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

      {/* Modal */}
      <Modal visible={isModalVisible} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#FFFFFF",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}
            >
              Konfirmasi!
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
              Apakah kamu yakin ingin menyelesaikan tes? Nilai akan langsung
              keluar setelah ini.
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={closeModal}
                style={{
                  flex: 1,
                  padding: 15,
                  backgroundColor: "#FF6B6B",
                  borderRadius: 8,
                  marginRight: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Batal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={closeModal}
                style={{
                  flex: 1,
                  padding: 15,
                  backgroundColor: "#76BA99",
                  borderRadius: 8,
                  marginLeft: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Selesai
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuizScreen;
