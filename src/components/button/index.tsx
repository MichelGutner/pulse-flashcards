import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import { AppTheme } from "@/src/theme/theme";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TButtonProps } from "./types";

const useButtonStyles = (variant: TButtonProps["variant"], theme: AppTheme) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: theme.colors.secondary,
      };
    case "secondary":
      return {
        backgroundColor: "transparent",
        borderColor: theme.colors.onBackground,
        borderWidth: 0.2,
      };
    case "alert":
      return {
        backgroundColor: "#ffc107",
      };
    case "error":
      return {
        backgroundColor: "#dc3545",
      };
    case "success":
      return {
        backgroundColor: "#28a745",
      };
    default:
      return {
        backgroundColor: "#007bff",
      };
  }
};

export const Button = ({ variant, iconName, title, onPress }: TButtonProps) => {
  const { theme } = useThemeContext();
  const buttonStyles = useButtonStyles(variant, theme);

  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, buttonStyles]}
    >
      {iconName && <IconSymbol name={iconName} size={20} color="white" />}
      <Text style={{ color: theme.colors.background }} type="button">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
});
