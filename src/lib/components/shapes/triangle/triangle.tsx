import { ReactElement } from "react";
import { TriangleProps } from "./triangle.type";

export function Triangle({ color }: TriangleProps): ReactElement {
  return (
    <svg width="1440" height="81" viewBox="0 0 1440 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1440V80.5L0 0Z" fill={color} />
    </svg>
  );
}