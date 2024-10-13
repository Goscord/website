"use client";

import type { ReactElement } from "react";
import { Tooltip } from "#/lib/components/atoms/tooltip";
import type { ButtonProps } from "#/lib/components/atoms/button";
import { Button } from "#/lib/components/atoms/button";
import { FiCopy } from "react-icons/fi";
import { goscord } from "#/lib/configs/goscord";
import { toast } from "sonner";
import { clsx } from "clsx";
import { copyToClipboard } from "#/lib/utils/clipboard";

export function GoGetButton({ className, ...props }: ButtonProps): ReactElement {
  const copyText = async(): Promise<void> => {
    await copyToClipboard(goscord.github.install);

    toast.success("Command copied to clipboard!");
  };

  return (
    <Tooltip text="Copy to clipboard!">
      <Button icon={<FiCopy />} onClick={() => void copyText()} className={clsx("font-mono", className)} {...props}>
        {goscord.github.install}
      </Button>
    </Tooltip>
  );
}