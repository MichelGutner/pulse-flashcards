import { Text } from "@/components/ThemedText";
import { useThemeContext } from "@/src/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const LinearHeader = ({
  children,
  title,
  subtitle,
}: {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}) => {
  const { theme } = useThemeContext();
  const { top } = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[theme.colors.primary, theme.colors.secondary]}
      style={[
        styles.headerContainer,
        { backgroundColor: theme.colors.background, paddingTop: top },
      ]}
    >
      <View style={styles.headerTextContent}>
        <Text type="subtitle">{title}</Text>
        <Text type="default">{subtitle}</Text>
      </View>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    gap: 12,
    paddingBottom: 12,
  },
  headerTextContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: "center",
  },
});
