import TopBar from "@/components/nav/topbar";
import { Stack } from "expo-router";

const CerdasBersamaLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="onquiz"
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
