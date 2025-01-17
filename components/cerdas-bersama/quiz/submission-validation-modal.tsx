import { useState } from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import Hat from "@/assets/images/cerdas-bersama/hat.png";
import Flower from "@/assets/images/cerdas-bersama/flower.png";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { updateUser, updateUserScore } from "@/app/api";
import { authAxiosInstance } from "@/lib/axios-client";
interface SubmissionModalProps {
  totalScore: number;
  maxScore: number;
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export const SubmissionModal = ({
  totalScore,
  isModalVisible,
  setModalVisible,
  maxScore,
}: SubmissionModalProps) => {
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleShowTotalScore = () => {
    setShowScore(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowScore(false);
  };

  const handleFinishViewingScore = async () => {
    const res = await updateUserScore({
      client: authAxiosInstance,
      body: {
        score: totalScore,
      },
    });
    console.log("Score updated", res.error);

    // @ts-expect-error - ignore
    while (res.error.error.startsWith("Cannot perform I/O on behalf of a ")) {
      console.log("Retrying update score");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const res = await updateUserScore({
        client: authAxiosInstance,
        body: {
          score: totalScore,
        },
      });

      console.log("Score updated", res.error);
      if (!res.error) {
        break;
      }
    }

    setModalVisible(false);
    setShowScore(false);
    router.replace("/cerdas-bersama/ending");
  };

  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 50,
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View className="w-fit h-fit  rounded-xl items-center bg-white relative flex ">
          <View
            className="w-full items-center flex flex-col"
            style={{
              transform: showScore ? "translateY(-40px)" : "translateY(-50px)",
              marginHorizontal: 20,

              width: "100%",
            }}
          >
            {showScore ? (
              <Image
                source={Flower}
                alt={"Flower Logo"}
                width={60}
                height={60}
                style={{
                  width: 107,
                  height: 120,
                }}
              />
            ) : (
              <Image
                source={Hat}
                alt={"Hat Logo"}
                width={180}
                height={100}
                style={{
                  width: 180,
                  height: 100,
                }}
              />
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: showScore ? 0 : 10,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                className="text-center font-bold text-brown text-2xl"
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  lineHeight: 36,
                  textAlign: "center",
                }}
              >
                Konfirmasi!
              </Text>

              {showScore ? (
                <Text
                  className=" text-base text-center"
                  style={{
                    fontSize: 20,
                    lineHeight: 30,
                  }}
                >
                  Score: {totalScore}/{maxScore}
                </Text>
              ) : (
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <Text
                    className=" text-base text-center"
                    style={{
                      fontSize: 18,
                      lineHeight: 26,
                    }}
                  >
                    Apakah kamu yakin ingin {"\n"}menyelesaikan tes?
                  </Text>
                  <Text
                    className=" text-base text-center"
                    style={{
                      paddingVertical: 10,
                      fontSize: 18,
                      lineHeight: 26,
                    }}
                  >
                    Nilai akan langsung keluar{"\n"}setelah ini.
                  </Text>
                </View>
              )}
            </View>
            {showScore ? (
              <View
                style={{
                  transform: "translateY(20px)",
                }}
              >
                <TouchableOpacity
                  className=" flex items-center rounded-lg justify-center w-max bg-dark-green"
                  onPress={handleFinishViewingScore}
                  style={{
                    backgroundColor: Colors["dark-green"],
                    paddingHorizontal: 80,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base w-full">
                    Selesai
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                className="flex flex-row justify-around w-full gap-5 "
                style={{
                  transform: "translateY(30px)",
                }}
              >
                <TouchableOpacity
                  className="flex w-max rounded-lg bg-pink"
                  onPress={handleCloseModal}
                  style={{
                    backgroundColor: Colors.pink,
                    paddingHorizontal: 37,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base">Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className=" flex items-center rounded-lg justify-center w-max bg-dark-green"
                  onPress={handleShowTotalScore}
                  style={{
                    backgroundColor: Colors["dark-green"],
                    paddingHorizontal: 37,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base">
                    Selesai
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
