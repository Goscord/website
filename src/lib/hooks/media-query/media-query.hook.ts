import { useEffect, useState } from "react";
import { MediaQuery } from "./media-query.type";

export function useMediaQuery(query: MediaQuery): boolean {
  const queryWidth = Number(query.width.replace("px", ""));
  const windowWidth = window.innerWidth;

  const [match, setMatch] = useState(
    query.type === "max"
      ? windowWidth <= queryWidth
      : windowWidth >= queryWidth
  );

  useEffect(() => {
    // Create a media query list:
    const mediaQueryList = window.matchMedia(`(${query.type}-width: ${query.width})`);

    // Set the initial state:
    setMatch(mediaQueryList.matches);

    // Add a listener to the media query list:
    function listener(event: MediaQueryListEvent): void {
      setMatch(event.matches);
    }

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return match;
}