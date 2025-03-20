import React from "react";

function CharacterSelect({ options, onSelect }) {
    const handleChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <select onChange={handleChange}>
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
