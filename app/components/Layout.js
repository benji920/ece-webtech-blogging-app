import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import React from "react";
import { useContext } from "react";
import DarkModeContext from "./DarkModeContext.js";
import ReactSwitch from "react-switch";
import ThemeProvider from "../hooks/useTheme.js";

export default function Layout({ children }) {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <ThemeProvider>
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-slate-600">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="py-10 min-h-screen  max-w-full md:max-w-2xl md:mx-auto rounded py-1 px-2 dark:text-white ">
          {children}
        </main>
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  );
}
