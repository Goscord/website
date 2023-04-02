import { beforeEach, describe, expect, test } from "vitest";
import { copyToClipboard } from "./clipboard.util";

describe("copyToClipboard", () => {
  beforeEach(() => {
    let clipboard = "";

    Object.assign(navigator, {
      clipboard: {
        writeText: (text: string) => clipboard = text,
        readText: () => clipboard
      }
    });
  });

  test("should copy the text to the clipboard", async() => {
    const text = "Lorem ipsum dorem si almim";

    await copyToClipboard(text);

    const clipboardContent = await navigator.clipboard.readText();

    expect(clipboardContent).toBe(text);
  });
});