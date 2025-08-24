import { Text } from "@/components/ThemedText";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CardBlurTemplate } from "../templates";
import { TDeckCardProps } from "./types";

export const DeckCard = ({
  title,
  description,
  cardCount,
  learnedCount = 0,
  onPress,
}: TDeckCardProps) => {
  const { theme } = useThemeContext();

  const percentLearned =
    cardCount > 0 ? Math.round((learnedCount / cardCount) * 100) : 0;

  return (
    <CardBlurTemplate contentContainerStyle={{ flex: 0 }} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.rowContainer}>
          <View style={styles.colunmContainer}>
            <Text type="defaultSemiBold" numberOfLines={1}>
              {title}
            </Text>
            {description && (
              <Text
                type="bodyMedium"
                style={{ color: theme.colors.outline }}
                numberOfLines={1}
              >
                {description}
              </Text>
            )}
            <Text type="bodyMedium" style={{ color: theme.colors.outline }}>
              Estudados: {learnedCount}
            </Text>
            <Text type="bodySmall" style={{ color: theme.colors.outline }}>
              Criado em: {new Date().toLocaleDateString()}
            </Text>
          </View>
          <View style={[styles.colunmContainer, { alignItems: "flex-end" }]}>
            <Text
              type="defaultSemiBold"
              style={{ color: theme.colors.secondary }}
            >
              {cardCount}
            </Text>
            <Text type="bodySmall" style={{ color: theme.colors.outline }}>
              Cartões
            </Text>
            <Text type="bodyMedium" style={{ color: theme.colors.outline }}>
              Taxa: {percentLearned}%
            </Text>
          </View>
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
    flexDirection: "column",
    gap: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
