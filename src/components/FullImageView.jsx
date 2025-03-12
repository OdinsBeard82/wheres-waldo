import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import gameImage from "../assets/image_walle.jpg";
import gameImage2 from "../assets/where-is-sci-fi.jpg";
import gameImage3 from "../assets/game-image-easy.jpg";

const images = {
    "image_walle": gameImage,
    "where-is-sci-fi": gameImage2,
    "game-image-easy": gameImage3
};

function FullImageView() {
    const { imageName } = useParams();
    const navigate = useNavigate();
    const imageSrc = images[imageName];

    if (!imageSrc) {
        return <p>Image not found.</p>;
    }

    return (
        <div className="full-image-container">
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            <img src={imageSrc} alt="Full Game" className="full-image" />
        </div>
    );
}

export default FullImageView;
