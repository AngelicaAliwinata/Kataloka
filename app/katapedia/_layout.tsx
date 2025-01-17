import { Stack } from "expo-router";
import { View } from "react-native"

const KatapediaLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="detail-katapedia" options={{headerShown : false}}>

            </Stack.Screen>
        </Stack>
    )
}

export default KatapediaLayout;