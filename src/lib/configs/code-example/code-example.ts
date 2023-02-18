import { readFileSync } from "fs";

export const codeExample = readFileSync(`${__dirname}/code-example.go`, "utf8");