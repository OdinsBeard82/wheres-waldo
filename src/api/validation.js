export async function validateClick(character, clickX, clickY) {
    const response = await fetch('https://your-backend-url/validate-click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            character,
            clickX,
            clickY,
        }),
    });
    const data = await response.json();
    return data; // Assuming the server returns { isValid: true/false }
}
