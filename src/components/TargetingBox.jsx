import React from 'react';

function TargetingBox({ coordinates }) {
    return (
        <div
            style={{
                position: 'absolute',
                top: coordinates.y - 25,  // Position box based on click
                left: coordinates.x - 25,
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }}
        ></div>
    );
}

export default TargetingBox;
