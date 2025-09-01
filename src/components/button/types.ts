import { SFSymbol } from "expo-symbols";
import { ViewStyle } from "react-native";

export type TButtonProps = {
  variant: "primary" | "secondary" | "alert" | "error" | "success" | "warning";
  title: string;
  iconName?: SFSymbol;
  onPress?: VoidFunction;
  style?: ViewStyle | ViewStyle[];
};
