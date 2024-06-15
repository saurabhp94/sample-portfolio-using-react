import React, { useState, useEffect, createContext, useContext } from "react";
import { lightTheme, darkTheme } from "./theme";

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );
  console.log("Initial theme:", theme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    console.log("New theme:", newTheme);
    setTheme(newTheme);
    console.log("Updated theme:", theme);
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };

  useEffect(() => {
    const handleSystemThemeChange = () => {
      const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(prefersColorScheme.matches ? darkTheme : lightTheme);
    };

    window.addEventListener("storage", handleSystemThemeChange);

    return () => {
      window.removeEventListener("storage", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);