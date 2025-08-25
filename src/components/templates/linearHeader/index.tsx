import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const LinearHeader = ({
  children,
  title,
  subtitle,
  showBackButton = false,
}: {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
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
      {showBackButton && (
        <TouchableOpacity
          style={{ position: "absolute", left: 12, top: top + 12, zIndex: 1 }}
          hitSlop={16}
          onPress={router.back}
        >
          <IconSymbol name="chevron.left" color={theme.colors.text} />
        </TouchableOpacity>
      )}
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
    padding: 12,
  },
  headerTextContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
});
