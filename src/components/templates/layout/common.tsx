import { useThemeContext } from "@/src/context/ThemeContext";
import { PropsWithChildren } from "react";
import { View } from "react-native";

export const Layout = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeContext();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {children}
    </View>
  );
};
