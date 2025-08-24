import { useThemeContext } from "@/src/context/ThemeContext";
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";

export const LayoutWithSafeArea = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeContext();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};
