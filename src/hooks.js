import { useEffect } from "react";

export const useIOInfiniteScroll = (loaderRef, intersectionCallback) => {
  useEffect(() => {
    const IO = new IntersectionObserver(
      (entries) => {
        const [loaderEntry] = entries;
        if (loaderEntry.isIntersecting) intersectionCallback();
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (loaderRef.current) IO.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) IO.unobserve(loaderRef.current);
    };
  }, []);
};
