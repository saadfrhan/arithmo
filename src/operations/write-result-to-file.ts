import { readFileSync } from "fs";

export default function writeResultToFile(expression: string[], file: string) {
  try {
    const data = readFileSync(file, "utf8");
    expression = data.split(" ");
    return expression;
  } catch (err) {
    console.error("Error reading file:", err);
    return;
  }
}
