import { useState, useRef } from "react";
import { getRandomCells } from "./utils";
import useIOInfiniteScroll from "./useIOInfiniteScroll";

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
    <div className="scroll-section">
      <h1 className="scroll-section__title">Intersection observer</h1>
      <div ref={containerRef} className="scroll-section__container">
        {ioCells}
        <div className="invisible" style={{ height: "1px" }} ref={loaderRef} />
      </div>
    </div>
  );
};

export default InterSectionObserverContainer;
