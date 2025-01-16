import { useState } from "react";
import { Modal, Text, View, TouchableOpacity, Image } from "react-native";

import Hat from "@/assets/images/cerdas-bersama/hat.png";
import Flower from "@/assets/images/cerdas-bersama/flower.png";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
interface ShowVideoWarningModalProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export const ShowVideoWarningModal = ({
  isModalVisible,
  setModalVisible,
}: ShowVideoWarningModalProps) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleShowNextModal = () => {
    setShowWarning(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowWarning(false);
    router.push("/cerdas-bersama/quiz");
  };

  const handleFinishAllModal = () => {
    setModalVisible(false);
    setShowWarning(false);
    router.replace("/(main)/cerdas-bersama-entry");
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
              transform: "translateY(-50px)",
              marginHorizontal: 20,

              width: "100%",
            }}
          >
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

            {showWarning ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: showWarning ? 0 : 10,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  className=" text-base text-center"
                  style={{
                    fontSize: 18,
                    lineHeight: 26,
                  }}
                >
                  Silahkan tonton video materi{"\n"}sebelum mengerjakan tes!
                </Text>
              </View>
            ) : (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: showWarning ? 0 : 10,
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
                    paddingVertical: 10,
                    fontSize: 18,
                    lineHeight: 26,
                  }}
                >
                  Apakah kamu sudah {"\n"}menonton video materi?
                </Text>
              </View>
            )}

            {showWarning ? (
              <View
                style={{
                  transform: "translateY(20px)",
                }}
              >
                <TouchableOpacity
                  className=" flex items-center rounded-lg justify-center w-max bg-dark-green"
                  onPress={handleFinishAllModal}
                  style={{
                    backgroundColor: Colors["dark-green"],
                    paddingHorizontal: 80,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base w-full">
                    Kembali
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
                  onPress={handleShowNextModal}
                  style={{
                    backgroundColor: Colors.pink,
                    paddingHorizontal: 37,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base">Belum</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className=" flex items-center rounded-lg justify-center w-max bg-dark-green"
                  onPress={handleCloseModal}
                  style={{
                    backgroundColor: Colors["dark-green"],
                    paddingHorizontal: 37,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base">Sudah</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
