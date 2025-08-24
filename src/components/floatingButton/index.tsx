import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CardBlurTemplate } from "../templates";
import { TFloatingButtonProps } from "./types";

export const FloatingButton = ({ onPress }: TFloatingButtonProps) => {
  const { theme } = useThemeContext();
  const { bottom, right } = useSafeAreaInsets();
  return (
    <CardBlurTemplate
      contentContainerStyle={{
        flex: 0,
        ...styles.container,
        bottom: bottom + 60,
        right: right + 20,
      }}
      onPress={onPress}
    >
      <IconSymbol style={styles.icon} name="plus" color={theme.colors.text} />
    </CardBlurTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
