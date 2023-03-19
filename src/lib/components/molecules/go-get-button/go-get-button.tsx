"use client";

import { ReactElement } from "react";
import { Tooltip } from "#/lib/components/atoms/tooltip";
import { Button } from "#/lib/components/atoms/button";
import { FiCopy } from "react-icons/fi";
import { goscord } from "#/lib/configs/goscord";
import { toast } from "sonner";
import { GoGetButtonProps } from "./go-get-button.type";

export function GoGetButton({ size = "base" }: GoGetButtonProps): ReactElement {
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(goscord.github.install);

    toast.success("Command copied to clipboard!");
  };

  return (
    <Tooltip text="Copy to clipboard!">
      <Button size={size} icon={<FiCopy />} onClick={() => copyToClipboard()}>
        {goscord.github.install}
      </Button>
    </Tooltip>
  );
}