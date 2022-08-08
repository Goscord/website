import { GetStaticPropsResult } from "next";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ReactElement } from "react";

export default function Home({ exampleCode }: HomeProps): ReactElement {
  return (
    <p>Hello Goscord !</p>
  );
}