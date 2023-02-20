export type Pixel = `${number}px`;

export type UseMediaQueryProps = {
  type: "max" | "min";
  width: Pixel;
}

export type UseMediaQueryResult = "match" | "unmatch" | "loading";