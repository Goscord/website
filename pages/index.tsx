import { GetStaticPropsResult } from "next";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ReactElement } from "react";
import Button from "$lib/components/navigation/Button";

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
    <div className="h-screen bg-black-light grid place-content-center">
      <Button size="large">Test</Button>
    </div>
  );
}