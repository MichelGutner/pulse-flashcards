import { Text } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Button } from "@/src/components/button";
import { CardBlurTemplate } from "@/src/components/templates";
import { useThemeContext } from "@/src/context/ThemeContext";
import { StyleSheet, useWindowDimensions } from "react-native";

export const FastLearningCard = ({}) => {
  const { theme } = useThemeContext();
  const { height } = useWindowDimensions();
  const brainIconHeight = height * 0.04; // Adjust the height as needed
  return (
    <CardBlurTemplate style={styles.container}>
      <IconSymbol
        name="brain"
        color={theme.colors.secondary}
        size={brainIconHeight}
      />
      <Text type="subtitle">Sessão de Estudo Rápida</Text>
      <Text
        style={[styles.descriptionText, { color: theme.colors.outline }]}
        type="default"
      >
        Continue seu progresso com uma sessão de 10 minutos
      </Text>
      <Button
        variant="primary"
        title="Começar Agora"
        onPress={() => console.log("Iniciar sessão de estudo rápido")}
      />
    </CardBlurTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  descriptionText: {
    textAlign: "center",
  },
});
