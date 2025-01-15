import { Option } from "@/components/cerdas-bersama/option";
import { ProgressBar } from "@/components/cerdas-bersama/progress-bar";
import { Question } from "@/components/cerdas-bersama/Question";
import { Colors } from "@/constants/Colors";
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

  const handleAnswer = (option: string) => {
    if (selectedAnswers[currentQuestion]) return; // Lock the option once answered

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);
    
  };

  const allAnswered = selectedAnswers.every((answer) => answer !== "");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: Colors.creme }}>
      {/* Progress Bar */}
      <ProgressBar currentQuestion={currentQuestion} maxLength={data.length} />
      {/* Question */}
      <Question question={data[currentQuestion].question} />

      {/* Options */}
      {data[currentQuestion].options.map((option, index) => {
        const isSelected = selectedAnswers[currentQuestion] === option;
        const isCorrect = option === data[currentQuestion].correctAnswer;

        return (
          <Option
            key={index}
            option={option}
            isSelected={isSelected}
            isCorrect={isCorrect}
            onSelect={() =>
              handleAnswer(option)
            }
          />
        );
        ``;
      })}

      {/* Navigation Buttons */}

      {/* Modal */}
    </View>
  );
};

export default QuizScreen;
