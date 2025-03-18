// src/components/CharacterSelect.jsx
import React from "react";

function CharacterSelect({ options, onSelect }) {
    return (
        <select onChange={onSelect}>
            <option value="">Select Character</option>
            {options.map((character, index) => (
                <option key={index} value={character}>
                    {character}
                </option>
            ))}
        </select>
    );
}

export default CharacterSelect;
