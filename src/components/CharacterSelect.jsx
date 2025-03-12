import React from "react";

function CharacterSelect({ onSelect }) {
    return (
        <div>
            <label>Select Character: </label>
            <select onChange={onSelect}>
                <option value="">-- Choose a Character --</option>
                <option value="character1">Character 1</option>
                <option value="character2">Character 2</option>
                <option value="character3">Character 3</option>
                <option value="character4">Character 4</option>
                <option value="character5">Character 5</option>
                <option value="character6">Character 6</option>
            </select>
        </div>
    );
}

export default CharacterSelect;
