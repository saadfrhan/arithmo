import fs from "fs";

const memoryFilePath = "./memory.txt";

// Function to read memory value from file
export const readMemoryFromFile = () => {
  try {
    const data = fs.readFileSync(memoryFilePath, "utf8");
    return parseFloat(data);
  } catch (err) {
    console.error("Error reading memory:", err);
    return null;
  }
};

// Function to write memory value to file
export const writeMemoryToFile = (value: number) => {
  try {
    fs.writeFileSync(memoryFilePath, value.toString());
    if (value > 0) {
      console.log(`Stored value ${value} in memory.`);
    } else {
      console.log(`Memory cleared.`);
    }
  } catch (err) {
    console.error("Error writing to memory:", err);
  }
};
