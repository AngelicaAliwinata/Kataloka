import { useEffect, useState } from "react";
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
import { getUserScore } from "@/app/api";
import { authAxiosInstance } from "@/lib/axios-client";
interface SubmissionModalProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export const ShowScoreModal = ({
  isModalVisible,
  setModalVisible,
}: SubmissionModalProps) => {
  const [totalScore, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const CloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Getting user score");
      const fetchScore = async () => {
        try {
          const res = await getUserScore({
            client: authAxiosInstance,
          });

          if (res.error) {
            console.log(res.error);
            setTimeout(fetchScore, 3000); // Retry after 3 seconds
            return;
          }

          console.log(res.data);
          setScore(res.data?.score ?? 0);
          setMaxScore(res.data?.totalScore ?? 0);
        } catch (error) {
          console.log(error);
          setTimeout(fetchScore, 3000); // Retry after 3 seconds
        }
      };

      fetchScore();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
              transform: "translateY(-40px)",
              marginHorizontal: 20,
              width: "100%",
            }}
          >
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

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
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

              <Text
                className=" text-base text-center"
                style={{
                  fontSize: 20,
                  lineHeight: 30,
                }}
              >
                Score: {totalScore}/{maxScore}
              </Text>
            </View>

            <View
              style={{
                transform: "translateY(20px)",
              }}
            >
              <TouchableOpacity
                className=" flex items-center rounded-lg justify-center w-max bg-dark-green"
                onPress={CloseModal}
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
          </View>
        </View>
      </View>
    </Modal>
  );
};
