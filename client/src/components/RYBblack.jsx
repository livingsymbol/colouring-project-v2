// // import React, { useRef, useState, useEffect } from "react";

// // const RYBblack = ({ size = 300, onColorSelect }) => {
// //     const canvasRef = useRef(null);
// //     const [color, setColor] = useState("#ffffff");
// //     const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })


// //     useEffect(() => {
// //         const canvas = canvasRef.current;
// //         const ctx = canvas.getContext("2d");
// //         const radius = size / 2;
// //         const image = ctx.createImageData(size, size);
// //         const data = image.data;

// //         for (let y = -radius; y < radius; y++) {
// //             for (let x = -radius; x < radius; x++) {
// //                 const dist = Math.sqrt(x * x + y * y);
// //                 if (dist <= radius) {
// //                     let angle = Math.atan2(y, x) * (180 / Math.PI);
// //                     if (angle < 0) angle += 360;

// //                     // Rotate 90° anti-clockwise by subtracting 90°
// //                     angle = (angle - 270 + 360) % 360;

// //                     // Map angle to RYB wheel
// //                     const rybHue = angleToRYB(angle);

// //                     // Calculate how much to fade from black to the color
// //                     const fadeAmount = Math.min(dist / radius, 1);

// //                     // Get the full saturated color
// //                     const [r, g, b] = hslToRgb(rybHue / 360, 1, 0.5);

// //                     // Blend from white (255, 255, 255) to the color based on fadeAmount
// //                     const finalR = Math.round(0 * (1 - fadeAmount) + r * fadeAmount);
// //                     const finalG = Math.round(0 * (1 - fadeAmount) + g * fadeAmount);
// //                     const finalB = Math.round(0 * (1 - fadeAmount) + b * fadeAmount);
// //                     const px = (y + radius) * size + (x + radius);
// //                     data[px * 4] = finalR;
// //                     data[px * 4 + 1] = finalG;
// //                     data[px * 4 + 2] = finalB;
// //                     data[px * 4 + 3] = 255;
// //                 }
// //             }
// //         }
// //         ctx.putImageData(image, 0, 0);
// //     }, [size]);

// //     const handleClick = (e) => {
// //         const canvas = canvasRef.current;
// //         const ctx = canvas.getContext("2d");
// //         const rect = canvas.getBoundingClientRect();
// //         const x = e.clientX - rect.left;
// //         const y = e.clientY - rect.top;
// //         setPointerPosition({ x, y })
// //         const pixel = ctx.getImageData(x, y, 1, 1).data;
// //         const hex =
// //             "#" +
// //             ((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2])
// //                 .toString(16)
// //                 .slice(1);
// //         setColor(hex);
// //         if (onColorSelect) onColorSelect(hex);
// //     };

// //     return (
// //         <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
// //             {color && (
// //                 <div
// //                     style={{
// //                         width: '10px',
// //                         height: '10px',
// //                         borderRadius: '50%',
// //                         border: '2px solid white',
// //                         backgroundColor: color,
// //                         position: 'absolute',
// //                         top: pointerPosition.y - 5,
// //                         left: pointerPosition.x - 5,
// //                         pointerEvents: 'none', // so clicks go through
// //                     }}
// //                 />
// //             )}
// //             <canvas
// //                 ref={canvasRef}
// //                 width={size}
// //                 height={size}
// //                 onClick={handleClick}
// //                 style={{ borderRadius: "50%", cursor: "crosshair" }}
// //             />
// //         </div>
// //     );
// // };

// // // Convert RGB hue wheel to RYB hue wheel
// // function angleToRYB(angle) {
// //     // Mapping table for RYB hue (approximation)
// //     const mapping = [
// //         [0, 0],
// //         [60, 30],
// //         [120, 60],
// //         [180, 120],
// //         [240, 180],
// //         [300, 240],
// //         [360, 360],
// //     ];

// //     for (let i = 0; i < mapping.length - 1; i++) {
// //         const [a0, h0] = mapping[i];
// //         const [a1, h1] = mapping[i + 1];
// //         if (angle >= a0 && angle <= a1) {
// //             const t = (angle - a0) / (a1 - a0);
// //             return h0 + t * (h1 - h0);
// //         }
// //     }
// //     return angle;
// // }

// // // Convert HSL to RGB
// // function hslToRgb(h, s, l) {
// //     let r, g, b;

// //     if (s === 0) {
// //         r = g = b = l;
// //     } else {
// //         const hue2rgb = (p, q, t) => {
// //             if (t < 0) t += 1;
// //             if (t > 1) t -= 1;
// //             if (t < 1 / 6) return p + (q - p) * 6 * t;
// //             if (t < 1 / 2) return q;
// //             if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
// //             return p;
// //         };

