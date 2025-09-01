import { Text } from "@/components/ThemedText";
import { useThemeContext } from "@/context/ThemeContext";
import { CardBlurTemplate } from "@/src/components/templates";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TFlashcardProps } from "./types";

export const Flashcard = ({ question, answer, onPress }: TFlashcardProps) => {
  const { theme } = useThemeContext();

  return (
    <CardBlurTemplate contentContainerStyle={{ flex: 0 }} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.colunmContainer}>
          <Text type="defaultSemiBold" numberOfLines={1}>
            {question}
          </Text>
          <Text
            numberOfLines={2}
            type="bodySmall"
            style={{ color: theme.colors.outline }}
          >
            <Text type="bodySmall">Resposta: </Text>
            {answer}
          </Text>
        </View>
      </View>
    </CardBlurTemplate>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 1,
  },
  colunmContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
