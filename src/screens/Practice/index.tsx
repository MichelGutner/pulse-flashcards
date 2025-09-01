import { Button } from "@/src/components/button";
import { Card } from "@/src/components/Card";
import { Layout, LinearHeader } from "@/src/components/templates";
import { useLocalSearchParams } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { AnimatedFlashcard, ProgressSection } from "./components";

export const PracticeScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("🚀 ~ PracticeScreen ~ id:", id);
  return (
    <Layout>
      <LinearHeader title="Flashcards" subtitle="Domine o conteúdo com prática">
        <FlatList
          data={[
            {
              icon: "heart.fill",
              label: "Pontos",
              number: 2,
            },
            {
              icon: "trophy",
              label: "Nível",
              number: 4,
            },
            {
              icon: "flame",
              label: "Sequencia",
              number: 4,
            },
            {
              icon: "star",
              label: "Precisão",
              number: 4,
            },
          ]}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Card label={item.label} icon={item.icon} number={item.number} />
          )}
          numColumns={2}
          columnWrapperStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.contentCards}
          scrollEnabled={false}
        />
      </LinearHeader>
      <View style={style.container}>
        <ProgressSection currentIndex={3} totalCards={10} />
        <AnimatedFlashcard frontText="Front Side" backText="Back Side" />
      </View>
      <SafeAreaView style={[style.buttonsContainer]}>
        {[
          {
            id: "veryEasy",
            name: "Muito Fácil",
            variant: "success",
            iconName: "star",
          },
          { id: "easy", name: "Fácil", variant: "alert", iconName: "smiley" },
          {
            id: "hard",
            name: "Difícil",
            variant: "warning",
            iconName: "brain",
          },
          {
            id: "expert",
            name: "Expert",
            variant: "error",
            iconName: "hourglass",
          },
        ].map((level) => (
          <Button
            key={level.id}
            title={level.name}
            variant={level.variant}
            iconName={level.iconName}
            style={{ width: "40%" }}
          />
        ))}
      </SafeAreaView>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  contentCards: {
    gap: 8,
  },
  buttonsContainer: {
    gap: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
