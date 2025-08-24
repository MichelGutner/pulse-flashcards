import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import React from "react";
import { CardBlurTemplate } from "../templates";
import { TCardProps } from "./types";

export const Card = ({ label, icon, number }: TCardProps) => {
  const { theme } = useThemeContext();
  const color = theme.colors.background;
  return (
    <CardBlurTemplate>
      <IconSymbol name={icon} size={18} color={color} />
      <Text style={{ color }} type="subtitle">
        {number}
      </Text>
      <Text style={{ color }} type="default">
        {label}
      </Text>
    </CardBlurTemplate>
  );
};
