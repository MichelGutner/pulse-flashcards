import { DeckProvider } from "@/context/DeckContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    MaterialCommunityIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <DeckProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "simple_push",
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="deck/[id]"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="deck/practice/[id]"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </DeckProvider>
    </ThemeProvider>
  );
}
