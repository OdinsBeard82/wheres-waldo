import React from "react";
import { Link } from "react-router-dom";
import gameImage from "../assets/image_walle.jpg";
import gameImage2 from "../assets/where-is-sci-fi.jpg";
import gameImage3 from "../assets/game-image-easy.jpg";

function GameBoard() {
    const images = [
        { src: gameImage, name: "image_walle" },
        { src: gameImage2, name: "where-is-sci-fi" },
        { src: gameImage3, name: "game-image-easy" }
    ];

    return (
        <div className="game-board">
            {images.map((image, index) => (
                <Link to={`/full-image/${image.name}`} key={index}>
                    <img
                        src={image.src}
                        alt={`Game ${index + 1}`}
                        className="game-thumbnail"
                        style={{ width: "30%", margin: "10px", cursor: "pointer" }}
                    />
                </Link>
            ))}
        </div>
    );
}

export default GameBoard;
