import { validateVal } from "./utils";

export const questions = [
  {
    type: 'list',
    name: 'operation',
    message: 'Choose an operation:',
    choices: [
      "Add",
      "Subtract",
      "Multiply",
      "Divide",
      "Exponentiation",
      "Modulus"
    ],
    filter: (val: string) => val.toUpperCase(),
    validate: validateVal()
  },
  {
    type: 'input',
    name: 'first_num',
    message: 'Enter a first number:',
    filter: (val: string) => Number(val),
    validate: validateVal()
  },
  {
    type: 'input',
    name: 'second_num',
    message: 'Enter a second number:',
    filter: (val: string) => Number(val),
    validate: validateVal(),
  },
]


