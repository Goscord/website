export type Pixel = `${number}px`;

export type MediaQuery = {
  type: "max" | "min";
  width: Pixel;
}