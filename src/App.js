import React, { useState } from "react";
import DarkModeWrapper from "./components/DarkModeWrapper";
import Header from "./components/Header";
import TweetsContainer from "./components/TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (mode) => {
    setDarkMode(mode);
  };

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} onDarkModeChange={handleDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
