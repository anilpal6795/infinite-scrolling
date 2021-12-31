import { useState, useMemo, useRef } from "react";
import debounce from "lodash.debounce";
import { getRandomCells } from "./utils";

const OnScrollContainer = () => {
  const containerRef = useRef();
  const [onScrollCells, setOnScrollCells] = useState(getRandomCells(10));
  // OnScroll callback
  const onScrollCellsUpdate = (scrollEvent) => {
    const { scrollHeight, offsetHeight, scrollTop } = scrollEvent.target;
    if (scrollHeight === scrollTop + offsetHeight) {
      setTimeout(() => {
        setOnScrollCells((onScrollCells) => [
          ...onScrollCells,
          ...getRandomCells(10, onScrollCells.length),
        ]);

        containerRef.current.scrollTo({
          top: containerRef.current.scrollTop + 200,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  const onScrollCellsUpdateDebounced = useMemo(
    () => debounce(onScrollCellsUpdate, 100),
    []
  );
  return (
    <div className="scroll-section">
      <h1 className="scroll-section__title">onScroll</h1>
      <div
        ref={containerRef}
        className="scroll-section__container"
        onScroll={onScrollCellsUpdateDebounced}
      >
        {onScrollCells}
      </div>
    </div>
  );
};

export default OnScrollContainer;
