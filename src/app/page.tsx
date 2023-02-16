import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import Image from "next/image";

export default function Home(): ReactElement {
  return (
    <>
      <header className="bg-gray py-36 flex justify-center items-center flex-col gap-14">
        <div className="relative w-10/12 h-44">
          <Image src="/goscord-brand.png" alt="Goscord brand" fill />
        </div>

        <Text size="3xl">The best Discord API in Golang.</Text>
      </header>
    </>
  );
}