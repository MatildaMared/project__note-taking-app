// create a hook that returns the current theme and a function to toggle it

import React from "react";

export type Theme = "light" | "dark";

export default function useDarkMode() {
    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
        const themeFromStorage = window.localStorage.getItem("theme");
        if (themeFromStorage && isValidTheme(themeFromStorage)) {
            setTheme(themeFromStorage);
            return;
        } else {
            if (typeof window !== "undefined") {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (!themeFromStorage) {
                    setTheme(prefersDark ? "dark" : "light");
                    window.localStorage.setItem("theme", prefersDark ? "dark" : "light");
                }
            }
        }
    }, []);

    React.useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    function toggleDarkMode() {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === "light" ? "dark" : "light";
            window.localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }

    return { theme, toggleDarkMode };
}

function isValidTheme(theme: string): theme is Theme {
    return theme === "light" || theme === "dark";
}
