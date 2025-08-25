import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import { StyleSheet, View } from "react-native";
import { Button } from "../button";
import { TEmptyStateProps } from "./types";

export const EmptyState = ({
  title,
  actionLabel,
  description,
  onActionPress,
}: TEmptyStateProps) => {
  const { theme } = useThemeContext();
  return (
    <View style={styles.container}>
      <IconSymbol name="book" color={theme.colors.outline} size={50} />
      <Text type="subtitle" textBreakStrategy="highQuality">
        {title}
      </Text>
      {description && (
        <Text
          type="bodyMedium"
          textBreakStrategy="highQuality"
        >
          {description}
        </Text>
      )}
      <Button title={actionLabel} variant="primary" onPress={onActionPress} iconName="plus" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