// //         const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
// //         const p = 2 * l - q;
// //         r = hue2rgb(p, q, h + 1 / 3);
// //         g = hue2rgb(p, q, h);
// //         b = hue2rgb(p, q, h - 1 / 3);
// //     }

// //     return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
// // }

// // export default RYBblack;

// import { useRef, useState, useEffect } from "react";

// export default function RYBblack({ size = 300, onColorSelect }) {
//     const canvasRef = useRef(null);
//     const [color, setColor] = useState("");
//     const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         const img = new Image();
//         img.src = "/images/ryb-shaded.png"; 

//         img.onload = () => {
//             canvas.width = img.width;
//             canvas.height = img.height;
//             ctx.drawImage(img, 0, 0);
//         };
//     }, []);

//     const handleClick = (e) => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         const rect = canvas.getBoundingClientRect();
//         const scaleX = canvas.width / rect.width;   // scale factor for X
//         const scaleY = canvas.height / rect.height; // scale factor for Y

//         const x = Math.floor((e.clientX - rect.left) * scaleX);
//         const y = Math.floor((e.clientY - rect.top) * scaleY);

//         setPointerPosition({
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top,
//         });

//         const pixel = ctx.getImageData(x, y, 1, 1).data;
//         const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2])
//             .toString(16)
//             .slice(1)}`;

//         setColor(hex);
//         if (onColorSelect) onColorSelect(hex);
//     };

//     return (
//         <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
//             {color && (
//                 <div
//                     style={{
//                         width: '10px',
//                         height: '10px',
//                         borderRadius: '50%',
//                         border: '2px solid white',
//                         backgroundColor: color,
//                         position: 'absolute',
//                         top: pointerPosition.y - 5,
//                         left: pointerPosition.x - 5,
//                         pointerEvents: 'none', // so clicks go through
//                     }}
//                 />
//             )}
//             <canvas
//                 ref={canvasRef}
//                 onClick={handleClick}
//                 style={{ cursor: "crosshair", maxWidth: "100%" }}
//             />
//         </div>
//     );
// }

import { useRef, useState, useEffect } from "react";

export default function ColorWheel({ onColorSelect }) {
    const [marker, setMarker] = useState(null); // { x, y, color }
    const canvasRef = useRef(null);

    const wheelSize = 300;

    // Draw hue + saturation/lightness
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // --- Draw base conic gradient (hues) ---
        // --- Draw base conic gradient (hues) ---
        const conic = ctx.createConicGradient(-Math.PI / 2, wheelSize / 2, wheelSize / 2);
        const colors = [
            "#f00000", "#ff5500", "#ff9000", "#ffc800", "#ffff00",
            "#73e400", "#14d30f", "#87e7ff", "#1c1ce8", "#5a23ff",
            "#8905e8", "#e851ed", "#f00000"
        ];
        const step = 1 / (colors.length - 1);
        colors.forEach((c, i) => conic.addColorStop(i * step, c));

        ctx.fillStyle = conic;
        ctx.fillRect(0, 0, wheelSize, wheelSize);


        // --- Overlay radial fade (center white, edges colorful) ---
        const radial = ctx.createRadialGradient(
            wheelSize / 2, wheelSize / 2, 0,
            wheelSize / 2, wheelSize / 2, wheelSize / 2
        );
        radial.addColorStop(0, "rgba(0,0,0,1)");   // pure white center
        radial.addColorStop(1, "rgba(255,255,255,0)");   // fully transparent at edges

        ctx.fillStyle = radial;
        ctx.fillRect(0, 0, wheelSize, wheelSize);
    }, []);

    // Handle click to pick color
    const handleClick = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ctx = canvas.getContext("2d");
        const pixel = ctx.getImageData(x, y, 1, 1).data; // [r,g,b,a]

        // Ignore clicks outside the circle
        const dx = x - wheelSize / 2;
        const dy = y - wheelSize / 2;
        if (Math.sqrt(dx * dx + dy * dy) > wheelSize / 2) return;

        // Convert to hex
        const toHex = (v) => v.toString(16).padStart(2, "0");
        const hex = `#${toHex(pixel[0])}${toHex(pixel[1])}${toHex(pixel[2])}`;

        setMarker({ x, y, color: hex });
        if (onColorSelect) onColorSelect(hex);
    };

    return (
        <div style={{ position: "relative", width: wheelSize, height: wheelSize, margin: "20px auto" }}>
            <canvas
                ref={canvasRef}
                width={wheelSize}
                height={wheelSize}
                onClick={handleClick}
                style={{
                    width: wheelSize,
                    height: wheelSize,
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "block",
                }}
            />
            {marker && (
                <div
                    style={{
                        position: "absolute",
                        left: marker.x - 5,
                        top: marker.y - 5,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: marker.color,
                        border: "2px solid #fff",
                        boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                        pointerEvents: "none",
                    }}
                />
            )}
        </div>
    );
}
