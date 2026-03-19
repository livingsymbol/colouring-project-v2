import { useState, useCallback, useReducer, forwardRef, memo } from "react";
import Symbol_without_desc from "./Symbol_without_desc";
import MiniSymbol from "./MiniSymbol";

// ─── helpers ────────────────────────────────────────────────────────────────

const defaultMiniColors = () => ({
    outer: Array(12).fill("#ffffff"),
    inner: Array(4).fill("#ffffff"),
    center: "#ffffff",
});

const initialMiniState = Array.from({ length: 12 }, defaultMiniColors);

function miniColorsReducer(state, action) {
    const { petalIndex, partType, partIndex, color } = action;
    const next = state.map((s, i) => {
        if (i !== petalIndex) return s;
        if (partType === "outer") {
            const outer = [...s.outer];
            outer[partIndex] = color;
            return { ...s, outer };
        }
        if (partType === "inner") {
            const inner = [...s.inner];
            inner[partIndex] = color;
            return { ...s, inner };
        }
        if (partType === "center") {
            return { ...s, center: color };
        }
        return s;
    });
    return next;
}

// ─── petal geometry (centre + approximate bounding box in SVG space) ─────────
// These are approximate centres for each of the 12 outer petals so we can
// position the foreignObject overlay correctly.  Values computed from the
// transform matrices in Symbol_without_desc.
const PETAL_META = [
    { cx: 414, cy: 618, w: 145, h: 155 }, // 0  – top-right
    { cx: 490, cy: 540, w: 160, h: 150 }, // 1
    { cx: 530, cy: 440, w: 160, h: 145 }, // 2
    { cx: 518, cy: 335, w: 155, h: 145 }, // 3
    { cx: 480, cy: 238, w: 160, h: 150 }, // 4
    { cx: 400, cy: 170, w: 155, h: 155 }, // 5
    { cx: 305, cy: 155, w: 145, h: 155 }, // 6
    { cx: 228, cy: 220, w: 155, h: 150 }, // 7
    { cx: 188, cy: 320, w: 155, h: 145 }, // 8
    { cx: 202, cy: 425, w: 150, h: 145 }, // 9
    { cx: 242, cy: 530, w: 155, h: 150 }, // 10
    { cx: 322, cy: 600, w: 150, h: 155 }, // 11
];

// ─── single petal's mini-symbol (rendered inside foreignObject) ──────────────
const PetalMiniSymbol = memo(({ petalIndex, colors, selectedColor, onColorChange, onExpand }) => {
    const meta = PETAL_META[petalIndex];
    const foX = meta.cx - meta.w / 2;
    const foY = meta.cy - meta.h / 2;

    return (
        <foreignObject
            x={foX}
            y={foY}
            width={meta.w}
            height={meta.h}
            style={{ overflow: "visible", pointerEvents: "none" }}
        >
            {/* pointer-events div so clicks propagate correctly */}
            <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    pointerEvents: "auto",
                }}
            >
                {/* Tap target on the mini symbol to expand */}
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onExpand(petalIndex);
                    }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        cursor: "zoom-in",
                        zIndex: 2,
                        // only intercept clicks if no color is selected
                        pointerEvents: selectedColor ? "none" : "auto",
                    }}
                />
                <div style={{ width: "100%", height: "100%", pointerEvents: selectedColor ? "auto" : "none" }}>
                    <MiniSymbol
                        instanceId={String(petalIndex)}
                        colors={colors}
                        onColorChange={(partType, partIndex, color) =>
                            onColorChange(petalIndex, partType, partIndex, color)
                        }
                        selectedColor={selectedColor}
                    />
                </div>
            </div>
        </foreignObject>
    );
});
PetalMiniSymbol.displayName = "PetalMiniSymbol";

