import React, { useRef, useEffect, useState } from 'react';
import { rgbToHex } from '../utils/scoring';

const RGBwhite = ({ size = 300, onColorSelect }) => {
    const canvasRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const radius = size / 2;
        const imageData = ctx.createImageData(size, size);

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const dx = x - radius;
                const dy = y - radius;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);

                if (distance <= radius) {
                    // Hue from angle
                    let hue = (angle * 180 / Math.PI + 360) % 360;
                    // Saturation based on distance (outer = 100%)
                    let saturation = (distance / radius) * 100;
                    // Lightness toward center = 100% white
                    let lightness = 100 - (distance / radius) * 50;

                    const [r, g, b] = hslToRgb(hue, saturation, lightness);

                    const index = (y * size + x) * 4;
                    imageData.data[index] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
                    imageData.data[index + 3] = 255;
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }, [size]);

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPointerPosition({ x, y })
        const ctx = canvas.getContext('2d');
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const color = rgbToHex(pixel[0], pixel[1], pixel[2]);
        setSelectedColor(color);
        if (onColorSelect) onColorSelect(color);
    };

    return (
        <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
            {selectedColor && (
                <div
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: '2px solid black',
                        backgroundColor: selectedColor,
                        position: 'absolute',
                        top: pointerPosition.y - 5,
                        left: pointerPosition.x - 5,
                        pointerEvents: 'none', // so clicks go through
                    }}
                />
            )}
            <canvas
                ref={canvasRef}
                width={size}
                height={size}
                onClick={handleClick}
                style={{
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'block',
                }}
            />
        </div>
    );

};

// HSL to RGB conversion
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
}

export default RGBwhite;
