import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CharacterSelect from "./CharacterSelect";
import gameImage from "../assets/image_walle.jpg";
import gameImage2 from "../assets/where-is-sci-fi.jpg";
import gameImage3 from "../assets/game-image-easy.jpg";
import characterOptions from "../data/characterOptions";
import characterTargetAreas from "../data/characterTargetAreas";

const images = {
    "image_walle": gameImage,
    "where-is-sci-fi": gameImage2,
    "game-image-easy": gameImage3
};

function FullImageView() {
    const { imageName } = useParams();
    const navigate = useNavigate();
    const imageSrc = images[imageName];
    const [clickPosition, setClickPosition] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState("");

    if (!imageSrc) {
        return <p>Image not found.</p>;
    }

    const handleImageClick = (event) => {
        const { top, left, width, height } = event.target.getBoundingClientRect();
        const clickX = ((event.clientX - left) / width) * 100; // Convert to percentage
        const clickY = ((event.clientY - top) / height) * 100; // Convert to percentage

        setClickPosition({ x: clickX.toFixed(2), y: clickY.toFixed(2) }); // Show exact click position
    };

    return (
        <div className="full-image-container">
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>

            <img
                src={imageSrc}
                alt="Full Game"
                className="full-image"
                onClick={handleImageClick}
            />
            {clickPosition && (
                <div
                    className="click-coordinates"
                    style={{ color: "white", fontWeight: "bold", position: "absolute", top: "10px", left: "10px" }}>
                    Clicked at: X: {clickPosition.x}%, Y: {clickPosition.y}%
                </div>
            )}


            <CharacterSelect
                options={characterOptions[imageName] || []}
                onSelect={setSelectedCharacter}
            />

            {selectedCharacter && <p>You selected: {selectedCharacter}</p>}
        </div>
    );
}

export default FullImageView;
