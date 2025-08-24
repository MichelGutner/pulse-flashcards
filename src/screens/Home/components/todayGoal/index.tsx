import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CardBlurTemplate } from "@/src/components/templates";
import { useThemeContext } from "@/src/context/ThemeContext";
import { StyleSheet, View } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { TTodayGoalProps } from "./types";

export const TodayGoal = ({ total, progress }: TTodayGoalProps) => {
  const { theme } = useThemeContext();
  const progressTotal = (progress * 100) / total;

  return (
    <CardBlurTemplate style={styles.container}>
      <View style={styles.headerContainer}>
        <IconSymbol name="calendar" color={theme.colors.secondary} />
        <Text type="subtitle">Meta do Dia</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text type="bodyMedium">Progresso diário</Text>
        <Text type="bodyMedium" style={{ color: theme.colors.outline }}>
          5/20 cards
        </Text>
      </View>
      <View
        style={[
          styles.progressBar,
          { backgroundColor: theme.colors.outlineVariant },
        ]}
      >
        <Animated.View
        entering={SlideInLeft.duration(800)}
          style={{
            width: `${progressTotal}%`,
            height: "100%",
            backgroundColor: theme.colors.primary,
          }}
        />
      </View>
      <Text type="bodySmall" style={{ color: theme.colors.outline }}>
        Faltam 15 cards para completar sua meta
      </Text>
    </CardBlurTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    gap: 12,
  },
  headerContainer: {
    flexDirection: "row",
    gap: 8,
  },
  progressContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressBar: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
});
