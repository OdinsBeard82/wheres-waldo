import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CharacterSelect from "./CharacterSelect";
import gameImage from "../assets/image_walle.jpg";
import gameImage2 from "../assets/where-is-sci-fi.jpg";
import gameImage3 from "../assets/game-image-easy.jpg";

// Character images
import Walle from "../assets/image_walle/Walle.png";
import MatrixBot from "../assets/image_walle/MatrixBot.png";
import NannyBot from "../assets/image_walle/NannyBot.png";

import characterOptions from "../data/characterOptions";
import characterTargetAreas from "../data/characterTargetAreas";

const images = {
    "image_walle": gameImage,
    "where-is-sci-fi": gameImage2,
    "game-image-easy": gameImage3
};

// Character positions (adjust as needed)
const characterCutouts = {
    "image_walle": [
        { name: "Walle", src: Walle, x: "30%", y: "50%" },
        { name: "MatrixBot", src: MatrixBot, x: "60%", y: "30%" },
        { name: "NannyBot", src: NannyBot, x: "80%", y: "70%" }
    ],
    "where-is-sci-fi": [],
    "game-image-easy": []
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
            <div className="image-container">
                <img
                    src={imageSrc}
                    alt="Game Scene"
                    className="full-image"
                    onClick={handleImageClick}
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
                            width: "5%", // Adjust size as needed
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
