"use client";

import type { ReactElement } from "react";
import { useEffect } from "react";
import type { CodeProps } from "./code.type";
import { FiCopy } from "react-icons/fi";
import { Tooltip } from "../tooltip";
import { toast } from "sonner";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-go";

export function Code({ code, language }: CodeProps): ReactElement {
  const copyToClipboard = async(): Promise<void> => {
    await navigator.clipboard.writeText(code);

    toast.success("Copied to clipboard!");
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="relative">
      <span className="absolute top-4 right-4">
        <Tooltip text="Copy to clipboard!">
          <FiCopy
            className="text-white text-xl brightness-75 cursor-pointer hover:brightness-100 active:scale-95"
            onClick={() => void copyToClipboard()}
          />
        </Tooltip>
      </span>

      <pre className="rounded shadow">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}