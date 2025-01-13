import { Image, TextInput, View, Text, Pressable, Modal } from "react-native";
import ProfileIcon from "@/assets/images/profil.png";
import { useState } from "react";
import Lock from "@/assets/images/profile/lock.png";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
interface ProfileProps {
  fullname: string;
  email: string;
}
export const ProfileInputFields = (props: ProfileProps) => {
    const router = useRouter();
  const [fullname, setFullName] = useState(props.fullname);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState("Placeholder");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [openModal, setOpenModal] = useState(false);

  function onChangePassword(text: string) {
    if (password == "Placeholder") {
      setPassword("");
    }
    setPassword(text);
  }

  function SaveData() {
    setOpenModal(true);
  }

  function Quit() {
    router.replace('/')
  }

  function ConfirmSave() {
    setOpenModal(false);
  }

  function CancelSave() {
    setOpenModal(false);
  }

  return (
    <View className="bg-light-green/20 p-10 rounded-xl flex flex-col gap-5 items-center w-full">
      <Image
        width={183}
        height={183}
        style={{
          width: 183,
          height: 183,
        }}
        source={ProfileIcon}
      />
      <View className="w-full flex flex-col gap-5 ">
        <View className="flex flex-col gap-0 w-full">
          <Text>Nama Lengkap</Text>
          <TextInput
            placeholder="Masukkan Nama Lengkap baru"
            className="border-[1px] border-[#b0b0b0] bg-white rounded-[8px] h-[48px] p-2 text-[#888888] max-w-[342px] w-full pl-4"
            value={fullname}
            onChangeText={setFullName}
          />
        </View>
        <View className="flex flex-col gap-0">
          <Text>Email</Text>
          <TextInput
            placeholder="Masukkan Email baru"
            className="border-[1px] border-[#b0b0b0] bg-white rounded-[8px] h-[48px] p-2 text-[#888888] max-w-[342px] w-full  pl-4 flex-wrap"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View className="flex flex-col gap-0">
          <Text>Kata Sandi</Text>
          <TextInput
            placeholder="Masukkan Kata sandi baru"
            className="border-[1px] border-[#b0b0b0] bg-white rounded-[8px] h-[48px] p-2 text-[#888888] max-w-[342px] w-full pl-4 "
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
          />
        </View>
        <View className="min-w-full flex flex-col gap-5">
          <Pressable
            onPress={SaveData}
            className="bg-dark-green  text-center flex justify-center items-center py-2 rounded-lg w-max border-dark-green border shadow-lg"
            style={{
              borderWidth: 1,
              shadowColor: Colors["dark-green"],
            }}
          >
            <Text className="text-white font-bold text-center">
              Simpan Perubahan
            </Text>
          </Pressable>
          <Pressable
            onPress={Quit}
            className="bg-pink text-center flex justify-center items-center py-2 rounded-lg w-max border-dark-green"
            style={{
              backgroundColor: Colors.pink,
              borderWidth: 1,
            }}
          >
            <Text className="text-white font-bold text-center">Keluar</Text>
          </Pressable>
        </View>
      </View>
      <Modal
        visible={openModal}
        className="h-screen w-screen flex-1"
        transparent={true}
      >
        <View
          className="flex flex-1 h-screen w-screen justify-center items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            paddingHorizontal: 40,
          }}
        >
          <View className="w-max h-max  rounded-xl items-center px-10 bg-white relative flex">
            <View
              className="w-full items-center flex flex-col"
              style={{
                transform: "translateY(-40px)",
                paddingHorizontal: 20,
                gap: 10,
              }}
            >
              <Image
                source={Lock}
                alt="Lock Confirmation"
                width={60}
                height={60}
                style={{
                  width: 72,
                  height: 72,
                }}
              />
              <Text className="text-center font-bold text-brown text-2xl">
                Konfirmasi!
              </Text>
              <Text
                className="max-w-14 text-base text-center"
                style={{
                  maxWidth: 220,
                  paddingVertical: 10,
                }}
              >
                Silahkan masukkan kata sandimu saat ini!
              </Text>
              <TextInput
                placeholder="Kata Sandi saat ini"
                className="border-[1px] border-dark-green bg-white rounded-[8px] h-[48px] p-2 text-[#888888] w-max pl-4 "
                style={{
                  width: 225,
                }}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                secureTextEntry
              />
              <View
                className="flex flex-row justify-evenly w-full gap-5 "
                style={{
                  marginTop: 10,
                }}
              >
                <Pressable
                  className="flex w-max rounded-lg bg-pink"
                  onPress={ConfirmSave}
                  style={{
                    backgroundColor: Colors.pink,
                    paddingHorizontal: 37,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base">Batal</Text>
                </Pressable>
                <Pressable
                  className=" flex items-center rounded-lg justify-center w-max bg-dark-green"
                  onPress={CancelSave}
                  style={{
                    backgroundColor: Colors["dark-green"],
                    paddingHorizontal: 37,
                    paddingVertical: 10,
                  }}
                >
                  <Text className="text-creme font-bold text-base">Ubah</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
