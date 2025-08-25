import BlurTabBarBackground from "@/components/ui/TabBarBackground.ios";
import { useThemeContext } from "@/src/context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

type TabBarIconProps = {
  color: string;
  size: number;
};

export default function TabLayout() {
  const { theme } = useThemeContext();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarBackground: () => <BlurTabBarBackground />,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "transparent",
          position: "absolute",
          elevation: 0,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="study"
        options={{
          title: "Estudos",
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Config",
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
