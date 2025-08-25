import { Text as RNText, StyleSheet, type TextProps } from "react-native";

import { useThemeContext } from "@/src/context/ThemeContext";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "button"
    | "bodyMedium"
    | "bodySmall"
    | "thinySmall";
};

export function Text({ style, type = "default", ...rest }: ThemedTextProps) {
  const { theme } = useThemeContext();

  return (
    <RNText
      style={[
        { color: theme.colors.text },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "button" ? styles.button : undefined,
        type === "bodyMedium" ? styles.bodyMedium : undefined,
        type === "bodySmall" ? styles.bodySmall : undefined,
        type === "thinySmall" ? styles.thinySmall : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  thinySmall: {
    fontSize: 10,
    lineHeight: 14,
  },
});
