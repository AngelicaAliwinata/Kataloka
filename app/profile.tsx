import { View } from "react-native";
import { ProfileInputFields } from "./components/profile/input-fields";

const ProfileScreen = () => {
  return (
    <View style={{
        paddingTop: 40,
        paddingHorizontal: 30
    }} className="flex items-center h-full flex-1 bg-creme ">
      <ProfileInputFields fullname={"TEST"} email={"test@gmail.com"} />
    </View>
  );
};

export default ProfileScreen;
