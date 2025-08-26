import React, { useRef, useState, useEffect } from "react";

const RYBblack = ({ size = 300, onColorSelect }) => {
    const canvasRef = useRef(null);
    const [color, setColor] = useState("#ffffff");
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const radius = size / 2;
        const image = ctx.createImageData(size, size);
        const data = image.data;

        for (let y = -radius; y < radius; y++) {
            for (let x = -radius; x < radius; x++) {
                const dist = Math.sqrt(x * x + y * y);
                if (dist <= radius) {
                    let angle = Math.atan2(y, x) * (180 / Math.PI);
                    if (angle < 0) angle += 360;

                    // Rotate 90° anti-clockwise by subtracting 90°
                    angle = (angle - 270 + 360) % 360;

                    // Map angle to RYB wheel
                    const rybHue = angleToRYB(angle);

                    // Calculate how much to fade from black to the color
                    const fadeAmount = Math.min(dist / radius, 1);

                    // Get the full saturated color
                    const [r, g, b] = hslToRgb(rybHue / 360, 1, 0.5);

                    // Blend from white (255, 255, 255) to the color based on fadeAmount
                    const finalR = Math.round(0 * (1 - fadeAmount) + r * fadeAmount);
                    const finalG = Math.round(0 * (1 - fadeAmount) + g * fadeAmount);
                    const finalB = Math.round(0 * (1 - fadeAmount) + b * fadeAmount);
                    const px = (y + radius) * size + (x + radius);
                    data[px * 4] = finalR;
                    data[px * 4 + 1] = finalG;
                    data[px * 4 + 2] = finalB;
                    data[px * 4 + 3] = 255;
                }
            }
        }
        ctx.putImageData(image, 0, 0);
    }, [size]);

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPointerPosition({ x, y })
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex =
            "#" +
            ((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2])
                .toString(16)
                .slice(1);
        setColor(hex);
        if (onColorSelect) onColorSelect(hex);
    };

    return (
        <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
            {color && (
                <div
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: '2px solid white',
                        backgroundColor: color,
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
                style={{ borderRadius: "50%", cursor: "crosshair" }}
            />
        </div>
    );
};

// Convert RGB hue wheel to RYB hue wheel
function angleToRYB(angle) {
    // Mapping table for RYB hue (approximation)
    const mapping = [
        [0, 0],
        [60, 30],
        [120, 60],
        [180, 120],
        [240, 180],
        [300, 240],
        [360, 360],
    ];

    for (let i = 0; i < mapping.length - 1; i++) {
        const [a0, h0] = mapping[i];
        const [a1, h1] = mapping[i + 1];
        if (angle >= a0 && angle <= a1) {
            const t = (angle - a0) / (a1 - a0);
            return h0 + t * (h1 - h0);
        }
    }
    return angle;
}

// Convert HSL to RGB
function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export default RYBblack;