import { StyleSheet, Image, Platform, View, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useEffect, useState } from "react";
import { getQuiz, GetQuizResponse } from "../api";
import { authAxiosInstance } from "@/lib/axios-client";
import { useAuth } from "@/context/useAuth";
import { useRouter } from "expo-router";

export default function CerdasBersamaScreen() {
  const [data, setData] = useState<GetQuizResponse | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }
    getQuiz({ client: authAxiosInstance }).then((res) => {
      if (res.error) {
        console.error(res.error);
        setLoading(false);
        return;
      }

      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <ThemedView>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <View>
      <Text>Sudah loading nih!</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
