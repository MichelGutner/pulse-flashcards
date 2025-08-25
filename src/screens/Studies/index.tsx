import { DeckCard } from "@/components/DeckCard";
import { Text } from "@/components/ThemedText";
import { EmptyState } from "@/src/components/EmptyState";
import { FloatingButton } from "@/src/components/floatingButton";
import { ModalAddItems } from "@/src/components/ModalAddItems";
import { SearchBar } from "@/src/components/search";
import { Layout, LinearHeader } from "@/src/components/templates";
import { useThemeContext } from "@/src/context/ThemeContext";
import { mockDecks } from "@/src/mocks/decks";
import { router } from "expo-router";
import { Fragment, useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const StudiesScreen = () => {
  const { theme } = useThemeContext();
  const [showModalAddDeck, setShowModalAddDeck] = useState(false);

  const handleShowModalAddDeck = () => {
    setShowModalAddDeck(true);
  };

  const handleCloseModalAddDeck = () => {
    setShowModalAddDeck(false);
  };

  const handleSaveModalAddDeck = () => {
    // Lógica para salvar o novo deck
    setShowModalAddDeck(false);
  };

  return (
    <Layout>
      <LinearHeader
        title="Meus Decks"
        subtitle="Revise seus flashcards com facilidade"
      />
      {mockDecks.length > 0 ? (
        <Fragment>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <SearchBar />
              <Text type="subtitle" style={{ color: theme.colors.outline }}>
                Encontrados
              </Text>
              <FlatList
                contentContainerStyle={{ gap: 12 }}
                data={mockDecks as any}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <DeckCard
                    title={item.title}
                    description={item.description}
                    cardCount={item.cardCount}
                    onPress={() => {
                      router.push(`/deck/${item.id}`, {});
                    }}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </TouchableWithoutFeedback>
          <FloatingButton onPress={handleShowModalAddDeck} />
        </Fragment>
      ) : (
        <EmptyState
          title="Nenhum deck encontrado"
          description="Crie seu primeiro deck para começar a estudar!"
          actionLabel="Adicionar Deck"
          onActionPress={handleShowModalAddDeck}
        />
      )}
      <ModalAddItems
        visible={showModalAddDeck}
        onClose={handleCloseModalAddDeck}
        onSave={handleSaveModalAddDeck}
        title={"Adicionar Novo Deck"}
        description={
          "Adicione um nome e descrição para seu novo deck de flashcards."
        }
        firstInput={{
          label: "Nome do Deck",
          input: { placeholder: "Ex: Biologia, História..." },
        }}
        secondInput={{
          label: "Descrição do Deck",
          input: { placeholder: "Breve descrição do conteúdo do deck..." },
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 12,
  },
});
