import "#/lib/styles/tailwind.css";
import { PropsWithChildren, ReactElement } from "react";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="en">
      <head />

      <body>{children}</body>
    </html>
  );
}