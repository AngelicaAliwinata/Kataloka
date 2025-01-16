import { NavigationButton } from "@/components/cerdas-bersama/quiz/navigation-button";
import { Option } from "@/components/cerdas-bersama/quiz/option";
import { ProgressBar } from "@/components/cerdas-bersama/quiz/progress-bar";
import { Question } from "@/components/cerdas-bersama/quiz/question";

import { QuestionPagination } from "@/components/cerdas-bersama/quiz/question-pagination";
import { SubmissionModal } from "@/components/cerdas-bersama/quiz/submission-validation-modal";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";

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
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
  {
    question: "Manakah penulisan kata yang salah?",
    options: ["Berjalan-jalan", "Mengkonsumsi", "Memperhatikan", "Tertawa"],
    correctAnswer: "Mengkonsumsi",
  },
];

interface Answer {
  question: string;
  status: "correct" | "wrong" | "unanswered";
}

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>(
    Array(data.length).fill({
      question: "",
      status: "unanswered",
    })
  );

  const handleAnswer = (option: string, status: "correct" | "wrong") => {
    if (selectedAnswers[currentQuestion].status !== "unanswered") return;

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = {
      question: option,
      status: status,
    };

    // Update the list where storing which number already done
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const answeredNumbers = () => {
    const value: Number[] = [];
    let number = 0;
    selectedAnswers.forEach((element) => {
      if (element.status !== "unanswered") {
        value.push(number);
      }
      number++;
    });

    return value;
  };

  const totalScore = () => {
    const data = selectedAnswers.filter(
      (answer) => answer.status === "correct"
    );
    return data.length;
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 10,
        padding: 20,
        backgroundColor: Colors.creme,
      }}
    >
      {/* Progress Bar */}
      <ProgressBar
        currentQuestion={answeredNumbers.length}
        maxLength={data.length}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 50,
        }}
      >
        {/* Question */}
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Question question={data[currentQuestion].question} />
        </View>

        {/* Options */}
        {data[currentQuestion].options.map((option, index) => {
          const isSelected =
            selectedAnswers[currentQuestion].question === option;
          const isCorrect = option === data[currentQuestion].correctAnswer;

          return (
            <Option
              key={index}
              option={option}
              isSelected={isSelected}
              isAnswered={
                selectedAnswers[currentQuestion].status !== "unanswered"
              }
              isCorrect={isCorrect}
              onSelect={() =>
                handleAnswer(option, isCorrect ? "correct" : "wrong")
              }
            />
          );
        })}
        {/* Navigation by Pagination */}
        <QuestionPagination
          maxQuestion={data.length}
          currentQuestion={currentQuestion}
          onSelect={setCurrentQuestion}
          answeredNumbers={answeredNumbers()}
        />
        {/* Navigation by Button */}
        <NavigationButton
          currentQuestion={currentQuestion}
          totalQuestions={data.length}
          onNext={() => setCurrentQuestion((prev) => prev + 1)}
          onPrev={() => setCurrentQuestion((prev) => prev - 1)}
          onSubmit={() => handleSubmit()}
        />
      </View>

      {/* Modal */}
      <SubmissionModal
        totalScore={totalScore()}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        maxScore={data.length}
      />
    </ScrollView>
  );
};

export default QuizScreen;
