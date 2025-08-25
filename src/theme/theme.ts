export const lightTheme = {
  colors: {
    primary: "#6200ee",
    secondary: "rgb(15, 147, 233)",
    error: "#b00020",
    background: "#ffffff",
    surface: "#ffffff",
    text: "#000000",
    onSurface: "#000000",
    onSurfaceVariant: "#444746",
    outline: "#747775",
    elevation: {
      level0: "transparent",
      level1: "#f7f9f9",
      level2: "#f2f4f5",
      level3: "#eceff1",
      level4: "#e8ebed",
      level5: "#e4e7e9",
    },
  },
  roundness: 4,
};

export const darkTheme = {
  colors: {
    primary: "#bb86fc",
    secondary: "rgb(15, 147, 233)",
    error: "#cf6679",
    background: "#121212",
    surface: "#1e1e1e",
    text: "#ffffff",
    onSurface: "#e1e1e1",
    onSurfaceVariant: "#c5c6d0",
    outline: "#8e8e8e",
    elevation: {
      level0: "transparent",
      level1: "#1e1e1e",
      level2: "#242424",
      level3: "#272727",
      level4: "#282828",
      level5: "#bfb2b2",
    },
  },
  roundness: 4,
};

export type AppTheme = typeof lightTheme;
