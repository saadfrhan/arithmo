#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import { readMemoryFromFile, writeMemoryToFile } from "./utils/file.js";
import { sqrt } from "./operations/squareRoot.js";
import { cos, sin, tan } from "./operations/trigonometry.js";
import { carret } from "./operations/carret.js";
import getFromMemory from "./operations/get-from-memory.js";
import writeResultToFile from "./operations/write-result-to-file.js";

const program = new Command();

program.version("1.0.0").description("A CLI calculator");

// Define the store command
program
  .command("store")
  .argument("<value>")
  .description("Store a value in memory")
  .action((value) => {
    writeMemoryToFile(parseFloat(value));
  });

// Define the recall command
program
  .command("recall")
  .description("Recall the value stored in memory")
  .action(() => {
    const memoryValue = readMemoryFromFile();
    console.log(
      memoryValue !== null
        ? `Value in memory: ${memoryValue}`
        : "Memory is empty."
    );
  });

// Define the clear command
program
  .command("clear")
  .description("Clear the value stored in memory")
  .action(() => {
    writeMemoryToFile(0);
  });

program
  .argument("[<expression>...]", "Arithmetic expression to evaluate")
  .option(
    "-p, --precision <number>",
    "Specify the number of decimal places to round the result to",
    parseInt
  )
  .option("-f, --file <path>", "Read expression from file")
  .option("-o, --output <path>", "Output result to file")
  .description("Arithmetic expression to evaluate")
  .action((expression: string[], options) => {
    if (options.file) {
      writeResultToFile(expression, options.file);
    }

    if (expression.includes("mem")) {
      getFromMemory(expression);
    }

    if (expression.includes("sin")) {
      sin(expression);
    }

    if (expression.includes("cos")) {
      cos(expression);
    }

    if (expression.includes("tan")) {
      tan(expression);
    }

    if (expression.includes("x")) {
      const index = expression.indexOf("x");
      expression[index] = "*";
    }

    if (expression.includes("sqrt")) {
      sqrt(expression);
    }

    const item = expression.find((item) =>
      item.includes("^")
    ) as `${string}^${string}`;
    if (item) {
      carret(expression, item);
    }

    const result = eval(expression.join(""));
    const precision =
      options.precision !== undefined
        ? options.precision
        : result % 1 === 0
        ? 0
        : 2;
    const roundedResult = result.toFixed(precision);

    if (options.output) {
      fs.writeFileSync(options.output, roundedResult);
      console.log(`Result written to file: ${options.output}`);
      return;
    }

    console.log(`Result: ${roundedResult}`);
  });

if (process.argv.length < 3) {
  program.help();
}

program.parse(process.argv);
