import Router from "./routes/Router";
import useThemeDetector from "./hooks/useThemeDetector";
import { useEffect } from "react";

const App = () => {
  const isDarkTheme = useThemeDetector();

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [isDarkTheme]);

  return <Router />;
};

export default App;
