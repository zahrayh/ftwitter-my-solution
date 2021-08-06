import React from "react";
import Menu from "./Menu";

function Header({ darkMode, onDarkModeChange }) {
  const handleModeChange = (mode) => {
    onDarkModeChange(mode);
  };
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} onModeChange={handleModeChange} />
      </div>
    </div>
  );
}

export default Header;
