import { ReactElement } from "react";

export default function Head(): ReactElement {
  return (
    <>
      <title>Goscord - A Discord API wrapper written in Golang</title>

      {/* Metatags */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <meta
        name="description"
        content="Goscord is a Discord bot creation API written in the Go programming language.
          It offers a high level API rich in possibilities and which evolves at the same pace as Discord."
      />

      <meta name="theme-color" content="#5aa469" />

      {/* Favicon */}
      <link rel="shortcut icon" href="/goscord.png" type="image/png" />
    </>
  );
}