import { NavigationButton } from "@/components/cerdas-bersama/quiz/navigation-button";
import { Option } from "@/components/cerdas-bersama/quiz/option";
import { ProgressBar } from "@/components/cerdas-bersama/quiz/progress-bar";
import { Question } from "@/components/cerdas-bersama/quiz/question";

import { QuestionPagination } from "@/components/cerdas-bersama/quiz/question-pagination";
import { SubmissionModal } from "@/components/cerdas-bersama/quiz/submission-validation-modal";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { getQuiz, GetQuizResponse } from "api/index";
import { useAuth } from "@/context/useAuth";
import { router } from "expo-router";
import { authAxiosInstance } from "@/lib/axios-client";
import { useLoading } from "@/context/useLoading";

interface Answer {
  question: string;
  status: "correct" | "wrong" | "unanswered";
}

const QuizScreen = () => {
  const [data, setData] = useState<GetQuizResponse | undefined>(undefined);
  const { setLoading, isLoading } = useLoading();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.dismissAll();
      router.replace("/login");
      return;
    }

    setLoading(true);
    getQuiz({ client: authAxiosInstance })
      .then((res) => {
        console.log("FINISHED FETCHING QUIZ");
        if (res.error) {
          console.error(res.error);
          setLoading(false);
          router.replace("/(main)/cerdas-bersama-entry");
          Alert.alert("Data gagal di proses", "Periksa koneksi internet anda");
          return;
        }

        setData(res.data);
        setSelectedAnswers(
          Array(res.data.length).fill({
            question: "",
            status: "unanswered",
          })
        );
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

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

  const maxLength = data ? data.length : 0;
  const definedData = data ?? [];

  if (!isLoading && (data?.length ?? 0) > 0) {
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
          maxLength={maxLength}
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
            <Question question={definedData[currentQuestion].question} />
          </View>

          {/* Options */}
          {definedData[currentQuestion].choice.map((option, index) => {
            const isSelected =
              selectedAnswers[currentQuestion].question === option;
            const isCorrect = index === definedData[currentQuestion].answerIdx;

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
            maxQuestion={definedData.length}
            currentQuestion={currentQuestion}
            onSelect={setCurrentQuestion}
            answeredNumbers={answeredNumbers()}
          />
          {/* Navigation by Button */}
          <NavigationButton
            currentQuestion={currentQuestion}
            totalQuestions={definedData.length}
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
          maxScore={definedData.length}
        />
      </ScrollView>
    );
  }
};

export default QuizScreen;
