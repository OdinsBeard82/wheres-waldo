import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CharacterSelect from "./CharacterSelect";
import gameImage from "../assets/image_walle.jpg";
import gameImage2 from "../assets/where-is-sci-fi.jpg";
import gameImage3 from "../assets/game-image-easy.jpg";

// Character images for Wall-E
import Walle from "../assets/image_walle/Walle.png";
import MatrixBot from "../assets/image_walle/MatrixBot.png";
import NannyBot from "../assets/image_walle/NannyBot.png";

// Character images for Sci-fi
import Eye from "../assets/where-is-sci-fi/Eye.png";
import Face from "../assets/where-is-sci-fi/Face.png";
import Laser from "../assets/where-is-sci-fi/Laser.png";

// Character images for Goku
import Goku from "../assets/game-image-easy/Goku.png";
import Vegeta from "../assets/game-image-easy/Vegeta.png";
import Super from "../assets/game-image-easy/Super.png";


import characterOptions from "../data/characterOptions";
import characterTargetAreas from "../data/characterTargetAreas";

const images = {
    "image_walle": gameImage,
    "where-is-sci-fi": gameImage2,
    "game-image-easy": gameImage3
};

// Corrected character positions 
const characterCutouts = {
    "image_walle": [
        { name: "MatrixBot", src: MatrixBot, x: "13.76%", y: "37.94%", width: "8%" },
        { name: "Walle", src: Walle, x: "30.18%", y: "44.89%", width: "5%" },
        { name: "NannyBot", src: NannyBot, x: "80.77%", y: "57.28%", width: "5%" }
    ],
    "where-is-sci-fi": [
        { name: "Eye", src: Eye, x: "75%", y: "10%", width: "15%" },
        { name: "Face", src: Face, x: "8%", y: "92%", width: "14%" },
        { name: "Laser", src: Laser, x: "46%", y: "88%", width: "24%" }
    ],
    "game-image-easy": [
        { name: "Goku", src: Goku, x: "23.5%", y: "53%", width: "19%" },
        { name: "Vegeta", src: Vegeta, x: "69%", y: "52%", width: "10%" },
        { name: "Super", src: Super, x: "62.3%", y: "61.5%", width: "16%" },
    ]
};

function FullImageView() {
    const { imageName } = useParams();
    const navigate = useNavigate();
    const imageSrc = images[imageName];

    const [clickPosition, setClickPosition] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");

    if (!imageSrc) {
        return (
            <div className="error-message">
                <p>❌ Image not found.</p>
                <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            </div>
        );
    }

    const handleImageClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const clickX = ((event.clientX - rect.left) / rect.width) * 100;
        const clickY = ((event.clientY - rect.top) / rect.height) * 100;

        setClickPosition({ x: clickX.toFixed(2), y: clickY.toFixed(2) });

        if (selectedCharacter) {
            const targetArea = characterTargetAreas[imageName]?.[selectedCharacter];

            if (!targetArea) {
                setFeedbackMessage("❌ Character not found!");
                return;
            }

            const isCorrect =
                clickX >= targetArea.xMin &&
                clickX <= targetArea.xMax &&
                clickY >= targetArea.yMin &&
                clickY <= targetArea.yMax;

            setFeedbackMessage(isCorrect ? "✅ Correct!" : "❌ Wrong!");
        }
    };

    return (
        <div className="full-image-container">
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>

            {/* Game Image Container */}
            <div className="image-container" style={{ position: "relative" }}>
                <img
                    src={imageSrc}
                    alt="Game Scene"
                    className="full-image"
                    onClick={handleImageClick}
                    style={{ width: "100%", height: "auto" }}
                />

                {/* Render Character Images on Top */}
                {characterCutouts[imageName]?.map((char, index) => (
                    <img
                        key={index}
                        src={char.src}
                        alt={char.name}
                        className="character-cutout"
                        style={{
                            position: "absolute",
                            top: char.y,
                            left: char.x,
                            transform: "translate(-50%, -50%)",
                            width: char.width, // This will now be fully respected
                            height: "auto", // Maintain aspect ratio
                            cursor: "pointer",
                            zIndex: 10
                        }}
                        onClick={() => setSelectedCharacter(char.name)}
                    />

                ))}
            </div>

            {/* Click Coordinates */}
            {clickPosition && (
                <div className="click-coordinates">
                    Clicked at: X: {clickPosition.x}%, Y: {clickPosition.y}%
                </div>
            )}

            {/* Character Selection */}
            <CharacterSelect
                options={characterOptions[imageName] || []}
                onSelect={(e) => setSelectedCharacter(e.target.value)}
            />

            {selectedCharacter && <p className="selection-text">You selected: {selectedCharacter}</p>}

            {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
        </div>
    );
}

export default FullImageView;
