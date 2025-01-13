import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, View } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeIcon from "@/assets/images/bottom-bar/beranda.svg";
import CerdasIcon from "@/assets/images/bottom-bar/cerdas-bersama.png";
import RuangBelajarIcon from "@/assets/images/bottom-bar/ruang-belajar.png";
import KatapediaIcon from "@/assets/images/bottom-bar/katapedia.png";
import TopBar from "../../components/nav/topbar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.creme,
        header: () => <TopBar linkTitle={"Profile"} linkHref={"/(auth)/login"} />,
        tabBarBackground: TabBarBackground,

        tabBarStyle: {
          backgroundColor: Colors["light-green"],
          paddingVertical: 10,
          paddingTop: 15,
          minHeight: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "rgba(0, 0, 0, 0.2)" : "transparent",
                borderRadius: 10,
                padding: 8,
              }}
            >
              <HomeIcon
                width={35}
                height={30}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="katapedia"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "rgba(0, 0, 0, 0.2)" : "transparent",
                borderRadius: 10,
                padding: 8,
              }}
            >
              <Image
                source={KatapediaIcon}
                width={35}
                height={30}
                style={{
                  width: 35,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ruang-belajar"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "rgba(0, 0, 0, 0.2)" : "transparent",
                borderRadius: 10,
                padding: 8,
              }}
            >
              <Image
                source={RuangBelajarIcon}
                width={35}
                height={30}
                style={{
                  width: 35,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cerdas-bersama"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "rgba(0, 0, 0, 0.2)" : "transparent",
                borderRadius: 10,
                padding: 8,
              }}
            >
              <Image
                source={CerdasIcon}
                width={35}
                height={30}
                style={{
                  width: 35,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
