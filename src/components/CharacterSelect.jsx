import React from 'react';

function CharacterSelect({ onSelect }) {
    return (
        <div>
            <label>Select Character: </label>
            <select onChange={onSelect}>
                <option value="character1">Character 1</option>
                <option value="character2">Character 2</option>
                {/* Add more characters */}
            </select>
        </div>
    );
}

export default CharacterSelect;
