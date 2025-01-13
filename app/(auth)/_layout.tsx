import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import TopBar from "../components/nav/topbar";
import { Colors } from "@/constants/Colors";

export default function AuthLayout() {
  return (
    
      <Stack
        screenOptions={{
          headerBackVisible: false,
          headerStyle: {},
        }}
      >
        <Stack.Screen
          name="signup"
          options={{
            header: () => (
              <TopBar linkTitle={"Masuk"} linkHref={"/(auth)/login"} />
            ),
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            header: () => (
              <TopBar linkTitle={"Daftar"} linkHref={"/(auth)/signup"} />
            ),
          }}
        />
      </Stack>
    
  );
}
