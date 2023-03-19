"use client";

import { ReactElement } from "react";
import { Button } from "#/lib/components/button";
import { FiCopy } from "react-icons/fi";
import { Text } from "#/lib/components/text";
import { Tooltip } from "#/lib/components/tooltip";
import { goscord } from "#/lib/configs/goscord";
import { toast } from "sonner";
import Image from "next/image";
import goscordBrand from "~/goscord-brand.png";

export function HeaderSection(): ReactElement {
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(goscord.github.install);

    toast.success("Command copied to clipboard!");
  };

  return (
    <header className="bg-gray py-20 flex justify-center items-center flex-col gap-5">
      <Image src={goscordBrand} alt="Goscord brand" className="sm:w-11/12 w-10/12 max-w-5xl" />

      <Text size="2xl">A powerful Discord API in Golang.</Text>

      <Tooltip text="Copy to clipboard!">
        <Button size="large" icon={<FiCopy />} onClick={() => copyToClipboard()}>
          {goscord.github.install}
        </Button>
      </Tooltip>
    </header>
  );
}