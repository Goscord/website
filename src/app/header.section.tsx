import { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import { GoGetButton } from "#/lib/components/molecules/go-get-button";
import Image from "next/image";
import goscordBrand from "~/goscord-brand.png";

export function HeaderSection(): ReactElement {
  return (
    <header className="bg-gray py-20 flex justify-center items-center flex-col gap-5">
      <Image src={goscordBrand} alt="Goscord brand" className="sm:w-11/12 w-10/12 max-w-5xl" />

      <Text size="2xl" className="text-center">A powerful Discord API in Golang.</Text>

      <GoGetButton size="large" />
    </header>
  );
}