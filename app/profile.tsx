import { View } from "react-native";
import { ProfileInputFields } from "../components/profile/input-fields";
import { useAuth } from "@/context/useAuth";
import { router } from "expo-router";
import { useEffect } from "react";

const ProfileScreen = () => {
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.dismissAll();
      router.replace("/(auth)/login");
    }
  },[])


  return (
    <View
      style={{
        paddingTop: 40,
        paddingHorizontal: 30,
      }}
      className="flex items-center h-full flex-1 bg-creme "
    >
      <ProfileInputFields />
    </View>
  );
};

export default ProfileScreen;