// ─── expanded overlay (fills the 708×708 SVG viewport) ───────────────────────
const ExpandedMiniSymbol = memo(({ petalIndex, colors, selectedColor, onColorChange, onClose }) => {
    return (
        <g style={{ pointerEvents: "all" }}>
            {/* semi-transparent backdrop */}
            <rect
                x={0}
                y={0}
                width={708.661}
                height={708.661}
                fill="rgba(0,0,0,0.45)"
                onClick={undefined}
                style={{ pointerEvents: "none" }}
            />

            {/* expanded symbol in foreignObject */}
            <foreignObject x={0} y={0} width={708.661} height={708.661}>
                <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        pointerEvents: "auto",
                    }}
                >
                    {/* Close / back button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        style={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            zIndex: 10,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "#d5af3c",
                            border: "2px solid #000",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: 18,
                            lineHeight: 1,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                            padding: 0,
                        }}
                        title="Close"
                    >
                        ✕
                    </button>

                    {/* Label */}
                    <div
                        style={{
                            position: "absolute",
                            top: 16,
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "rgba(213,175,60,0.92)",
                            color: "#000",
                            fontWeight: 600,
                            fontSize: 12,
                            padding: "3px 10px",
                            borderRadius: 20,
                            border: "1px solid #000",
                            whiteSpace: "nowrap",
                            pointerEvents: "none",
                            zIndex: 9,
                        }}
                    >
                        Petal {petalIndex + 1} · coloring
                    </div>

                    {/* Full-size MiniSymbol */}
                    <div style={{ width: "100%", height: "100%", pointerEvents: "auto" }}>
                        <MiniSymbol
                            instanceId={`expanded-${petalIndex}`}
                            colors={colors}
                            onColorChange={(partType, partIndex, color) =>
                                onColorChange(petalIndex, partType, partIndex, color)
                            }
                            selectedColor={selectedColor}
                        />
                    </div>
                </div>
            </foreignObject>
        </g>
    );
});
ExpandedMiniSymbol.displayName = "ExpandedMiniSymbol";

// ─── main wrapper ─────────────────────────────────────────────────────────────

/**
 * SymbolWithMiniSymbols
 *
 * Drop-in replacement for Symbol_without_desc when `isColoring6` is true.
 * It renders the base symbol and, when isColoring6 === true, overlays a
 * MiniSymbol inside each of the 12 outer petals.
 *
 * Props forwarded to the base symbol (petal colors, click handlers, etc.)
 * are all passed through via {...props}.
 *
 * Extra props consumed here:
 *   - isColoring6: boolean
 *   - selectedColor: string | null  — the currently picked color from the
 *                                     external color-picker
 */
const SymbolWithMiniSymbols = forwardRef((props, ref) => {

    // Per-petal mini-symbol color state
    const [miniColors, dispatch] = useReducer(miniColorsReducer, initialMiniState);

    // Which petal's mini-symbol is currently expanded (null = none)
    const [expandedPetal, setExpandedPetal] = useState(null);

    const handleColorChange = useCallback((petalIndex, partType, partIndex, color) => {
        dispatch({ petalIndex, partType, partIndex, color });
    }, []);

    const handleExpand = useCallback((petalIndex) => {
        setExpandedPetal(petalIndex);
    }, []);

    const handleClose = useCallback(() => {
        setExpandedPetal(null);
    }, []);

    // If isColoring6 is off, just render the base symbol unchanged
    if (!props.isColoring6) {
        return <Symbol_without_desc ref={ref} {...props} />;
    }

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {/*
        We keep the base Symbol_without_desc (the golden outline + 12 white
        petals) as-is. Its petal paths still receive click events for coloring
        the petal background (passed through via baseProps / onClick handlers).
      */}
            <Symbol_without_desc ref={ref} {...baseProps} isColoring6={true} />

            {/*
        Overlay SVG — same viewport as the base symbol, absolutely positioned
        on top. Contains:
          • one PetalMiniSymbol per outer petal  (visible when not expanded)
          • one ExpandedMiniSymbol               (visible only when expanded)
        pointer-events are carefully managed so that:
          - clicking the mini-symbol icon → expand
          - clicking the white area of the petal (outside the mini-symbol) → color petal (falls through to base)
          - when a color is selected → clicking inside mini-symbol colors it
      */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 708.661 708.661"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // Only intercept pointer events on the content we render here
                    pointerEvents: expandedPetal !== null ? "all" : "none",
                    overflow: "visible",
                }}
            >
                {/* Mini symbols inside petals (hidden while expanded) */}
                {expandedPetal === null &&
                    Array.from({ length: 12 }, (_, i) => (
                        <PetalMiniSymbol
                            key={i}
                            petalIndex={i}
                            colors={miniColors[i]}
                            selectedColor={selectedColor}
                            onColorChange={handleColorChange}
                            onExpand={handleExpand}
                        />
                    ))}

                {/* Expanded overlay */}
                {expandedPetal !== null && (
                    <ExpandedMiniSymbol
                        petalIndex={expandedPetal}
                        colors={miniColors[expandedPetal]}
                        selectedColor={selectedColor}
                        onColorChange={handleColorChange}
                        onClose={handleClose}
                    />
                )}
            </svg>
        </div>
    );
});

export default SymbolWithMiniSymbols;