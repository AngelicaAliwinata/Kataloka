import { TopBar } from "@/components/nav/topbar";
import { Stack } from "expo-router";

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
