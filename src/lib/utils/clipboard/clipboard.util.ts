export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Create temporary text area with the text content:
    const temp = document.createElement("textarea");
    temp.value = text;

    // Add the text area to the DOM:
    document.body.appendChild(temp);

    // Select text:
    temp.select();

    // Copy text:
    document.execCommand("copy");

    // Remove temporary text area:
    document.body.removeChild(temp);
  }
}