import { Text } from "@/components/ThemedText";
import { Card } from "@/src/components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

type Deck = {
  id: string;
  title: string;
  cardCount: number;
  lastStudied?: Date;
};

export default function HomeScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
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

  const router = useRouter();

  const handleDeckPress = (deckId: string) => {
    // Navigate to study screen
    router.push(`/study/${deckId}`);
  };

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
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        style={[
          styles.headerContainer,
          { backgroundColor: theme.colors.background, paddingTop: 80 },
        ]}
      >
        <View style={styles.headerTextContent}>
          <Text type="subtitle">Dashboard</Text>
          <Text type="default">Seu progresso de estudos</Text>
        </View>
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
      </LinearGradient>
      <View style={styles.content}>
        {/* <DeckList
            decks={filteredDecks}
            onDeckPress={handleDeckPress}
            onDeckOptionsPress={handleDeckOptionsPress}
            onAddDeck={handleAddDeck}
          /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    gap: 12,
    paddingBottom: 12,
  },
  headerTextContent: {
    alignItems: "center",
  },
  contentCards: {
    gap: 12,
    padding: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});
