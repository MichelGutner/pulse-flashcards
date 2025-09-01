import { useThemeContext } from "@/src/context/ThemeContext";
import { StyleSheet, View } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";

export const ProgressBar = ({ progress }: { progress: number }) => {
  const { theme } = useThemeContext();
  const progressClamped = Math.min(Math.max(progress, 0), 100);

  return (
    <View
      style={[
        styles.progressBar,
        { backgroundColor: theme.colors.outline + "33" },
      ]}
    >
      <Animated.View
        entering={SlideInLeft.duration(800)}
        style={{
          width: `${progressClamped}%`,
          height: "100%",
          backgroundColor: theme.colors.primary,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
});
