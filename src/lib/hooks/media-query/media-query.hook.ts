import { useEffect, useState } from "react";
import type { UseMediaQueryProps, UseMediaQueryResult } from "./media-query.type";

export function useMediaQuery(query: UseMediaQueryProps): UseMediaQueryResult {
  const [match, setMatch] = useState<UseMediaQueryResult>("loading");

  useEffect(() => {
    // Create a media query list:
    const mediaQueryList = window.matchMedia(`(${query.type}-width: ${query.width})`);

    // Set the initial state:
    setMatch(mediaQueryList.matches ? "match" : "unmatch");

    // Add a listener to the media query list:
    function listener(event: MediaQueryListEvent): void {
      setMatch(event.matches ? "match" : "unmatch");
    }

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return match;
}