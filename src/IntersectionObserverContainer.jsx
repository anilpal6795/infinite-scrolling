import { useState, useRef } from "react";
import { getRandomCells } from "./utils";
import { useIOInfiniteScroll } from "./hooks";

const InterSectionObserverContainer = () => {
  const loaderRef = useRef();
  const containerRef = useRef();
  const [ioCells, setIOCells] = useState(getRandomCells(10));

  // Hook enclosing the Intersection observer functionality
  useIOInfiniteScroll(loaderRef, () => {
    setTimeout(() => {
      setIOCells((ioCells) => [
        ...ioCells,
        ...getRandomCells(10, ioCells.length),
      ]);

      containerRef.current.scrollTo({
        top: containerRef.current.scrollTop + 200,
        behavior: "smooth",
      });
    }, 500);
  });

  return (
    <div className="relative grow bg-white h-full p-4 mx-8 rounded drop-shadow-2xl">
      <h1 className="text-2xl text-center">Intersection observer</h1>
      <div
        ref={containerRef}
        className="mt-8 w-full h-5/6 overflow-y-auto rounded"
      >
        {ioCells}
        <div className="invisible" style={{ height: "1px" }} ref={loaderRef} />
      </div>
    </div>
  );
};

export default InterSectionObserverContainer;
