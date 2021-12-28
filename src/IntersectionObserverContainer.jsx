import { useState, createRef } from "react";
import { getRandomCells } from "./utils";
import { useIOInfiniteScroll } from "./hooks";

const InterSectionObserverContainer = () => {
  const loaderRef = createRef();
  const [ioCells, setIOCells] = useState(getRandomCells(10));

  // Hook enclosing the Intersection observer functionality
  useIOInfiniteScroll(loaderRef, () =>
    setTimeout(() => {
      setIOCells((ioCells) => [
        ...ioCells,
        ...getRandomCells(10, ioCells.length),
      ]);
    }, 2000)
  );

  return (
    <div className="grow bg-white h-full p-4 mx-8 rounded drop-shadow-2xl">
      <h1 className="text-2xl text-center">Intersection observer</h1>
      <div className="mt-8 w-full h-5/6 overflow-y-auto rounded">
        {ioCells}
        <div
          className="w-full py-8 text-center my-2 rounded bg-slate-500"
          ref={loaderRef}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default InterSectionObserverContainer;
