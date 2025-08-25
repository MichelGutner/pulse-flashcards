import { useThemeContext } from "@/src/context/ThemeContext";
import React from "react";
import { StyleSheet, View } from "react-native";

const SettingsScreen = () => {
  const { theme } = useThemeContext();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
