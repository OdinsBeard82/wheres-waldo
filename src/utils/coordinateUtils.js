export function normalizeCoordinates(photoRect, offsetX, offsetY) {
    const normalizedX = (offsetX / photoRect.width) * 100;
    const normalizedY = (offsetY / photoRect.height) * 100;
    return { normalizedX, normalizedY };
}
