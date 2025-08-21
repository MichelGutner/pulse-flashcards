import { BlurView } from "expo-blur";
import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

export const CardTemplate = ({ children }: PropsWithChildren) => {
  return (
    <BlurView
      tint="systemUltraThinMaterialLight"
      intensity={40}
      style={styles.container}
    >
      {children}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    overflow: "hidden",
    gap: 4,
  },
});
