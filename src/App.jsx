import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterSelect from "./components/CharacterSelect";
import GameBoard from "./components/GameBoard";
import FullImageView from "./components/FullImageView";
import "./App.css";
import "./components/GameBoard.css";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const handleCharacterSelect = (event) => {
    setSelectedCharacter(event.target.value);
  };

  return (
    <Router> {/* ✅ BrowserRouter wraps everything */}
      <div className="app">
        <h1>Vite + React</h1>
        <CharacterSelect onSelect={handleCharacterSelect} />
        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="/full-image/:imageName" element={<FullImageView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
