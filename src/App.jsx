import React, { useEffect, useState } from "react";
import NewHome from "./pages/NewHome";

export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("coreia-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("coreia-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <NewHome
      language={language}
      setLanguage={setLanguage}
    />
  );
}