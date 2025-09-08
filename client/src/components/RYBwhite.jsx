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

import { useState } from "react";

export default function ColorWheel({ onColorSelect }) {
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
        const shiftedAngle = (angle + 180 / 2) % 360;

        const slice = Math.floor(shiftedAngle / sliceAngle);
        const pickedColor = colors[slice];

        setSelected(pickedColor);
        if (onColorSelect) onColorSelect(pickedColor);
    };

    return (
        <div>
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
            />

        </div>
    );
}
