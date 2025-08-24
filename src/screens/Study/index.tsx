import { DeckCard } from "@/components/DeckCard";
import { Text } from "@/components/ThemedText";
import { SearchBar } from "@/src/components/search";
import { Layout, LinearHeader } from "@/src/components/templates";
import { useThemeContext } from "@/src/context/ThemeContext";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const StudyScreen = () => {
  const { theme } = useThemeContext();

  return (
    <Layout>
      <LinearHeader
        title="Meus Decks"
        subtitle="Gerencie seus baralhos de estudo"
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <SearchBar />
          <Text type="subtitle" style={{ color: theme.colors.outline }}>
            Encontrados
          </Text>
          <DeckCard
            cardCount={3}
            onPress={() => {}}
            title="Title"
            description="Description"
          />
        </View>
      </TouchableWithoutFeedback>
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
