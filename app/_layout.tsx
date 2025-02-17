import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";

import { SafeAreaView } from "react-native-safe-area-context";

import { AuthProvider } from "@/context/useAuth";
import { TopBar } from "@/components/nav/home-topbar";
import { Colors } from "@/constants/Colors";
import { LoadingProvider } from "@/context/useLoading";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <LoadingProvider>
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(main)" options={{ headerShown: false }} />
            <Stack.Screen
              name="profile"
              options={{
                headerBackVisible: false,
                header: () => <TopBar linkVisibility={false} />,
              }}
            />
            <Stack.Screen
              name="ruang-belajar"
              options={{
                header: () => (
                  <TopBar
                    linkTitle="Profile"
                    linkVisibility={true}
                    linkHref={"/profile"}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="cerdas-bersama"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="katapedia"
              options={{
                header: () => (
                  <TopBar
                    linkTitle="Profile"
                    linkVisibility={true}
                    linkHref={"/profile"}
                  />
                ),
              }}
            />

            <Stack.Screen name="+not-found" />
          </Stack>
        </LoadingProvider>
      </SafeAreaView>
    </AuthProvider>
  );
}
