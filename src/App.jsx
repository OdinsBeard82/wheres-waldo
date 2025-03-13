import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import FullImageView from "./components/FullImageView";
import "./App.css";
import "./components/GameBoard.css";
import "./components/MyComponent.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Vite + React</h1>
        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="/full-image/:imageName" element={<FullImageView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
