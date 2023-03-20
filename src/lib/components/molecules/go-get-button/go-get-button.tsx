"use client";

import { ReactElement } from "react";
import { Tooltip } from "#/lib/components/atoms/tooltip";
import { Button, ButtonProps } from "#/lib/components/atoms/button";
import { FiCopy } from "react-icons/fi";
import { goscord } from "#/lib/configs/goscord";
import { toast } from "sonner";

export function GoGetButton({ ...props }: ButtonProps): ReactElement {
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(goscord.github.install);

    toast.success("Command copied to clipboard!");
  };

  return (
    <Tooltip text="Copy to clipboard!">
      <Button icon={<FiCopy />} onClick={() => copyToClipboard()} {...props}>
        {goscord.github.install}
      </Button>
    </Tooltip>
  );
}