// src/components/FullImageView.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CharacterSelect from "./CharacterSelect";
import gameImage from "../assets/image_walle.jpg";
import gameImage2 from "../assets/where-is-sci-fi.jpg";
import gameImage3 from "../assets/game-image-easy.jpg";
import characterOptions from "../data/characterOptions";

const images = {
    "image_walle": gameImage,
    "where-is-sci-fi": gameImage2,
    "game-image-easy": gameImage3
};

function FullImageView() {
    const { imageName } = useParams();
    const navigate = useNavigate();
    const imageSrc = images[imageName];
    const [selectedCharacter, setSelectedCharacter] = useState("");

    if (!imageSrc) {
        return <p>Image not found.</p>;
    }

    const handleCharacterSelect = (event) => {
        const selected = event.target.value;
        setSelectedCharacter(selected);
        // Implement validation logic here
        if (selected === "correct-character") {
            alert("Correct selection!");
            // Add marker placement logic here
        } else {
            alert("Try again!");
        }
    };

    return (
        <div className="full-image-container">
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            <img src={imageSrc} alt="Full Game" className="full-image" />
            <CharacterSelect
                options={characterOptions[imageName] || []}
                onSelect={handleCharacterSelect}
            />
            {selectedCharacter && <p>You selected: {selectedCharacter}</p>}
        </div>
    );
}

export default FullImageView;
