import "#/lib/styles/reset.css";
import "#/lib/styles/font.css";
import "#/lib/styles/tailwind.css";
import { Navbar } from "#/lib/components/navbar/navbar";
import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "./provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goscord - A Discord API wrapper written in Golang",
  description: [
    "Goscord is a Discord bot creation API written in the Go programming language.",
    "It offers a high level API rich in possibilities and which evolves at the same pace as Discord."
  ].join(" "),

  themeColor: "#5aa469",

  icons: "/goscord.png"
};

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