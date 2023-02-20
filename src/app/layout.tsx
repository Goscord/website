"use client";

import "#/lib/styles/reset.css";
import "#/lib/styles/font.css";
import "#/lib/styles/tailwind.css";
import { Navbar } from "#/lib/components/navbar/navbar";
import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "./provider";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="en">
      <head />

      <body>
        <Provider>
          <Navbar />

          {children}
        </Provider>
      </body>
    </html>
  );
}