//! made from image
// import { useRef, useState, useEffect } from "react";

// export default function RYBblack({ size = 300, onColorSelect }) {
//     const canvasRef = useRef(null);
//     const [color, setColor] = useState("");
//     const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         const img = new Image();
//         img.src = "/images/ryb-tinted.png";

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

//! white center made from 12 colours
import { useState } from "react";

export default function ColorWheel({ onColorSelect }) {
    // 12 RYB colors in order
    const colors = [
        "#f00000", // Red
        "#ff5500", // Red-Orange
        "#ff9000", // Orange
        "#ffc800", // Yellow-Orange
        "#ffff00", // Yellow
        "#73e400", // Yellow-Green
        "#14d30f", // Green
        "#87e7ff", // Blue-Green
        "#1c1ce8", // Blue
        "#5a23ff", // Blue-Violet
        "#8905e8", // Violet
        "#e851ed", // Red-Violet
        "#f00000", // close loop back to Red
    ];

    const [selected, setSelected] = useState(null);

    const handleClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        let angle = (Math.atan2(y, x) * 180) / Math.PI; // -180 to 180
        if (angle < 0) angle += 360; // normalize 0–360

        // shift angle by half a slice so clicks are centered
        const sliceAngle = 360 / colors.length;
        const shiftedAngle = (angle + sliceAngle / 2) % 360;

        const slice = Math.floor(shiftedAngle / sliceAngle);
        const pickedColor = colors[slice];

        setSelected(pickedColor);
        if (onColorSelect) onColorSelect(pickedColor);
    };


    return (
        <div
            onClick={handleClick}
            style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: `
          radial-gradient(circle, #ffffff 0%, transparent 70%),
          conic-gradient(${colors.join(", ")})
        `,
                margin: "20px auto",
                position: "relative",
                cursor: "pointer",
            }}
        >
        </div>
    );
}

//! made form colours from colouring 1
// import { useRef, useEffect, useState } from "react";

// export const colours1 = [
//     ["#ff5e4d", "#ff4031", "#ff0000", "#de0000", "#be0000"],
//     ["#ff6b4e", "#ff5333", "#ff3300", "#de2b00", "#be2300"],
//     ["#ff8953", "#ff7837", "#ff6600", "#de5800", "#be4a00"],
//     ["#ff9d5b", "#ff8f41", "#ff8119", "#de6f14", "#be5e10"],
//     ["#ffaf68", "#ffa450", "#ff9933", "#de842b", "#be7023"],
//     ["#ffc061", "#ffb846", "#ffaf19", "#de9814", "#be8110"],
//     ["#ffd762", "#ffd243", "#ffcc00", "#deb100", "#be9700"],
//     ["#ffd265", "#ffcc48", "#ffc619", "#deac14", "#be9210"],
//     ["#feff6b", "#ffff4b", "#ffff00", "#dede00", "#bebe00"],
//     ["#93ec60", "#83e942", "#73e600", "#63c800", "#54ab00"],
//     ["#60d859", "#42d23c", "#00cc00", "#00b100", "#009700"],
//     ["#59c353", "#3cba37", "#00b200", "#009a00", "#008300"],
//     ["#53ae4d", "#36a432", "#009900", "#008400", "#007000"],
//     ["#5ac27b", "#3dba6a", "#00b259", "#009a4c", "#008340"],
//     ["#63d7d6", "#45d1d1", "#00cccc", "#00b1b1", "#009797"],
//     ["#4a91ee", "#2f82ea", "#0073e6", "#0063c8", "#0054ab"],
//     ["#2260ff", "#0541ff", "#0000ff", "#0000de", "#0000be"],
//     ["#3b54db", "#2b38d4", "#2200cc", "#1c00b1", "#160097"],
//     ["#5048b1", "#402da5", "#330099", "#2b0084", "#230070"],
//     ["#664dc6", "#5832bd", "#4b00b3", "#40009b", "#350084"],
//     ["#7f52da", "#7236d3", "#6600cc", "#5800b1", "#4a0097"],
//     ["#9852da", "#8d36d3", "#8100cc", "#6f00b1", "#5e0097"],
//     ["#ae54d9", "#a437d3", "#9900cc", "#8400b1", "#700097"],
//     ["#f159a4", "#ec3c99", "#e6008e", "#c8007b", "#ab0068"],
// ];

