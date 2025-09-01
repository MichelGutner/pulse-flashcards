import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeContext } from "@/src/context/ThemeContext";
import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export const AnimatedFlashcard = ({
  frontText,
  backText,
}: {
  frontText: string;
  backText: string;
}) => {
  const { theme } = useThemeContext();
  const rotate = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped((prev) => !prev);

    rotate.value = withTiming(flipped ? 0 : 180, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }, () => {
      rotate.value = withSpring(flipped ? 0 : 180, {
        damping: 15,
        stiffness: 120,
        mass: 0.8,
      });
    });
  };

  const frontStyle = useAnimatedStyle(() => {
    const scale = interpolate(rotate.value, [0, 90], [1, 0.94]);
    const tilt = interpolate(rotate.value, [0, 90], [0, 5]);
    return {
      transform: [
        { perspective: 2500 },
        { rotateY: `${rotate.value}deg` },
        { rotateX: `${tilt}deg` },
        { scale },
      ],
      opacity: interpolate(rotate.value, [0, 90], [1, 0]),
      backgroundColor: theme.colors.secondary,
      shadowOpacity: interpolate(rotate.value, [0, 90, 180], [0.3, 0.1, 0.3]),
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const scale = interpolate(rotate.value, [90, 180], [0.94, 1]);
    const tilt = interpolate(rotate.value, [90, 180], [5, 0]);
    return {
      transform: [
        { perspective: 2500 },
        { rotateY: `${rotate.value + 180}deg` },
        { rotateX: `${tilt}deg` },
        { scale },
      ],
      opacity: interpolate(rotate.value, [90, 180], [0, 1]),
      backgroundColor: theme.colors.outline,
      shadowOpacity: interpolate(rotate.value, [0, 90, 180], [0.3, 0.1, 0.3]),
    };
  });

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.container}>
        <Animated.View style={[styles.card, frontStyle]}>
          <Text type="defaultSemiBold">{frontText}</Text>
          <IconSymbol
            style={{ position: "absolute", bottom: 20, right: 20 }}
            name="hand.tap"
            color={theme.colors.text}
          />
        </Animated.View>

        <Animated.View style={[styles.card, backStyle]}>
          <Text type="defaultSemiBold">{backText}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    perspective: '2500',
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
});
