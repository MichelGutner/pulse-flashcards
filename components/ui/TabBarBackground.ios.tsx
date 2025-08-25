import { useThemeContext } from "@/src/context/ThemeContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet } from "react-native";

export default function BlurTabBarBackground() {
  const isIOS = Platform.OS === "ios";
  const { isDark } = useThemeContext();

  return (
    <BlurView
      tint={
        !isDark ? "systemUltraThinMaterialLight" : "systemThickMaterialDark"
      }
      intensity={isIOS ? 30 : 100}
      style={StyleSheet.absoluteFill}
    />
  );
}

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}
