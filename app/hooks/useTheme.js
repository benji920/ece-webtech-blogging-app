import { createContext, useContext, useState, useEffect } from "react";

// export const THEME_CONTEXT_DEFAULT = {
//   theme: "malibu",
//   setTheme: () => null,
// };

export const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext used outside ThemeContext provider");
  }
  useEffect(() => {
    document.body.classList.value =
      "transition-colors ease-in-out duration-200";
    document.body.classList.add(`theme-${context.theme}`);
    console.log(
      "theme changed " + context.theme + " " + document.body.classList.value
    );
  }, [context.theme]);

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  console.log("theme provider " + theme + " setTheme " + setTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