// function hexToRgb(hex) {
//     const bigint = parseInt(hex.slice(1), 16);
//     return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
// }

// function lerp(a, b, t) {
//     return a + (b - a) * t;
// }

// function lerpColor(c1, c2, t) {
//     return [
//         Math.round(lerp(c1[0], c2[0], t)),
//         Math.round(lerp(c1[1], c2[1], t)),
//         Math.round(lerp(c1[2], c2[2], t)),
//     ];
// }

// export default function BlendedColourWheel({ size = 400, onColorSelect }) {
//     const canvasRef = useRef(null);
//     const [selected, setSelected] = useState("#ffffff");

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         const image = ctx.createImageData(size, size);

//         const center = size / 2;
//         const maxR = size / 2;
//         const numHues = colours1.length; // 24
//         const numShades = colours1[0].length; // 5

//         for (let y = 0; y < size; y++) {
//             for (let x = 0; x < size; x++) {
//                 const dx = x - center;
//                 const dy = y - center;
//                 const r = Math.sqrt(dx * dx + dy * dy);
//                 if (r > maxR) continue;

//                 // angle in [0, 1)
//                 let angle = Math.atan2(dy, dx);
//                 if (angle < 0) angle += 2 * Math.PI;
//                 const hueIndex = (angle / (2 * Math.PI)) * numHues;
//                 const h0 = Math.floor(hueIndex);
//                 const h1 = (h0 + 1) % numHues;
//                 const ht = hueIndex - h0;

//                 // radius in [0, 1)
//                 const shadeIndex = (r / maxR) * (numShades - 1);
//                 const s0 = Math.floor(shadeIndex);
//                 const s1 = Math.min(s0 + 1, numShades - 1);
//                 const st = shadeIndex - s0;

//                 const c00 = hexToRgb(colours1[h0][s0]);
//                 const c01 = hexToRgb(colours1[h0][s1]);
//                 const c10 = hexToRgb(colours1[h1][s0]);
//                 const c11 = hexToRgb(colours1[h1][s1]);

//                 const c0 = lerpColor(c00, c01, st);
//                 const c1 = lerpColor(c10, c11, st);
//                 const c = lerpColor(c0, c1, ht);

//                 const idx = (y * size + x) * 4;
//                 image.data[idx] = c[0];
//                 image.data[idx + 1] = c[1];
//                 image.data[idx + 2] = c[2];
//                 image.data[idx + 3] = 255;
//             }
//         }

//         ctx.putImageData(image, 0, 0);
//     }, [size]);

//     const handleClick = (e) => {
//         const canvas = canvasRef.current;
//         const rect = canvas.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const ctx = canvas.getContext("2d");
//         const pixel = ctx.getImageData(x, y, 1, 1).data;
//         const hex = `#${[pixel[0], pixel[1], pixel[2]]
//             .map((v) => v.toString(16).padStart(2, "0"))
//             .join("")}`;
//         setSelected(hex);
//         if (onColorSelect) onColorSelect(hex);
//     };

//     return (
//         <div style={{ textAlign: "center" }}>
//             <canvas
//                 ref={canvasRef}
//                 width={size}
//                 height={size}
//                 onClick={handleClick}
//                 style={{ borderRadius: "50%", cursor: "pointer" }}
//             />
//             <div
//                 style={{
//                     marginTop: 10,
//                     width: 40,
//                     height: 40,
//                     borderRadius: "50%",
//                     background: selected,
//                     border: "2px solid #333",
//                     display: "inline-block",
//                 }}
//             />
//         </div>
//     );
// }
