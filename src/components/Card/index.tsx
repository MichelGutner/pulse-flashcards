import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import React from "react";
import { StyleSheet } from "react-native";
import { CardTemplate } from "../templates";
import { TCardProps } from "./types";

export const Card = ({ label, icon, number }: TCardProps) => {
  const { theme } = useThemeContext();
  const color = theme.colors.text;
  return (
    <CardTemplate>
      <IconSymbol name={icon} size={20} color={color} />
      <Text type="subtitle">
        {number}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </CardTemplate>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
});
