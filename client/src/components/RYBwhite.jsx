// import { useState } from "react";

// export default function ColorWheel({ onColorSelect }) {
//     // 12 RYB colors in order
//     const colors = [
//         "#f00000", // Red
//         "#ff5500", // Red-Orange
//         "#ff9000", // Orange
//         "#ffc800", // Yellow-Orange
//         "#ffff00", // Yellow
//         "#73e400", // Yellow-Green
//         "#14d30f", // Green
//         "#87e7ff", // Blue-Green
//         "#1c1ce8", // Blue
//         "#5a23ff", // Blue-Violet
//         "#8905e8", // Violet
//         "#e851ed", // Red-Violet
//         "#f00000", // close loop back to Red
//     ];

//     const [selected, setSelected] = useState(null);

//     const handleClick = (event) => {
//         const rect = event.currentTarget.getBoundingClientRect();
//         const x = event.clientX - rect.left - rect.width / 2;
//         const y = event.clientY - rect.top - rect.height / 2;
//         let angle = (Math.atan2(y, x) * 180) / Math.PI; // -180 to 180
//         if (angle < 0) angle += 360; // normalize 0–360

//         // shift angle by half a slice so clicks are centered
//         const sliceAngle = 360 / colors.length;
//         const shiftedAngle = (angle + sliceAngle / 2) % 360;

//         const slice = Math.floor(shiftedAngle / sliceAngle);
//         const pickedColor = colors[slice];

//         setSelected(pickedColor);
//         if (onColorSelect) onColorSelect(pickedColor);
//     };


//     return (
//         <div
//             onClick={handleClick}
//             style={{
//                 width: 300,
//                 height: 300,
//                 borderRadius: "50%",
//                 background: `
//           radial-gradient(circle, #ffffff 0%, transparent 70%),
//           conic-gradient(${colors.join(", ")})
//         `,
//                 margin: "20px auto",
//                 position: "relative",
//                 cursor: "pointer",
//             }}
//         >
//         </div>
//     );
// }

// import { useState } from "react";

// export default function ColorWheel({ onColorSelect }) {
//     const colors = [
//         "#f00000", // Red
//         "#ff5500", // Red-Orange
//         "#ff9000", // Orange
//         "#ffc800", // Yellow-Orange
//         "#ffff00", // Yellow
//         "#73e400", // Yellow-Green
//         "#14d30f", // Green
//         "#87e7ff", // Blue-Green
//         "#1c1ce8", // Blue
//         "#5a23ff", // Blue-Violet
//         "#8905e8", // Violet
//         "#e851ed", // Red-Violet
//         "#f00000", // close loop back to Red
//     ];
//     const [selected, setSelected] = useState(null);

//     const handleClick = (event) => {
//         const rect = event.currentTarget.getBoundingClientRect();
//         const x = event.clientX - rect.left - rect.width / 2;
//         const y = event.clientY - rect.top - rect.height / 2;
//         let angle = (Math.atan2(y, x) * 180) / Math.PI; // -180 to 180
//         if (angle < 0) angle += 360; // normalize 0–360

//         // shift angle by half a slice so clicks are centered
//         const sliceAngle = 360 / colors.length;
//         const shiftedAngle = (angle + 180 / 2) % 360;

//         const slice = Math.floor(shiftedAngle / sliceAngle);
//         const pickedColor = colors[slice];

//         setSelected(pickedColor);
//         if (onColorSelect) onColorSelect(pickedColor);
//     };

//     return (
//         <div>
//             <div
//                 onClick={handleClick}
//                 style={{
//                     width: 300,
//                     height: 300,
//                     borderRadius: "50%",
//                     background: `
//             radial-gradient(circle, #ffffff 0%, transparent 70%),
//             conic-gradient(${colors.join(", ")})
//           `,
//                     margin: "20px auto",
//                     position: "relative",
//                     cursor: "pointer",
//                 }}
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
        radial.addColorStop(0, "rgba(255,255,255,1)");   // pure white center
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
                        border: "2px solid #000",
                        boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                        pointerEvents: "none",
                    }}
                />
            )}
        </div>
    );
}
