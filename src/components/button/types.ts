import { SFSymbol } from "expo-symbols";

export type TButtonProps = {
  variant: "primary" | "secondary" | "alert" | "error" | "success";
  title: string;
  iconName?: SFSymbol;
  onPress?: VoidFunction;
};
