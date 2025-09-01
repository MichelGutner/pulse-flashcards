import { Text } from "@/components/ThemedText";
import { ProgressBar } from "@/src/components/ProgressBar";
import { StyleSheet, View } from "react-native";

export const ProgressSection = ({
  currentIndex,
  totalCards,
}: {
  currentIndex: number;
  totalCards: number;
}) => {
  return (
    <View style={styles.container}>
      <Text type="bodyMedium">
        Cartão {currentIndex} de {totalCards}
      </Text>
      <ProgressBar progress={(currentIndex / totalCards) * 100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
