"use client";

import { ReactElement } from "react";
import { Tooltip } from "#/lib/components/atoms/tooltip";
import { Button, ButtonProps } from "#/lib/components/atoms/button";
import { FiCopy } from "react-icons/fi";
import { goscord } from "#/lib/configs/goscord";
import { toast } from "sonner";
import { clsx } from "clsx";
import { copyToClipboard } from "#/lib/utils/clipboard";

export function GoGetButton({ className, ...props }: ButtonProps): ReactElement {
  const copyText = async(): Promise<void> => {
    copyToClipboard(goscord.github.install);

    toast.success("Command copied to clipboard!");
  };

  return (
    <Tooltip text="Copy to clipboard!">
      <Button icon={<FiCopy />} onClick={() => copyText()} className={clsx("font-mono", className)} {...props}>
        {goscord.github.install}
      </Button>
    </Tooltip>
  );
}