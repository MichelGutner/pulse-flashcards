import { Layout } from "@/src/components/templates";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { AnimatedFlashcard } from "./components";

export const PracticeScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("🚀 ~ PracticeScreen ~ id:", id);
  return (
    <Layout>
      <View style={style.container}>
        <AnimatedFlashcard frontText="Front Side" backText="Back Side" />
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    }
});