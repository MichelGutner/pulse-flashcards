import { BlurView } from "expo-blur";
import React, { PropsWithChildren } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

export const CardBlurTemplate = ({
  children,
  style,
  onPress,
  contentContainerStyle,
}: PropsWithChildren<{
  style?: ViewStyle;
  onPress?: () => void;
  contentContainerStyle?: ViewStyle;
}>) => {
  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    onPress?.();
  };
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={handlePress}
      style={[styles.content, contentContainerStyle]}
    >
      <BlurView
        tint="systemUltraThinMaterialLight"
        intensity={20}
        style={[styles.container, style]}
      >
        {children}
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 4,
  },
  content: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
});
