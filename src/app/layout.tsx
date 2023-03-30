import "#/lib/styles/reset.css";
import "#/lib/styles/tailwind.css";
import { Navbar } from "#/lib/components/layouts/navbar";
import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "./provider";
import { metadata } from "#/lib/configs/metadata";
import { inter, robotoMono } from "#/lib/configs/font";

export { metadata };

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
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