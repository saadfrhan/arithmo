import { readMemoryFromFile } from "src/utils/file";

export default function getFromMemory(expression: string[]) {
  const memoryValue = readMemoryFromFile();
  if (memoryValue !== null) {
    const memIndex = expression.indexOf("mem");
    expression.splice(memIndex, 1, memoryValue.toString());
    expression.splice(memIndex + 1);
    return expression;
  } else {
    console.log("Memory is empty.");
    return;
  }
}
