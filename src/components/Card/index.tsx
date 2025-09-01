import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import React from "react";
import { View } from "react-native";
import { CardBlurTemplate } from "../templates";
import { TCardProps } from "./types";

export const Card = ({ label, icon, number }: TCardProps) => {
  const { theme } = useThemeContext();
  const color = theme.colors.background;
  return (
    <CardBlurTemplate>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <IconSymbol name={icon} size={18} color={color} />
        <Text style={{ color }} type="bodySmall">
          {label}
        </Text>
      </View>
      <Text style={{ color }} type="default">
        {number}
      </Text>
    </CardBlurTemplate>
  );
};
