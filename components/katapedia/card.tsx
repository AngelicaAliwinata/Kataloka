import { Image, TouchableOpacity } from "react-native";
import KartuKatapedia from "@/assets/images/kartu-katapedia.png";
import { router } from "expo-router";

interface KatapediaCardProps {
  name: string;
  category: string;
  spelling: string;
  definition: string;
  fact: string;
}

export const KatapediaCard = (props: KatapediaCardProps) => {
  function OpenCard() {
    router.navigate({
      pathname: "/katapedia/detail-katapedia",
      params: {
        name: props.name,
        category: props.category,
        spelling: props.spelling,
        definition: props.definition,
        fact: props.fact,
      },
    });
  }
  return (
    <TouchableOpacity onPress={OpenCard}>
      <Image
        style={{
          width: 148,
          height: 196,
        }}
        source={KartuKatapedia}
      />
    </TouchableOpacity>
  );
};
