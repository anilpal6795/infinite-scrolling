export const getRandomColor = () =>
  `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;

// Get `cellsCount` number of randomly colored cells
export const getRandomCells = (cellsCount, preset = 0) => {
  const cells = [];
  for (let i = 0; i < cellsCount; i++) {
    const bgColor = getRandomColor();
    cells.push(
      <div
        key={`${bgColor}-${preset + i}`}
        className="color-cell"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {bgColor}
      </div>
    );
  }
  return cells;
};
