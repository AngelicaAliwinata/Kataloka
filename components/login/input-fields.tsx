import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/useAuth";
import { useLoading } from "@/context/useLoading";
import { hexToRgba } from "@/utils/ColorHandler";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";

export const LoginInputFields = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();
  const { setLoading } = useLoading();
  async function Login() {
    const res = await login(email, password);
    
    if (res.ok) {
      router.push("/");
      return;
    }

    Alert.alert("Login Gagal", "Email atau Password Salah");
  }
  return (
    <View
      className="bg-light-green/20 p-10 rounded-xl flex flex-col gap-5"
      style={{
        backgroundColor: hexToRgba(Colors["light-green"], 0.2),
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        paddingHorizontal: 50,
        paddingVertical: 20,
      }}
    >
      <Text
        style={{
          color: Colors["dark-green"],
          textAlign: "center",
          fontWeight: 700,
          fontSize: 24,
          lineHeight: 36,
        }}
      >
        Selamat Datang {"\n"}Kembali
      </Text>
      <View
        className="flex flex-col gap-0"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        <Text>Email</Text>
        <TextInput
          placeholder="Masukkan Email anda"
          style={{
            borderWidth: 1,
            borderColor: Colors["dark-green"],
            backgroundColor: "#fff",
            borderRadius: 4,
            height: 34,
            padding: 2,
            color: Colors["dark-green"],
            maxWidth: 342,
            width: "100%",
            paddingLeft: 4,
            shadowColor: Colors["dark-green"],
            elevation: 4,
          }}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View
        className="flex flex-col gap-0"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        <Text
          style={{
            marginLeft: 2,
          }}
        >
          Kata Sandi
        </Text>
        <TextInput
          placeholder="Masukkan Kata sandi anda"
          style={{
            borderWidth: 1,
            borderColor: Colors["dark-green"],
            backgroundColor: "#fff",
            borderRadius: 4,
            height: 34,
            padding: 2,
            color: Colors["dark-green"],
            maxWidth: 342,
            width: "100%",
            paddingLeft: 4,
            shadowColor: Colors["dark-green"],
            elevation: 4,
          }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={Login}
        style={{
          backgroundColor: Colors["dark-green"],
          display: "flex",
          paddingVertical: 4,
          borderRadius: 6,
          width: "auto",
          marginTop: 15,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Masuk
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: Colors["light-green"],
          textAlign: "center",
        }}
      >
        Belum Punya Akun?{" "}
        <Link href={"/(auth)/signup"}>
          <Text
            className="font-bold"
            style={{
              fontWeight: "700",
            }}
          >
            Daftar
          </Text>
        </Link>
      </Text>
    </View>
  );
};
