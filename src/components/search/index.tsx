import { useThemeContext } from "@/src/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native";
import { CardBlurTemplate } from "../templates";

export type TSearchBarProps = React.ComponentProps<typeof TextInput>;

export const SearchBar = (props: TSearchBarProps) => {
  const { theme } = useThemeContext();

  return (
    <CardBlurTemplate
      style={{
        height: 40,
        flexDirection: "row",
      }}
      contentContainerStyle={{
        flex: 0,
      }}
    >
      <Ionicons name="search" size={16} color={theme.colors.outline} />
      <TextInput
        {...props}
        placeholder="Buscar..."
        placeholderTextColor={theme.colors.outline}
        style={{ flex: 1, marginLeft: 4, color: theme.colors.text }}
      />
    </CardBlurTemplate>
  );
};
