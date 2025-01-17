import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Button,
} from "react-native";
import QuizMascot from "@/assets/images/cerdas-bersama/mascot-quiz.png";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { ShowScoreModal } from "@/components/cerdas-bersama/ending/score-modal";
import { getUserScore } from "../api";
import { authAxiosInstance } from "@/lib/axios-client";
import { useAuth } from "@/context/useAuth";
const EndingQuizScreen = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.replace("/(auth)/login");
  }

  function startQuiz() {
    router.replace("/cerdas-bersama/quiz");
  }

  async function showScore() {
    setOpenModal(true);
  }

  function backToHomepage() {
    router.replace("/");
  }

  return (
    <View
      style={{
        backgroundColor: Colors.creme,
        gap: 10,
        paddingTop: 30,
      }}
      className="text-center flex flex-col w-full h-screen items-center"
    >
      <Text
        className="text-brown font-bold text-2xl"
        style={{
          fontWeight: "700",
          fontSize: 28,
          lineHeight: 42,
        }}
      >
        Cerdas Bersama
      </Text>
      <Text
        className="text-base text-brown"
        style={{
          fontSize: 18,
          lineHeight: 28,
        }}
      >
        Ikuti tes untuk menguji kemampuanmu!
      </Text>

      <View
        className="flex flex-col"
        style={{
          flexDirection: "column",
          display: "flex",
          marginTop: 50,
          gap: 20,
        }}
      >
        <Image
          source={QuizMascot}
          style={{
            width: 173,
            height: 211,
          }}
        />
        <Text
          className="text-brown font-bold"
          style={{
            fontSize: 28,
            lineHeight: 42,
            textAlign: "center",
          }}
        >
          Tes Selesai!
        </Text>
        <TouchableOpacity
          className="rounded-lg"
          style={{
            paddingHorizontal: 52,
            paddingVertical: 13,
            backgroundColor: Colors["dark-green"],
          }}
          onPress={startQuiz}
        >
          <Text
            className="text-center text-base text-creme"
            style={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Ulangi Tes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg"
          style={{
            paddingHorizontal: 52,
            paddingVertical: 13,
            backgroundColor: Colors["dark-green"],
          }}
          onPress={showScore}
        >
          <Text
            className="text-center text-base text-creme"
            style={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Lihat Nilai
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg"
          style={{
            paddingHorizontal: 52,
            paddingVertical: 13,
            backgroundColor: Colors["dark-green"],
          }}
          onPress={backToHomepage}
        >
          <Text
            className="text-center text-base text-creme"
            style={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Kembali
          </Text>
        </TouchableOpacity>
      </View>
      <ShowScoreModal
        isModalVisible={openModal}
        setModalVisible={setOpenModal}
      />
    </View>
  );
};

export default EndingQuizScreen;
