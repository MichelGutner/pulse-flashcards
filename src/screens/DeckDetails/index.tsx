import { Text } from "@/components/ThemedText";
import { Button } from "@/src/components/button";
import { EmptyState } from "@/src/components/EmptyState";
import { FloatingButton } from "@/src/components/floatingButton";
import { ModalAddItems } from "@/src/components/ModalAddItems";
import { Layout, LinearHeader } from "@/src/components/templates";
import { useThemeContext } from "@/src/context/ThemeContext";
import { mockFlashcards } from "@/src/mocks/flashcards";
import { useLocalSearchParams } from "expo-router";
import { Fragment, useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Flashcard } from "./components/Flashcard";

export const DeckDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { theme } = useThemeContext();
  const [showModalAddFlashcard, setShowModalAddFlashcard] = useState(false);

  const handleShowModalAddFlashcard = () => {
    setShowModalAddFlashcard(true);
  };

  const handleCloseModalAddFlashcard = () => {
    setShowModalAddFlashcard(false);
  };

  const handleSaveModalAddFlashcard = () => {
    setShowModalAddFlashcard(false);
  };

  return (
    <Layout>
      <LinearHeader
        title={`Deck ${id}`}
        subtitle={`${id}`}
        showBackButton={true}
      />
      {mockFlashcards.length > 0 ? (
        <Fragment>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Button
                title="Iniciar Estudo"
                variant="primary"
                iconName="play.fill"
              />
              <Text type="subtitle" style={{ color: theme.colors.outline }}>
                Flashcards
              </Text>
              <FlatList
                contentContainerStyle={{ gap: 12 }}
                data={mockFlashcards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Flashcard
                    question={item.question}
                    answer={item.answer}
                    id={item.id}
                    createdAt={new Date(item.createdAt).toLocaleDateString()}
                    lastViewedAt={new Date(
                      item?.lastViewedAt || ""
                    ).toLocaleDateString()}
                    ratePrecision={item.ratePrecision}
                    answeredDetail={item.answeredDetail}
                    onPress={() => {}}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </TouchableWithoutFeedback>
          <FloatingButton onPress={handleShowModalAddFlashcard} />
        </Fragment>
      ) : (
        <EmptyState
          title="Nenhum flashcard encontrado"
          description="Crie seu primeiro flashcard para começar a estudar!"
          actionLabel="Adicionar Flashcard"
          onActionPress={handleShowModalAddFlashcard}
        />
      )}
      <ModalAddItems
        visible={showModalAddFlashcard}
        onClose={handleCloseModalAddFlashcard}
        onSave={handleSaveModalAddFlashcard}
        title={"Adicionar Flashcard"}
        description={"Crie um novo flashcard para o deck."}
        firstInput={{
          label: "Frente (pergunta)",
          input: { placeholder: "Ex: Qual é a capital do brasil?" },
        }}
        secondInput={{
          label: "Verso (resposta)",
          input: { placeholder: "Ex: Brasília" },
        }}
        tertiaryInput={{
          label: "Link auxiliar (opcional)",
          input: { placeholder: "Ex: https://link-auxiliar.com" },
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  list: {
    gap: 12,
  },
});
