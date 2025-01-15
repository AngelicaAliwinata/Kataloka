import { useState } from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";

export const SubmissionModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
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
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
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
  );
};
