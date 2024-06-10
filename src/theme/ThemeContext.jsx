import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => { } });
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme); localStorage.setItem('theme', newTheme);
    };
    useEffect(() => {
        const handleSystemThemeChange = () => {
            const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(prefersColorScheme.matches ? 'dark' : 'light'); // Respect system preference initially 
        }; window.addEventListener('storage', handleSystemThemeChange); // Listen for theme changes in localStorage 
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--background-color', 'none');
            document.documentElement.style.setProperty('--text-color', 'white');
            document.documentElement.style.setProperty('--background-image', 'url("https://wallpapercave.com/wp/wp5502431.jpg")');
        }
        else {
            document.documentElement.style.setProperty('--background-color', 'white');
            document.documentElement.style.setProperty('--text-color', 'black');
            document.documentElement.style.setProperty('--background-image', 'url("https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?cs=srgb&dl=pexels-codioful-7130560.jpg&fm=jpg")');
        }

        return () => {
            window.removeEventListener('storage', handleSystemThemeChange);
        };
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>

            {children}
        </ThemeContext.Provider>
    );
}
export const useTheme = () => useContext(ThemeContext);