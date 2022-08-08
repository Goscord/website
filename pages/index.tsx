import { GetStaticPropsResult } from "next";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ReactElement } from "react";

interface HomeProps {
  exampleCode: string;
}

export function getStaticProps(): GetStaticPropsResult<HomeProps> {
  return {
    props: {
      exampleCode: readFileSync(`${resolve()}/lib/examples/0-0-2.go`, { encoding: "utf-8" })
    }
  };
}

export default function Home({ exampleCode }: HomeProps): ReactElement {
  return (
    <p>Hello Goscord !</p>
  );
}