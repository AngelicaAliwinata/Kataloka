import { TopBar } from "@/components/nav/home-topbar";
import { Stack } from "expo-router";

const CerdasBersamaLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="quiz"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ending"
        options={{
          header: () => <TopBar linkHref={"/profile"} linkTitle="Profile" />,
        }}
      />
    </Stack>
  );
};

export default CerdasBersamaLayout;
