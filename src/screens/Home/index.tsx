import { DeckCard } from "@/components/DeckCard";
import { Card } from "@/src/components/Card";
import { LinearHeader } from "@/src/components/templates";
import { useThemeContext } from "@/src/context/ThemeContext";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FastLearningCard } from "./components";
import { TodayGoal } from "./components/todayGoal";

type Deck = {
  id: string;
  title: string;
  cardCount: number;
  lastStudied?: Date;
};

export const HomeScreen = () => {
  const { theme } = useThemeContext();
  const { top, bottom } = useSafeAreaInsets();
  const [decks, setDecks] = useState<Deck[]>([
    {
      id: "1",
      title: "Spanish Vocabulary",
      cardCount: 42,
      lastStudied: new Date("2023-05-15"),
    },
    {
      id: "2",
      title: "React Native Concepts",
      cardCount: 15,
      lastStudied: new Date("2023-05-10"),
    },
    {
      id: "3",
      title: "History Dates",
      cardCount: 27,
      lastStudied: new Date("2023-05-05"),
    },
  ]);

  const handleDeckOptionsPress = (deckId: string) => {
    // Show deck options
    console.log("Options for deck:", deckId);
  };

  // const handleAddDeck = () => {
  //   // Add a new deck
  //   const newDeck: Deck = {
  //     id: Date.now().toString(),
  //     title: `New Deck ${decks.length + 1}`,
  //     cardCount: 0,
  //     lastStudied: undefined,
  //   };
  //   setDecks([...decks, newDeck]);
  // };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{ gap: 12, paddingBottom: bottom + 40 }}
    >
      <LinearHeader title="Dashboard" subtitle="Seu progresso de estudos">
        <FlatList
          data={[
            {
              icon: "book",
              label: "Decks",
              number: decks.length,
            },
            {
              icon: "chart.xyaxis.line",
              label: "Cards",
              number: decks.reduce((total, deck) => total + deck.cardCount, 0),
            },
            {
              icon: "clock",
              label: "Estudados",
              number: decks.reduce((total, deck) => total + deck.cardCount, 0),
            },
            {
              icon: "trophy",
              label: "Precisão",
              number: decks.reduce((total, deck) => total + deck.cardCount, 0),
            },
          ]}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Card label={item.label} icon={item.icon} number={item.number} />
          )}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentCards}
          scrollEnabled={false}
        />
      </LinearHeader>
      <View style={styles.content}>
        <FastLearningCard />
        <DeckCard cardCount={3} onPress={() => {}} title="Cascada" />
        <TodayGoal total={100} progress={50} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentCards: {
    gap: 12,
    padding: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 12,
  },
});
