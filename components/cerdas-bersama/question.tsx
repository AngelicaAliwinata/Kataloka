import { Text } from "react-native";
interface QuestionProps {
  question: string;
}

export const Question = ({ question }: QuestionProps) => {
  return <Text className="text-lg font-bold mb-20" style={{
    marginBottom: 20
  }}>{question}</Text>;
};
