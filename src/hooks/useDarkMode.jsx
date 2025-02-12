import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode state from localStorage, or default to false
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true" || false; // Convert string to boolean
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode)); // Store as string
      return newDarkMode;
    });
  };

  useEffect(() => {
    // Apply or remove dark mode class on body based on state
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
