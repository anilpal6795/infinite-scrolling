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
    <div className="grow bg-white h-full p-4 mx-8 rounded drop-shadow-2xl">
      <h1 className="text-2xl text-center">onScroll</h1>
      <div
        ref={containerRef}
        className="mt-8 w-full h-5/6 overflow-y-auto rounded"
        onScroll={onScrollCellsUpdateDebounced}
      >
        {onScrollCells}
      </div>
    </div>
  );
};

export default OnScrollContainer;
