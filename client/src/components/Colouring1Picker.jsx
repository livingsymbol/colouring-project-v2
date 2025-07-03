import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Colouring1Picker = ({
  colors,
  onColorSelect,
  swatchSize,
  gridSize,
  selectedColor,
}) => {
  const containerRef = useRef(null);
  const { cols } = gridSize;

  const [responsiveSize, setResponsiveSize] = useState({
    swatchSize,
    gridGap: 5,
  });

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      console.log('containerWidth', containerWidth)

      const maxGap = 5;
      const minGap = 1;
      const minSwatch = 14;

      // Try to find max swatch size that fits container
      let calculatedGap = maxGap;
      let availableWidth = containerWidth - calculatedGap * (cols - 1);
      let calculatedSwatch = Math.floor(availableWidth / cols);

      // Clamp swatchSize and gap
      if (calculatedSwatch < minSwatch) {
        calculatedSwatch = minSwatch;
        calculatedGap = Math.max(
          minGap,
          Math.floor((containerWidth - cols * minSwatch) / (cols - 1))
        );
      }

      setResponsiveSize({
        swatchSize: calculatedSwatch,
        gridGap: calculatedGap,
      });
    };

    updateSize(); // initial run
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [swatchSize, gridSize]);

  const handleColorClick = (color) => {
    onColorSelect?.(color);
  };

  return (
    <div ref={containerRef} className="w-full max-w-[900px] mx-auto">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${responsiveSize.swatchSize}px)`,
          gap: `${responsiveSize.gridGap}px`,
          justifyContent: "center",
          width: "100%",
        }}
      >
        {colors.flat().map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              width: `${responsiveSize.swatchSize}px`,
              height: `${responsiveSize.swatchSize}px`,
              cursor: "pointer",
              boxSizing: "border-box",
              border:
                color === selectedColor
                  ? "2px solid #000"
                  : "2px solid #a58c3a",
              transform: color === selectedColor ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.1s ease-in-out, border 0.1s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
};

Colouring1Picker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorSelect: PropTypes.func.isRequired,
  swatchSize: PropTypes.number,
  gridSize: PropTypes.shape({
    rows: PropTypes.number,
    cols: PropTypes.number,
  }),
  selectedColor: PropTypes.string,
};

Colouring1Picker.defaultProps = {
  swatchSize: 30,
  gridSize: { rows: 6, cols: 20 },
};

export default Colouring1Picker;
